// Author: Salome Schmied

import express, {Express, Request, Response} from 'express';
import { Trip } from '../models/Trip';

const trips: Trip[] = [];

const router = express.Router();

// CRUD routes

router.get('/', (req: Request, res: Response) => {
    // get all trips
    res.json(trips);
});

router.post('/', (req: Request, res: Response) => {
    // create a new trip
    const country = req.body.country;

    const trip = new Trip(country);
    trips.push(trip);

    res.status(201).send('Trip added successfully.');
});

router.put('/:id', (req: Request, res: Response) => {
    // update a trip
    const id = parseInt(req.params.id);
    const trip = trips.find(trip => trip.getTripID() === id);

    if (!trip) {
        res.status(404).send('Trip not found');
    } else {
        const { country } = req.body;
        trip.setCountry(country);
        res.send(`Updated trip with ID ${id}`);
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    // delete a trip
    const id = parseInt(req.params.id);
    const tripIndex = trips.findIndex(trip => trip.getTripID() === id);

    if (!tripIndex) {
        res.status(404).send('Trip not found');
    } else {
        trips.splice(tripIndex, 1);
        res.send(`Deleted trip with ID ${id}`);
    }
});

export default router;
