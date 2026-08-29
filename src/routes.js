import { Router } from 'express';
import UserController from './app/controller/UserController.js';

const routers = new Router();

routers.post('/users', UserController.store);

export default routers;
