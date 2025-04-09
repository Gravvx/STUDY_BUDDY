// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaRegStickyNote, FaMobileAlt, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FaRobot size={26} color="#1e3a8a" />,
      title: 'Smart AI Chat',
      description: 'Instantly clear your doubts with an AI-powered assistant.',
    },
    {
      icon: <FaRegStickyNote size={26} color="#1e3a8a" />,
      title: 'Instant Notes & Summaries',
      description: 'Generate summaries and revision notes with ease.',
    },
    {
      icon: <FaMobileAlt size={26} color="#1e3a8a" />,
      title: 'Clean & Responsive UI',
      description: 'Enjoy a seamless experience across devices.',
    },
  ];

  return (
    <div className="home-container">
      <motion.div
        className="glass-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="home-subtitle">🚀 The Hack Pack</h2>
        <h1 className="home-title"><FaBook /> Study Buddy</h1>
        <p className="home-description">
          Your AI-powered companion for smarter, stress-free studying.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="icon-circle">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/chat">
            <button className="start-button">💬 Start Chat with AI</button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
