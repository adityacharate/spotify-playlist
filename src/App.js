// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AudioPlayer from './components/AudioPlayer';
import AudioPlayer1 from './components/AudioPlayer1';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<AudioPlayer />} />
          <Route path="/player" element={<AudioPlayer1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
