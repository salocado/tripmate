// Author: Salome Schmied

import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import tripRouter from './src/routes/tripRoutes';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

app.listen(port, (): void => {
    console.log(`Server started at http://localhost:${port}`);
});

// middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// routes
app.use('/api/trip', tripRouter);
