import { Router } from 'express';
import multer from 'multer';
import authMiddleware from '../middlewares/auth.js';
import CategoryController from './app/controller/CategoryController.js';
import ProductsController from './app/controller/ProductsController.js';
import SessionController from './app/controller/SessionController.js';
import UserController from './app/controller/UserController.js';
import multerConfig from './config/multer.cjs';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/products', upload.single('file'), ProductsController.store);
routes.get('/products', ProductsController.index);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);

export default routes;
