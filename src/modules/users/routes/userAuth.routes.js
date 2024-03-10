import express from 'express'
import upload from '../../../middleware/uploadFile.middleware.js'
import { signUp } from '../controllers/user.controller.js';
const router = express.Router();

router.post('/signUp',upload.single('photo'),signUp);

export default router;