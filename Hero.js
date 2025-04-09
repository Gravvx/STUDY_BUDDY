import React from "react";
import "./Hero.css";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <h2 className="team-name">The Hack Pack 🚀</h2>

      <h1 className="main-title">
        <FaBook className="book-icon" /> Study Buddy
      </h1>

      <p className="subtitle">Your AI-powered companion for smarter studying</p>

      <ul className="features">
        <li>✅ Smart AI Chat</li>
        <li>✅ Instant Notes & Summaries</li>
        <li>✅ Team Collaboration</li>
        <li>✅ Clean & Responsive UI</li>
      </ul>

      <Link to="/chat">
        <button className="chat-btn">Start Chat with AI</button>
      </Link>
    </div>
  );
}

export default Hero;
