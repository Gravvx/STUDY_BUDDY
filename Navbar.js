// src/components/Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">📘 Study Buddy</h2>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
        <li className={location.pathname === '/chat' ? 'active' : ''}><Link to="/chat">AI Chat</Link></li>
        <li className={location.pathname === '/resources' ? 'active' : ''}><Link to="/resources">Resources</Link></li>
        <li className={location.pathname === '/notes' ? 'active' : ''}><Link to="/notes">Notes</Link></li>
        <li className={location.pathname === '/summaries' ? 'active' : ''}><Link to="/summaries">Summaries</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
