class SocketServices {
  connection(socket) {
    socket.on("disconnect", () => {
      console.log(`User disconnect id is ${socket.id}`);
    });
    socket.on("sendmsg", (data) => {
      console.log(data);
    });
    socket.on("new-issue", (issue) => {
      socket.broadcast.emit("notify-new-issue", issue);
    });
  }
}

export default new SocketServices();
