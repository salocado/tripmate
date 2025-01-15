// Author: Salome Schmied

import { Router } from 'express';
import { getTrips, createTrip, updateTrip, deleteTrip } from '../controllers/tripControllers';

const router: Router = Router();

router.get('/', getTrips)
    .post('/', createTrip)
    .put('/:id', updateTrip)
    .delete('/:id', deleteTrip);

export default router;
