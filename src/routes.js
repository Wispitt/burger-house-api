import { Router } from 'express';
import { v4 } from 'uuid';
import User from './app/models/User.js';

const routers = new Router();

routers.get('/', async (req, res) => {
	const user = {
		id: v4(),
		name: 'Wesley',
		email: 'wesley@email.com',
		password_hash: '160327',
	};
	await User.create(user);

	res.status(201).json(user);
});

export default routers;
