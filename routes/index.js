import express from "express";
import socketRoute from "./socket.route.js";
const router = express.Router();

router.use("/socket", socketRoute);

export default router;
