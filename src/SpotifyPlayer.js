// src/SpotifyPlayer.js

import React from 'react';

const SpotifyPlayer = () => {
  const playlistUrl = "https://open.spotify.com/embed/artist/1eDIWVJt7ZWKsrXw5WVNsN?utm_source=generator"; 
  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '10',
    width: '300px',
    height: '80px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    overflow: 'hidden'
  };

  return (
    <div style={containerStyle}>
      <iframe
        title="Spotify Player"
        src={playlistUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;