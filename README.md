# 🧠 Cognitive Twin – Personal AI Assistant

![Status](https://img.shields.io/badge/status-work%20in%20progress-orange)
![Frontend](https://img.shields.io/badge/frontend-HTML%20%7C%20CSS%20%7C%20JS-blue)
![Backend](https://img.shields.io/badge/backend-PHP%20%7C%20Java-purple)

> 🚧 **This project is currently under active development.** Features, structure, and documentation will change as it progresses.

Cognitive Twin is a personal AI assistant that aims to answer questions using your **own notes and documents**. It is being built around Retrieval-Augmented Generation (RAG): documents are ingested and indexed, the most relevant passages are retrieved for each question, and the answer is grounded in them.

## 🎨 Design

UI/UX design and prototype: [View on Figma](https://www.figma.com/make/BxqwVta3xklRYov8eAkD8n/Cognitive-Twin-AI-Assistant?t=yE0aXbtAYkYYeEG6-1)

<!-- Add screenshots after exporting frames from Figma:
![Home](design/home.png)
![Chat](design/chat.png)
-->

## 🎯 Project Goals

- Let users upload personal notes and documents
- Retrieve the most relevant content for a question using similarity search
- Provide answers grounded in the user's own data
- Offer a simple, clean chat-style interface

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| API routing & document ingestion | PHP |
| Text processing & similarity search | Java |
| Database | MySQL / SQLite |
| Design | Figma |

## 🏗️ Planned Architecture

1. **Ingest:** Documents are uploaded through the PHP backend.
2. **Process:** The Java module cleans and splits text into chunks.
3. **Store:** Chunks and metadata are saved in the database.
4. **Retrieve:** For each question, the most similar chunks are found.
5. **Answer:** Retrieved context is used to generate the response shown in the UI.

## 📍 Current Status & Roadmap

- [x] Project idea and scope defined
- [x] UI/UX design created in Figma
- [ ] Frontend chat interface
- [ ] Document upload and ingestion (PHP)
- [ ] Text chunking and processing (Java)
- [ ] Database schema and storage
- [ ] Similarity search for retrieval
- [ ] Connect retrieval to answer generation
- [ ] Testing and bug fixes
- [ ] Deployment

> Tick off items as you complete them. Edit this list to match your real progress.

## 📁 Project Structure (Planned)

```
cognitive-twin/
├── frontend/      # HTML, CSS, JS
├── api/           # PHP endpoints
├── java/          # Text processing & similarity search
├── database/      # SQL schema
├── design/        # Figma exports / screenshots
└── README.md
```

## 🚀 Getting Started

Setup instructions will be added once the first working version is ready.

```bash
# Clone the repository
git clone https://github.com/<your-username>/cognitive-twin.git
cd cognitive-twin
```

## 🔮 Future Ideas

- Support for more file types (PDF, DOCX)
- Better embeddings for more accurate retrieval
- User authentication
- Conversation history

## 👩‍💻 Author

**Kajal**
Aspiring Software Developer | Web Development Intern | Surat, Gujarat, India

I enjoy building web applications and learning how to combine front-end design with practical back-end logic. Cognitive Twin is being built as part of my college internship project.

**Skills:** HTML, CSS, JavaScript, React, Node.js, Python, Java, PHP, MySQL, Git/GitHub

**Connect with me:**
- GitHub: [@kajalbaraiya](https://github.com/kajalbaraiya)
- LinkedIn: [kajal-baraiya-761862419](https://www.linkedin.com/in/kajal-baraiya-761862419)
- Email: kajalbaraiya20252007@gmail.com

## 📄 License

This project is for educational purposes as part of a college internship.

---

⭐ If you find this project interesting, feel free to star the repo and check back for updates!
