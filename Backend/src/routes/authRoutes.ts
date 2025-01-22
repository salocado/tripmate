// Author: Salome Schmied

import { Router } from 'express';
import { signUp, signIn } from '../controllers/authControllers';

const authRouter: Router = Router();

authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);

export default authRouter;
