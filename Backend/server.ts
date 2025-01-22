// Author: Salome Schmied

import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import tripRouter from './src/routes/tripRoutes';
import authRouter from './src/routes/authRoutes';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

mongoose.connect(process.env.MONGO_URI || '').then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log(error);
});

app.listen(port, (): void => {
    console.log(`Server started at http://localhost:${port}`);
});

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/trip', tripRouter);
app.use('/api/auth', authRouter);
