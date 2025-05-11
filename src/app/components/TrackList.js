import React from 'react';
import TrackCard from './TrackCard';

const TrackList = ({ tracks, onPlayClick }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} onPlayClick={onPlayClick} />
      ))}
    </div>
  );
};

export default TrackList;
