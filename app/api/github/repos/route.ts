import { Octokit } from '@octokit/rest';
import { type NextRequest } from 'next/server';
import clientPromise from '@/lib/mongodb';

async function handler(req: NextRequest): Promise<Response> {
  const query = new URL(req.url).searchParams;
  const client = await clientPromise;
  const github = client.db().collection('github');
  const token: any = await github.findOne({ clekrUserId: query.get('userId') });
  console.log("token -> ", token?.accessToken)

  if (!token) {
    return Response.json([]);
  }

  const octokit = new Octokit({ auth: token?.accessToken });
  
  try {
    const repos = await octokit.repos.listForAuthenticatedUser({
      visibility: 'all',
      affiliation: 'owner',
      sort: 'updated',
    });
    return Response.json(repos.data)
  } catch (error) {
    return Response.json([]);
  }
}

export {
  handler as GET
}