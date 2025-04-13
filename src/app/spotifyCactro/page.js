"use client"
import React, { useEffect, useState } from 'react';
import TrackList from '../components/TrackList';


const SpotifyCactroPage = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handlePlayClick = async (trackUri) => {
    const res = await fetch('/api/spotify/play', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trackUri }),
    });
  
    const data = await res.json();
  
    if (res.ok) {
      console.log('Track is playing');
    } else {
      console.error('Play error:', data);
    }
  };
  
  
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Top Tracks</h1>
      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <TrackList tracks={tracks} onPlayClick={handlePlayClick} />
      )}
    </div>
  );
};

export default SpotifyCactroPage;
