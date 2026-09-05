import { Router } from 'express';
import multer from 'multer';

import CategoryController from './app/controller/CategoryController.js';
import ProductsController from './app/controller/ProductsController.js';
import SessionController from './app/controller/SessionController.js';
import UserController from './app/controller/UserController.js';
import OrderController from './app/controller/OrderController.js';

import multerConfig from './config/multer.cjs';

import authMiddleware from './app/middlewares/auth.js';
import adminMiddleware from './app/middlewares/admin.js';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/products', ProductsController.index);

routes.use(authMiddleware);
routes.post(
	'/products',
	adminMiddleware,
	upload.single('file'),
	ProductsController.store,
);
routes.put(
	'/products/:id',
	adminMiddleware,
	upload.single('file'),
	ProductsController.update,
);


routes.post(
	'/categories',
	adminMiddleware,
	upload.single('file'),
	CategoryController.store,
);
routes.put(
	'/categories/:id',
	adminMiddleware,
	upload.single('file'),
	CategoryController.update,
);
routes.get('/categories', CategoryController.index);

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', adminMiddleware, OrderController.update);
routes.get('/orders', OrderController.index);

export default routes;
