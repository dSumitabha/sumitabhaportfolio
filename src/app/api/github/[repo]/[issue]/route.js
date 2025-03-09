import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

export async function POST(request, { params }) {
  try {
    const { title, body } = await request.json();

    
    const issueResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${params.repo}/issues`,
      {
        method: 'POST',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
      }
    );
    const issueData = await issueResponse.json();

    return NextResponse.json({ issue_url: issueData.html_url });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}