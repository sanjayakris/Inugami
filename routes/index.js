import express from "express";
import { client } from "../app.js"
import { getClientData, setClientActivity, postTest, setNickname } from "../controllers/Client.js";
const router = express.Router();

router.get('/log', getClientData);
router.post('/log', postTest)
router.post('/activity', setClientActivity);
router.post('/nickname', setNickname);

export default router;