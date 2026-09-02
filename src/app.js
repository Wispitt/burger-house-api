import express from 'express';
import routers from './routes.js';
import fileRoutesConfig from './config/fileRoutes.cjs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routers);
app.use('products-file', fileRoutesConfig);

export default app;
