const socketNoti = async (req, res) => {
  // const io = Server(3000, {s
  //   cors: {
  //     origin: "http://localhost:3000",
  //   },
  // });
  // io.on("connection", (socket) => {
  //   console.log("socket", socket.id);
  //   socket.emit("sendmsg", "Hello, notification from server");
  // });
  global.io.emit("sendnoti", "Hello, notification from server");
  return res.status(200).json({ message: "Notification sent" });
};

const socketController = {
  socketNoti,
};

export default socketController;
