// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/player">Audio Player</Link></li>
        <li><Link to="/player">Audio Player1</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
