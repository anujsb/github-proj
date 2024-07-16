import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';
import clientPromise from '@/lib/mongodb';

const client_id = process.env.GITHUB_CLIENT_ID!;
const client_secret = process.env.GITHUB_CLIENT_SECRET;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  const code = searchParams.get('code');
  const client = await clientPromise;

  if (!code) {
    return NextResponse.redirect('https://github.com/login/oauth/authorize?' + new URLSearchParams({
      client_id,
      scope: 'repo read:user write:repo_hook read:repo_hook',
    }));
  }

  try {
    const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
      client_id,
      client_secret,
      code,
    }, {
      headers: { Accept: 'application/json' },
    });

    console.log(tokenResponse.data, tokenResponse.status)

    const accessToken = tokenResponse.data.access_token;
    const github = client.db().collection('github');
    if (tokenResponse.status === 200) {
      console.log("Setting cookie")
      const existingToken = await github.findOne({ clekrUserId: userId });
      console.log("Existing token -> ", existingToken)
      if (existingToken) {
        await github.updateOne({ clekrUserId: userId }, { $set: { accessToken } });
      } else {
        await github.insertOne({ clekrUserId: userId, accessToken });
      }
    }
    return NextResponse.json({ accessToken });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}