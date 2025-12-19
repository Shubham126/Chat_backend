# Real-Time One-to-One Chat Backend (Socket.IO)

A real-time one-to-one chat backend built using **Node.js**, **Socket.IO**, and **MongoDB**.  
This project supports authenticated socket connections, real-time messaging, online/offline presence, and chat history retrieval.

---

## Features

- Socket authentication using JWT
- Real-time one-to-one messaging (Socket.IO)
- Online / Offline user presence
- Messages stored in MongoDB
- Fetch chat history via REST API
- Clean, modular backend architecture

---

## Tech Stack

- **Backend:** Node.js, Express
- **Real-time:** Socket.IO
- **Database:** MongoDB + Mongoose
- **Auth:** JWT
- **Dev Tools:** Nodemon

---

## Project Structure

realtime-chat-backend/
│
├── src/
│ ├── config/
│ │ ├── db.js
│ │ └── socket.js
│ │
│ ├── models/
│ │ ├── User.js
│ │ └── Message.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ └── chat.routes.js
│ │
│ ├── sockets/
│ │ └── chat.socket.js
│ │
│ ├── middleware/
│ │ └── socketAuth.js
│ │
│ ├── app.js
│ └── server.js
│
├── test-socket.js
├── test-socket2.js
├── .env
├── package.json
└── README.md

---

## Setup Instructions

### Clone the repository
```bash
git clone <https://github.com/Shubham126/Chat_backend.git>
cd realtime-chat-backend