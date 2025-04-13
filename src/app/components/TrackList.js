import React from 'react';
import TrackCard from './TrackCard';

const TrackList = ({ tracks, onPlayClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} onPlayClick={onPlayClick} />
      ))}
    </div>
  );
};

export default TrackList;
