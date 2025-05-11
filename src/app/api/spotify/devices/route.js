import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Path to the tokens file at root level
const tokensFilePath = path.join(process.cwd(), 'spotify_tokens.json');

export async function GET() {
  try {
    // Read access token from the file
    const tokensData = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'));

    if (!tokensData.access_token) {
      return new Response(JSON.stringify({ error: 'Access token is missing.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Fetch available devices
    const response = await fetch('https://api.spotify.com/v1/me/player/devices', {
      headers: {
        Authorization: `Bearer ${tokensData.access_token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'An error occurred while fetching devices.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
