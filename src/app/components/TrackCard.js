import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const TrackCard = ({ track, isPlaying, onPlayClick, onPauseClick }) => {
  const { name, artists, album, uri } = track;

  const handleClick = async () => {
    if (isPlaying) {
      await onPauseClick();
    } else {
      await onPlayClick(uri);
    }
  };

  return (
    <div className={`col-span-4 bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-all duration-300 ${isPlaying ? 'border-2 border-green-500' : ''}`}>
      <img src={album.image} alt={album.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold truncate">{name}</h3>
        <p className="text-gray-600 text-sm truncate">{artists.join(', ')}</p>
        <div className="mt-4">
          <a href={`https://open.spotify.com/track/${uri.split(':')[2]}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Listen on Spotify
          </a>
        </div>
        {isPlaying && <p className="text-green-500 text-sm mt-1">Now Playing...</p>}
        <button
          onClick={handleClick}
          className="mt-4 flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default TrackCard;