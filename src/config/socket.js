const socketAuth = require("../middleware/socketAuth");
const chatSocket = require("../sockets/chat.socket");

const setupSocket = (io) => {
  
  io.use(socketAuth);

  io.on("connection", (socket) => {
    console.log(`Authenticated socket connected: ${socket.user._id}`);

    chatSocket(io, socket);

    socket.on("disconnect", () => {
      console.log(`❌ User disconnected: ${socket.user._id}`);
    });
  });
};

module.exports = setupSocket;
