// Author: Salome Schmied

import Trip from '../models/tripModel';
import { Request, Response } from 'express';

async function getTrips(req: Request, res: Response): Promise<void> {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function createTrip(req: Request, res: Response): Promise<void> {
    try {
        const trip = new Trip(req.body);
        const result = await trip.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

async function updateTrip(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const trip = req.body;
        const result = await Trip.findByIdAndUpdate(id, trip, { new: true });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

async function deleteTrip(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const result = await Trip.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export { getTrips, createTrip, updateTrip, deleteTrip };
