import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  const scopes = [
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-modify-playback-state'
  ].join(' ');

  const queryParams = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scopes,
    redirect_uri: redirectUri
  });

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${queryParams.toString()}`;

  return NextResponse.redirect(spotifyAuthUrl);
}
