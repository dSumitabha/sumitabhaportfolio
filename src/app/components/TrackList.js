import React from 'react';
import TrackCard from './TrackCard';

const TrackList = ({ tracks, onPlayClick, onPauseClick, currentlyPlayingUri }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
      {tracks.map((track) => (
        <TrackCard key={track.uri} track={track} isPlaying={track.uri === currentlyPlayingUri} onPlayClick={onPlayClick} onPauseClick={onPauseClick}/>
      ))}
    </div>
  );
};

export default TrackList;
