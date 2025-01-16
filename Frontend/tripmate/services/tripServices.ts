// Author: Salome Schmied

import axios from 'axios';
import { Trip, NewTrip } from '@/types/tripTypes';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchTrips = async (): Promise<Trip[]> => {
    try {
        const response = await axios.get(`${backendUrl}/api/trip`);
        return response.data;
    } catch (error) {
        console.error('Faild to fetch trips:', error);
        throw new Error('Could not load trips.');
    }
};

export const fetchTrip = async (_id: string): Promise<Trip> => {
    try {
        const trips = await fetchTrips();
        const foundTrip = trips.find((trip) => trip._id === _id);
        if (!foundTrip) {
            throw new Error(`Trip ${_id} not found.`);
        }
        return foundTrip;
    } catch (error) {
        console.error(`Failed to fetch trip:`, error);
        throw error;
    }
};

export const postTrip = async ({ country, startDate, endDate }: NewTrip): Promise<void> => {
    try {
        await axios.post(`${backendUrl}/api/trip`, { country, startDate, endDate });
    } catch (error) {
        console.error('Failed to create trip:', error);
        throw new Error('Could not create trip.');
    }
};


export const deleteTrip = async (_id: string): Promise<void> => {
    try {
        await axios.delete(`${backendUrl}/api/trip/${_id}`);
    } catch (error) {
        console.error('Failed to delete trip:', error);
        throw new Error('Could not delete trip.');
    }
};

export const updateTrip = async (_id: string, updatedTrip: { country: string; startDate: string; endDate: string }): Promise<void> => {
    try {
        await axios.put(`${backendUrl}/api/trip/${_id}`, updatedTrip);
    } catch (error) {
        console.error('Failed to update trip:', error);
        throw new Error('Could not update trip.');
    }
};
