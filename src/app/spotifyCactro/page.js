"use client"
import React, { useEffect, useState } from 'react';
import DeviceSelector from '../components/DeviceSelector';
import TrackList from '../components/TrackList';

const SpotifyCactroPage = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);

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

    fetchTopTracks();
  }, []);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify/now-playing');
        const data = await response.json();
        if (data && data.id) {
          console.log(data.id);
          setCurrentlyPlayingId(data.id);
        } else {
          setCurrentlyPlayingId(null);
        }
      } catch (error) {
        console.error('Error fetching now playing track:', error);
      }
    };

    fetchNowPlaying();
  }, []);

  const handlePlayClick = async (trackUri) => {
    const res = await fetch('/api/spotify/play', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trackUri, deviceId: selectedDevice }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log('Track is playing');
      setCurrentlyPlayingId(data.id); // Optional: update immediately
    } else {
      console.error('Play error:', data);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Top Tracks</h1>

      <DeviceSelector onSelectDevice={setSelectedDevice} />

      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <TrackList tracks={tracks} onPlayClick={handlePlayClick} currentlyPlayingId={currentlyPlayingId} />
      )}
    </div>
  );
};

export default SpotifyCactroPage;
