import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';


const tokensFilePath = path.join(process.cwd(), 'spotify_tokens.json');

export async function GET(req) {
  try {

    const tokensData = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'));
    
    if (!tokensData.access_token) {
      return new Response(JSON.stringify({ error: 'Access token is missing or expired.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${tokensData.access_token}`,
      },
    });

    if (response.status === 204) {
      // No track is currently playing
      return new Response(JSON.stringify({ message: 'No track is currently playing.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Error fetching the currently playing track.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();

    if (!data.item) {
      return new Response(JSON.stringify({ message: 'No track is currently playing.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(data.item), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'An error occurred while fetching the currently playing track.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
