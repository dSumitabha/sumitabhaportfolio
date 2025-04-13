import React from 'react';

const TrackCard = ({ track }) => {
  const { name, artists, album, uri } = track;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-72 mb-6">
      <img src={album.image} alt={album.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold truncate">{name}</h3>
        <p className="text-gray-600 text-sm truncate">{artists.join(', ')}</p>
        <div className="mt-4">
          <a
            href={`https://open.spotify.com/track/${uri.split(':')[2]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
