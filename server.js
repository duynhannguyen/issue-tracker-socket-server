import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appRouter from "./routes/index.js";
import { Server } from "socket.io";

import SocketServices from "./services/socketSevices.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors(["http://localhost:3001", "http://localhost:3000"]));
// app.use("/api/v1", appRouter);
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

global.io = io;

global.io.on("connection", SocketServices.connection);

export default app;
