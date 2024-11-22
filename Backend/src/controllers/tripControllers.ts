// Author: Salome Schmied

import { Request, Response } from 'express';
import { Trip } from '../models/Trip';
import * as tripService from '../services/tripServices';

export const getTrips = (req: Request, res: Response): void => {
    const trips: Trip[] = tripService.getTrips();
    res.json(trips);
}

export const createTrip = (req: Request, res: Response): void => {
    const country: string = req.body.country;
    const startDate: string = req.body.startDate;
    const endDate: string = req.body.endDate;

    const createdTrip = tripService.createTrip(country, startDate, endDate);
    if (!createdTrip) {
        res.status(400).send('Invalid input.');
    } else {
        res.status(201).send('Trip added successfully.');
    }
}

export const updateTrip = (req: Request, res: Response): void => {
    const id: number = parseInt(req.params.id);
    const country: string = req.body.country;
    const startDate: string = req.body.startDate;
    const endDate: string = req.body.endDate;

    const updatedTrip = tripService.updateTrip(id, country, startDate, endDate);
    if (!updatedTrip) {
        res.status(404).send('Trip not found.');
    } else {
        res.status(200).send(`Updated trip with ID ${id}`);
    }
}

export const deleteTrip = (req: Request, res: Response): void => {
    const id: number = parseInt(req.params.id);

    const deletedTrip = tripService.deleteTrip(id);
    if (!deletedTrip) {
        res.status(404).send('Trip not found.');
    } else {
        res.status(200).send(`Deleted trip with ID ${id}`);
    }
}
