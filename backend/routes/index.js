import express from "express";
import { Register } from "../controllers/Users.js";

const router = express.Router();
router.get('/',(req, res) => {
	res.json({message: "Hello world"});
});
router.post('/register', Register);

export default router;
