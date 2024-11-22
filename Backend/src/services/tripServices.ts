// Author: Salome Schmied

import { Trip } from '../models/Trip';

const trips: Trip[] = [];

export const getTrips = (): Trip[] => {
    return trips;
}

export const createTrip = (country: string, startDate: string, endDate: string): boolean => {
    if (!country || !startDate || !endDate) {
        return false;
    }

    const trip: Trip = new Trip(country, startDate, endDate);
    trips.push(trip);
    return true;
}

export const updateTrip = (id: number, country?: string, startDate?: string, endDate?: string): boolean => {
    const trip: Trip | undefined = trips.find(trip => trip.getTripID() === id);
    if (!trip) {
        return false;
    }

    if (country) trip.setCountry(country);
    if (startDate) trip.setStartDate(startDate);
    if (endDate) trip.setEndDate(endDate);
    return true;
}

export const deleteTrip = (id: number): boolean => {
    const tripIndex: number = trips.findIndex(trip => trip.getTripID() === id);

    if (tripIndex === -1) return false;

    trips.splice(tripIndex, 1);
    return true;
}
