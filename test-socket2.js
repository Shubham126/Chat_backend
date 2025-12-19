const { io } = require("socket.io-client");

// User Two Token here
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTQ1YTYxYWY4MzczMGQ1Njc3ODc0NzYiLCJpYXQiOjE3NjYxNzMyNjYsImV4cCI6MTc2Njc3ODA2Nn0._tergUcZxuLmGCNOMPoQtZYPbmUcXu5Ck_sj_ie9zdo";

console.log("User Two connecting...");

const socket = io("http://localhost:5000", {
  auth: { token },
  transports: ["websocket"]
});

socket.on("connect", () => {
  console.log("User Two connected");
  console.log("Socket ID:", socket.id);
});

socket.on("message:receive", (msg) => {
  console.log(" Message received:");
  console.log("   ➜", msg.content);
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err.message);
});

socket.on("disconnect", () => {
  console.log("User Two disconnected");
});
