"use client"
import React, { useEffect, useState } from 'react';
import DeviceSelector from '../components/DeviceSelector';
import TrackList from '../components/TrackList';

const SpotifyCactroPage = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [currentlyPlayingUri, setCurrentlyPlayingUri] = useState(null);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await fetch('/api/spotify/top-tracks');
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCurrentlyPlaying = async () => {
      try {
        const res = await fetch('/api/spotify/now-playing');
        const data = await res.json();
        if (data && data.id && data.uri) {
          setCurrentlyPlayingUri(data.uri);
          console.log(data.id)
        }
      } catch (error) {
        console.error('Error fetching now playing:', error);
      }
    };

    fetchTopTracks();
    fetchCurrentlyPlaying();
  }, []);

  const handlePlayClick = async (trackUri) => {
    if (currentlyPlayingUri === trackUri) {
      await handlePauseClick();
      return;
    }

    const res = await fetch('/api/spotify/play', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trackUri, deviceId: selectedDevice }),
    });

    const data = await res.json();

    if (res.ok) {
      setCurrentlyPlayingUri(trackUri);
      console.log('Track is playing');
    } else {
      console.error('Play error:', data);
    }
  };

  const handlePauseClick = async () => {
    const res = await fetch('/api/spotify/pause', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (res.ok) {
      setCurrentlyPlayingUri(null);
      console.log('Track is paused');
    } else {
      console.error('Pause error:', data);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Top Tracks</h1>

      <DeviceSelector onSelectDevice={setSelectedDevice} />

      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <TrackList
          tracks={tracks}
          onPlayClick={handlePlayClick}
          currentlyPlayingUri={currentlyPlayingUri}
        />
      )}
    </div>
  );
};

export default SpotifyCactroPage;
