// src/pages/ChatPage.js
import React, { useState } from 'react';
import './ChatPage.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmismEyj3E72-u9O0smW5_h7EXNSgS_ig',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await response.json();
      const aiReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No reply from AI.';
      setMessages([...newMessages, { text: aiReply, sender: 'ai' }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: 'Error connecting to AI.', sender: 'ai' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">AI Study Assistant</h1>

      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {msg.text}
            </ReactMarkdown>
          </div>
        ))}
        {isLoading && <div className="chat-message ai">Typing...</div>}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
