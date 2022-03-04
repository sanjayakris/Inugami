import express from "express";
import { client } from "../app.js"
import { getClientData } from "../controllers/Client.js";
const router = express.Router();

router.get('/', getClientData);

export default router;