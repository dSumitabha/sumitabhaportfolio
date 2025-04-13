'use server';

import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

const TOKENS_PATH = path.resolve(process.cwd(), 'spotify_tokens.json');

export async function GET() {
  try {
    const tokensRaw = await readFile(TOKENS_PATH, 'utf-8');
    const { access_token } = JSON.parse(tokensRaw);

    const res = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    if (res.status === 401) {
      return NextResponse.json({ error: 'Access token expired or unauthorized.' }, { status: 401 });
    }

    const data = await res.json();
    const topTracks = data.items.map(track => ({
      id: track.id,
      name: track.name,
      artists: track.artists.map(artist => artist.name),
      album: {
        name: track.album.name,
        image: track.album.images?.[0]?.url || null
      },
      uri: track.uri
    }));

    return NextResponse.json(topTracks);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch top tracks', details: err.message }, { status: 500 });
  }
} 