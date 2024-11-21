// Author: Salome Schmied

import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import tripsRouter from './src/routes/trips';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use('/api/trips', tripsRouter);
