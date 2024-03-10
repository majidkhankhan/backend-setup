import express from 'express';
import adminAuth from './adminAuth.routes.js'
const routes = express();
routes.use('/adminAuth',adminAuth);

export default routes