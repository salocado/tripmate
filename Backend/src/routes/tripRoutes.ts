// Author: Salome Schmied

import express, { Request, Response, Router } from 'express';
import { Trip } from '../models/Trip';
import * as tripController from '../controllers/tripControllers';

const router: Router = express.Router();

// CRUD routes

router.get('/', (req: Request, res: Response): void => {
    // get all trips
    tripController.getTrips(req, res);
});

router.post('/', (req: Request, res: Response): void => {
    // create a new trip
    tripController.createTrip(req, res);
});

router.put('/:id', (req: Request, res: Response): void => {
    // update a trip
    tripController.updateTrip(req, res);
});

router.delete('/:id', (req: Request, res: Response): void => {
    // delete a trip
    tripController.deleteTrip(req, res);
});

export default router;
