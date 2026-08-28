import express from 'express';
import routers from './routes.js';

const app = express();
app.use(routers);
app.use(express.json());

export default app;
