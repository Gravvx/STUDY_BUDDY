import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatPage from './pages/ChatPage';
import ResourcesPage from './pages/ResourcesPage';
import NotesPage from './pages/NotesPage';
import SummariesPage from './pages/SummariesPage'; // ✅ New

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/summaries" element={<SummariesPage />} /> {/* ✅ New */}
      </Routes>
    </Router>
  );
}

export default App;
