'use client';

import { useEffect, useState } from 'react';

export default function DeviceSelector() {
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');

  useEffect(() => {
    async function fetchDevices() {
      try {
        const res = await fetch('/api/spotify/devices');
        const data = await res.json();
        setDevices(data.devices || []);
      } catch (error) {
        console.error('Failed to fetch devices:', error);
      }
    }
    fetchDevices();
  }, []);

  const transferPlayback = async () => {
    if (!selectedDeviceId) return;
    try {
      const res = await fetch('/api/spotify/transfer-playback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ device_id: selectedDeviceId })
      });
      const result = await res.json();
      if (res.ok) {
        alert('Playback transferred successfully.');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error transferring playback:', error);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md my-8">
      <h2 className="text-lg font-semibold mb-2">Select Spotify Device</h2>
      <select
        value={selectedDeviceId}
        onChange={(e) => setSelectedDeviceId(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="">-- Select Device --</option>
        {devices.map((device) => (
          <option key={device.id} value={device.id}>
            {device.name} ({device.type})
          </option>
        ))}
      </select>
      <button
        onClick={transferPlayback}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Transfer Playback
      </button>
    </div>
  );
}
