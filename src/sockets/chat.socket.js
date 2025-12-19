const User = require("../models/User");
const Message = require("../models/Message");

const onlineUsers = new Map();

const chatSocket = async (io, socket) => {
  const userId = socket.user._id.toString();

  onlineUsers.set(userId, socket.id);
  await User.findByIdAndUpdate(userId, { isOnline: true });

  console.log(`User online: ${userId}`);

  socket.on("message:send", async ({ to, content }) => {
    if (!to || !content) return;

    // Save message
    const message = await Message.create({
      sender: userId,
      receiver: to,
      content
    });

    const payload = {
      _id: message._id,
      sender: userId,
      receiver: to,
      content,
      createdAt: message.createdAt
    };

    const receiverSocketId = onlineUsers.get(to);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("message:receive", payload);
    }

    socket.emit("message:sent", payload);
  });


  socket.on("disconnect", async () => {
    onlineUsers.delete(userId);
    await User.findByIdAndUpdate(userId, { isOnline: false });

    console.log(`User offline: ${userId}`);
  });
};

module.exports = chatSocket;
