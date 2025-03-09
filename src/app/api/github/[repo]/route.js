import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

export async function GET(request, { params }) {
  try {
    
    const repoResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${params.repo}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    const repoData = await repoResponse.json();

    return NextResponse.json({
      avatar: repoData.owner.avatar_url,
      name: repoData.name,
      description: repoData.description,
      is_private : repoData.private,
      visibility : repoData.visibility,
      language : repoData.language,
      url: repoData.html_url,
      api_url: repoData.url,
      stars: repoData.stargazers_count,
      forks: repoData.forks_count
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}