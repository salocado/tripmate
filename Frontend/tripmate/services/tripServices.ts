// Author: Salome Schmied

import axios from 'axios';
import { Trip, NewTrip } from '@/types/tripTypes';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchTrips = async (): Promise<Trip[]> => {
    const response = await axios.get(`${backendUrl}/api/trip`);
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
    await axios.post(`${backendUrl}/api/trip`, { country, startDate, endDate });
}

export const deleteTrip = async (tripID: number): Promise<void> => {
    await axios.delete(`${backendUrl}/api/trip/${tripID}`);
}

export const updateTrip = async (tripID: number, updatedTrip: { country: string; startDate: string; endDate: string }): Promise<void> => {
    await axios.put(`${backendUrl}/api/trip/${tripID}`, updatedTrip);
};
