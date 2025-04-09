// src/pages/ResourcesPage.js

import React, { useState } from 'react';
import './ResourcesPage.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ResourcesPage = () => {
  const [topic, setTopic] = useState('');
  const [resources, setResources] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResources('');

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmismEyj3E72-u9O0smW5_h7EXNSgS_ig`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Give me detailed study resources with bold headings and bullet points for: ${topic}` }] }],
          }),
        }
      );

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No resources found.';
      setResources(reply);
    } catch (error) {
      setResources('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resources-page">
      <h2>📚 Get Study Resources</h2>
      <input
        type="text"
        placeholder="Enter a topic (e.g., Thermodynamics)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={handleAskAI} disabled={loading}>
        {loading ? 'Fetching...' : 'Ask AI for Resources'}
      </button>

      <div className="resources-result">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {resources}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ResourcesPage;
