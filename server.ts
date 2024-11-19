// Author: Salome Schmied

import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

app.use(express.static('public'));
app.use(express.json());
