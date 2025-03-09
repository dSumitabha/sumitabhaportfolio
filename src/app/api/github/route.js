import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

export async function GET() {
  try {
    
    const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    const userData = await userResponse.json();

    
    const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    const reposData = await reposResponse.json();

    return NextResponse.json({
      username : userData.login,
      avatar: userData.avatar_url,
      followers: userData.followers,
      following: userData.following,
      repositories: reposData.map(repo => ({ name: repo.name, is_private: repo.private, description: repo.description, language: repo.language, url: repo.html_url, api_url: repo.url }))
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}