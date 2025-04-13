import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const TOKEN_FILE_PATH = path.resolve('./spotify_tokens.json');

async function saveTokens(tokens) {
  const expiresAt = Date.now() + tokens.expires_in * 1000; // Token expiry time (milliseconds)
  const tokenData = { ...tokens, expires_at: expiresAt };

  fs.writeFileSync(TOKEN_FILE_PATH, JSON.stringify(tokenData, null, 2));
}

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  
  if (!code) {
    return NextResponse.json({ error: 'Missing authorization code' }, { status: 400 });
  }

  const body = new URLSearchParams();
  body.append('grant_type', 'authorization_code');
  body.append('code', code);
  body.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URI);
  body.append('client_id', process.env.SPOTIFY_CLIENT_ID);
  body.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET);

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    if (!response.ok) {
      throw new Error('Error fetching access token');
    }

    const data = await response.json();
    await saveTokens(data); // Save the access token and refresh token

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error exchanging code for token' }, { status: 500 });
  }
}
