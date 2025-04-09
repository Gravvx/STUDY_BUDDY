// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // ✅ Changed this from Hero to Home
import ChatPage from './pages/ChatPage';
import ResourcesPage from './pages/ResourcesPage';
import NotesPage from './pages/NotesPage';
import SummariesPage from './pages/SummariesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Use Home instead of Hero */}
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/summaries" element={<SummariesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
