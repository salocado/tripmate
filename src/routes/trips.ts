// Author: Salome Schmied

import express, {Express, Request, Response, Router} from 'express';
import { Trip } from '../models/Trip';

const trips: Trip[] = [];

const router: Router = express.Router();

// CRUD routes

router.get('/', (req: Request, res: Response): void => {
    // get all trips
    res.json(trips);
});

router.post('/', (req: Request, res: Response): void => {
    // create a new trip
    const country: string = req.body.country;

    const trip: Trip = new Trip(country);
    trips.push(trip);

    res.status(201).send('Trip added successfully.');
});

router.put('/:id', (req: Request, res: Response): void => {
    // update a trip
    const id: number = parseInt(req.params.id);
    const trip: Trip | undefined = trips.find(trip => trip.getTripID() === id);

    if (!trip) {
        res.status(404).send('Trip not found');
    } else {
        const country: string = req.body.country;
        trip.setCountry(country);
        res.send(`Updated trip with ID ${id}`);
    }
});

router.delete('/:id', (req: Request, res: Response): void => {
    // delete a trip
    const id: number = parseInt(req.params.id);
    const tripIndex: number = trips.findIndex(trip => trip.getTripID() === id);

    if (tripIndex === -1) {
        res.status(404).send('Trip not found');
    } else {
        trips.splice(tripIndex, 1);
        res.send(`Deleted trip with ID ${id}`);
    }
});

export default router;
