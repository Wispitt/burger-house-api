import { Router } from 'express';
import SessionController from './app/controller/SessionController.js';
import UserController from './app/controller/UserController.js';

const routers = new Router();

routers.post('/users', UserController.store);
routers.post('/session', SessionController.store);

export default routers;
