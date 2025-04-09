# 📘 STUDY BUDDY — AI-Powered Learning Assistant

An elegant, fully responsive AI Study Assistant built with React, Gemini AI, and modern UI design principles. Built during HackSprint 2025, this tool redefines the way students interact with learning content — from AI doubt-solving to instant summaries, all wrapped in a beautiful, calming interface.

---

## 🚀 Features

- 🤖 **AI Chat Assistant** — Instantly ask questions and get smart, markdown-supported answers.
- 📚 **Resources Generator** — Fetch curated study resources on any topic using AI.
- 📝 **Instant Notes** — Generate clean, exam-ready revision notes for any subject.
- 📘 **Summaries** — Summarize long content into 50, 75, 100, or 150-word formats.
- 🌐 **Fully Responsive UI** — Optimized for both desktop and mobile devices.
- 🎨 **Elegant Blue-Themed Design** — Premium, calming visual experience.
- ✨ **Glassmorphism & Animations** — Framer Motion transitions, tooltip support, and soft-glass effects.
- 📈 **Markdown Rendering** — Answers, notes, and resources rendered with lists, bold, italics, and more.

---

## 🛠️ Tech Stack

| Frontend      | Libraries Used                                                                 |
|---------------|---------------------------------------------------------------------------------|
| React.js      | `react`, `react-router-dom`, `react-icons`                                     |
| Design & UX   | `framer-motion`, `react-scroll`, `react-toastify`, `lucide-react`              |
| AI API        | Google Gemini API (`gemini-2.0-flash`)                                          |
| Markdown      | `react-markdown`, `remark-gfm`                                                  |
| Animation     | `lottie-react` (for future animations and user delight)                         |

---

## 📁 Folder Structure
📦 study-buddy/ ├── 📁 src/ │ ├── 📁 components/ → Navbar and shared UI components │ ├── 📁 pages/ → ChatPage, NotesPage, SummariesPage, ResourcesPage, Home │ ├── App.js → Routes and layout │ ├── App.css → Global styling │ └── index.js → React entry point └── README.md


##👥 Team - The Hack Pack
    1.Gaurav Pandey (Gravvx)
    2.Aanand Rao
    3.Prateek Dwivedi
    4.Mohan Nagare

## 🧠 How It Works

1. **Chat with AI**: Ask your academic doubts. The AI fetches contextual responses from Gemini.
2. **Notes Generator**: Enter a topic → Get structured revision notes.
3. **Summaries**: Paste any content → Select word count → Receive a compact summary.
4. **Resources**: Ask AI for guides, links, or key points on any concept.

---


##💡 Innovation & Vision
“Study Buddy” is designed to bridge the gap between curiosity and understanding using the power of AI. From classroom to coding, it's your reliable digital study partner — elegant, fast, and powerful.


## 🏗️ Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Gravvx/STUDY_BUDDY.git
cd STUDY_BUDDY

# Install all dependencies
npm install --legacy-peer-deps

# Run the app
npm start
