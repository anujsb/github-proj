import { Octokit } from '@octokit/rest';

export async function getUserRepositories(accessToken: string) {
  const octokit = new Octokit({ auth: accessToken });

  try {
    const repos = await octokit.repos.listForAuthenticatedUser();
    return repos.data;
  } catch (error) {
    throw new Error('Failed to fetch repositories');
  }
}

export async function getOpenPRs(repoId: string, accessToken: string, owner: string) {
  const octokit = new Octokit({ auth: accessToken });

  try {
    const prs = await octokit.pulls.list({
      owner,
      repo: repoId,
      state: 'open',
    });
    return prs.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch pull requests');
  }
}