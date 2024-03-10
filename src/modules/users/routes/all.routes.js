import express from 'express';
import products from './products.routes.js'
import usersAuth from './userAuth.routes.js'
const routes = express();
routes.use('/products',products);
routes.use('/userAuth',usersAuth);

export default routes
