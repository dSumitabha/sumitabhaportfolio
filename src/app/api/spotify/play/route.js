import { NextResponse } from 'next/server';
import { getSpotifyToken } from '../../../../helpers/spotifyToken'; 

export async function POST(req) {
  try {
    const { trackUri } = await req.json();

    // Get the access token from the stored file
    const tokenData = getSpotifyToken();
    if (!tokenData || !tokenData.access_token) {
      return NextResponse.json({ error: 'No token available' }, { status: 401 });
    }

    const accessToken = tokenData.access_token;

    // Make a request to Spotify's API to play the track
    const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/play', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uris: [trackUri] }),
    });

    if (spotifyResponse.ok) {
      return NextResponse.json({ message: 'Track is now playing!' });
    } else {
      const errorData = await spotifyResponse.json();
      console.error('Error response from Spotify:', errorData);  // Log the error from Spotify API
      return NextResponse.json({ error: errorData }, { status: spotifyResponse.status });
    }
  } catch (error) {
    console.error('Error playing track:', error);
    return NextResponse.json({ error: 'An error occurred while trying to play the track' }, { status: 500 });
  }
}
