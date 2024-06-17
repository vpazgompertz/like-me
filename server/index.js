import express from 'express';
import { logger } from 'logger-express';
import cors from 'cors';
import path from 'path';
import postRouter from './src/routes/postRoutes.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', postRouter);

app.listen(PORT, () => {
    console.log(`Servidor encendido en http://localhost:${PORT}`);
});



