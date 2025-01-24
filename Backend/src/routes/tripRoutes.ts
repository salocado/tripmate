// Author: Salome Schmied

import { Router } from 'express';
import { getTrips, createTrip, updateTrip, deleteTrip } from '../controllers/tripControllers';
import { verifyToken } from '../controllers/authControllers';

const tripRouter: Router = Router();

tripRouter.get('/', verifyToken, getTrips)
    .post('/', verifyToken, createTrip)
    .put('/:id', verifyToken, updateTrip)
    .delete('/:id', verifyToken, deleteTrip);

export default tripRouter;
