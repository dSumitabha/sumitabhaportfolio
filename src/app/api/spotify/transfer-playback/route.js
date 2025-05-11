import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

export async function POST(req) {
  try {
    const body = await req.json();
    const { deviceId, play = true } = body;

    if (!deviceId) {
      return NextResponse.json({ error: 'Device ID is required' }, { status: 400 });
    }

    const tokensPath = path.join(process.cwd(), 'spotify_tokens.json');
    const tokenData = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

    if (!tokenData.access_token) {
      return NextResponse.json({ error: 'Access token not found' }, { status: 403 });
    }

    const response = await fetch('https://api.spotify.com/v1/me/player', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        play,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      return NextResponse.json({ error: errorResponse }, { status: response.status });
    }

    return NextResponse.json({ message: 'Playback transferred successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error transferring playback:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
