"use server";
import clientPromise from "@/lib/mongodb";
import { Octokit } from '@octokit/rest';
import { currentUser } from "@clerk/nextjs/server";

export const getRepos = async () => {
    const client = await clientPromise;
    const github = client.db().collection('github');
    const token: any = await github.findOne({ clekrUserId: "userId" });

    const octokit = new Octokit({ auth: token?.accessToken });
    let data = await octokit.repos.listForAuthenticatedUser({
      visibility: 'all',
      affiliation: 'owner',
      sort: 'updated',
    });
    return data.data;
  }