// src/components/AudioPlayer.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import audio from '../files/audio.mp3';  // Adjust the path if necessary

function AudioPlayer() {
  const [playbackRate, setPlaybackRate] = useState(1); // Default speed is 1x

  const handleSpeedChange = (event) => {
    setPlaybackRate(parseFloat(event.target.value));
  };

  return (
    <div className="audio-player">
      <ReactPlayer 
        url={audio} 
        width="100%" 
        height="50px" 
        controls={true}
        playbackRate={playbackRate}
        playing={true}  // Optional: Start playing immediately
      />
      <div className="speed-controls">
        <label htmlFor="speed">Playback Speed: </label>
        <select id="speed" value={playbackRate} onChange={handleSpeedChange}>
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1">1x (Normal)</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="1.75">1.75x</option>
          <option value="2">2x</option>
        </select>
      </div>
    </div>
  );
}

export default AudioPlayer;
