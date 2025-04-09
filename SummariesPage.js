import React, { useState } from 'react';
import './SummariesPage.css';

const SummariesPage = () => {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [wordLimit, setWordLimit] = useState(100);

  const getSummary = async () => {
    if (!input.trim()) return;

    const inputWordCount = input.trim().split(/\s+/).length;
    if (inputWordCount < wordLimit) {
      setSummary(
        `⚠️ Your input contains only ${inputWordCount} words, which is less than the requested summary length of ${wordLimit} words. Please enter more content.`
      );
      return;
    }

    setLoading(true);
    setSummary('');

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmismEyj3E72-u9O0smW5_h7EXNSgS_ig`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Summarize the following text in a single paragraph of around ${wordLimit} words. Do not use bullet points or headings:\n\n${input}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No summary found.';
      setSummary(reply);
    } catch (error) {
      setSummary('Error fetching summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summary-page">
      <h2>📘 Smart Summary Generator</h2>
      <textarea
        rows="6"
        placeholder="Paste your text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div className="controls">
        <label>
          📏 Word Limit:
          <select
            value={wordLimit}
            onChange={(e) => setWordLimit(Number(e.target.value))}
          >
            <option value={50}>50 words</option>
            <option value={75}>75 words</option>
            <option value={100}>100 words</option>
            <option value={150}>150 words</option>
          </select>
        </label>

        <button onClick={getSummary} disabled={loading}>
          {loading ? 'Summarizing...' : 'Get Summary'}
        </button>
      </div>

      <div className="summary-output">
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default SummariesPage;
