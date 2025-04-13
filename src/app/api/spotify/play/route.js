import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const tokensFilePath = path.join(process.cwd(), 'spotify_tokens.json');

export async function POST(req) {
  try {
    const { trackUri } = await req.json();

    if (!trackUri) {
      return new Response(JSON.stringify({ error: 'Track URI is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const tokensData = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'));

    if (!tokensData.access_token) {
      return new Response(JSON.stringify({ error: 'Access token is missing.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.spotify.com/v1/me/player/play', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokensData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uris: [trackUri], // The URI of the track to play
      }),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to play the track on Spotify.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Track is now playing.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'An error occurred while trying to play the track.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
