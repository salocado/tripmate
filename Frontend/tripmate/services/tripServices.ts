// Author: Salome Schmied

import axios from 'axios';
import { Trip, NewTrip } from '@/types/tripTypes';

export const fetchTrips = async (): Promise<Trip[]> => {
    const response = await axios.get('http://localhost:8085/api/trip');
    return response.data;
};

export const fetchTrip = async (tripID: number): Promise<Trip> => {
    const trips = await fetchTrips();
    const foundTrip = trips.find((trip) => trip.tripID === tripID);
    if (!foundTrip) {
        throw new Error('Trip not found.');
    }
    return foundTrip;
};

export const postTrip = async ( { country, startDate, endDate }: NewTrip ): Promise<void> => {
    await axios.post('http://localhost:8085/api/trip', { country, startDate, endDate });
}

export const deleteTrip = async (tripID: number): Promise<void> => {
    await axios.delete(`http://localhost:8085/api/trip/${tripID}`);
}

export const updateTrip = async (tripID: number, updatedTrip: { country: string; startDate: string; endDate: string }): Promise<void> => {
    await axios.put(`http://localhost:8085/api/trip/${tripID}`, updatedTrip);
};
