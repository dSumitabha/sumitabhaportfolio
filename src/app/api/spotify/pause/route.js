import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Path to the tokens file
const tokensFilePath = path.join(process.cwd(), 'spotify_tokens.json');

export async function POST(req) {
  try {
    // Read the spotify_tokens.json file
    const tokensData = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'));

    if (!tokensData.access_token) {
      return new Response(JSON.stringify({ error: 'Access token is missing.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Make a request to Spotify to pause the current playback
    const response = await fetch('https://api.spotify.com/v1/me/player/pause', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokensData.access_token}`,
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to pause the track on Spotify.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Track has been paused.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'An error occurred while trying to pause the track.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
