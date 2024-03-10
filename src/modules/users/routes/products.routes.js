import express from 'express'
import upload from '../../../middleware/uploadFile.middleware.js';
import { addProducts } from '../controllers/product.controller.js';
const router = express.Router();

router.post('/add-products',upload.single('photo'),addProducts)

export default router;