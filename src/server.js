import app from './app.js';
import './database/index.js';

app.listen(3001);

// docker run --name burger-house-api -e POSTGRES_PASSWORD=admin -e POSTGRES_POSSWORD=123456 -e POSTGRES_DB=burger-house-db -p 5432:5432 postgres
