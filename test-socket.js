const { io } = require("socket.io-client");

//user 1 token here
const token =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTQ1ODEwODYzNWZjMGZlYWUxYjkwMjkiLCJpYXQiOjE3NjYxNzMzMTYsImV4cCI6MTc2Njc3ODExNn0.D6OTXUOemRERK2Tsa6YqERXxzUgpviDgX0tgeoIsuUM";

const USER_TWO_ID = "6945a61af83730d567787476";

console.log("User One connecting...");

const socket = io("http://localhost:5000", {
  auth: { token },
  transports: ["websocket"]
});

socket.on("connect", () => {
  console.log("User One connected");
  console.log("Socket ID:", socket.id);

  setTimeout(() => {
    console.log("Sending message...");
    socket.emit("message:send", {
      to: USER_TWO_ID,
      content: "Hello User Two"
    });
  }, 1000);
});

socket.on("message:sent", (msg) => {
  console.log("Message SENT:", msg.content);
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err.message);
});


setInterval(() => {}, 1000);
