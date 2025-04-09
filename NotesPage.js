import React, { useState } from 'react';
import './NotesPage.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const NotesPage = () => {
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setNotes('');

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmismEyj3E72-u9O0smW5_h7EXNSgS_ig`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Make clear and well-structured revision notes for: ${topic}` }] }],
          }),
        }
      );

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No notes found.';
      setNotes(reply);
    } catch (error) {
      setNotes('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="notes-page">
      <h2>📝 Smart Notes Generator</h2>
      <input
        type="text"
        placeholder="Enter a topic (e.g., Trigonometry)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={handleAskAI} disabled={loading}>
        {loading ? 'Generating Notes...' : 'Get Notes'}
      </button>

      <div className="notes-output">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {notes}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default NotesPage;
