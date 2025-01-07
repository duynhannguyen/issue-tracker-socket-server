import express from "express";
import socketController from "../controllers/socket.controller.js";

const router = express.Router();

router.get("/noti", socketController.socketNoti);

export default router;
