import { Router } from 'express';
import multer from 'multer';
import ProductsController from './app/controller/ProductsController.js';
import SessionController from './app/controller/SessionController.js';
import UserController from './app/controller/UserController.js';
import multerConfig from './config/multer.cjs';
import authMiddleware from '../middlewares/auth.js';

const routers = new Router();

const upload = multer(multerConfig);

routers.post('/users', UserController.store);
routers.post('/session', SessionController.store);

routers.use(authMiddleware)
routers.post('/products', upload.single('file'), ProductsController.store);
routers.get('/products', ProductsController.index);

export default routers;
