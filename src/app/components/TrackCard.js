import React from 'react';

const TrackCard = ({ track, onPlayClick }) => {
  const { name, artists, album, uri } = track;

  const handlePlayClick = async () => {
    if (onPlayClick) {
      await onPlayClick(uri);
    }
  };

  return (
    <div className="col-span-4 bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <img src={album.image} alt={album.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold truncate">{name}</h3>
        <p className="text-gray-600 text-sm truncate">{artists.join(', ')}</p>
        <div className="mt-4">
          <a href={`https://open.spotify.com/track/${uri.split(':')[2]}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline" >
            Listen on Spotify
          </a>
        </div>
        <button onClick={handlePlayClick} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none" >
          Play
        </button>
      </div>
    </div>
  );
};

export default TrackCard;
