// Author: Salome Schmied

import { Router } from 'express';
import { getTrips, createTrip, updateTrip, deleteTrip } from '../controllers/tripControllers';

const tripRouter: Router = Router();

tripRouter.get('/', getTrips)
    .post('/', createTrip)
    .put('/:id', updateTrip)
    .delete('/:id', deleteTrip);

export default tripRouter;
