import { readFileSync } from 'fs';
import path from 'path';

export function getSpotifyToken() {
  try {
    const filePath = path.resolve('spotify_tokens.json'); // Now points to the root directory
    const data = JSON.parse(readFileSync(filePath, 'utf8'));

    if (data && data.access_token) {
      return data;
    } else {
      throw new Error('Spotify token not found');
    }
  } catch (error) {
    console.error('Error reading Spotify token:', error);
    return null;
  }
}
