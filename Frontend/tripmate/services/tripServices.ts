// Author: Salome Schmied

import axios from 'axios';
import { Trip, NewTrip } from '@/types/tripTypes';
import { getToken } from './authServices';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const ensureAuthenticated = (): string => {
    const token = getToken();
    if (!token) {
        throw new Error('Authentication required.');
    }
    return token;
};

export const fetchTrips = async (): Promise<Trip[]> => {
    const token = ensureAuthenticated();

    try {
        const response = await axios.get(`${backendUrl}/api/trip`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch trips:', error);
        throw new Error('Could not load trips.');
    }
};

export const fetchTrip = async (_id: string): Promise<Trip> => {
    const token = ensureAuthenticated();
    
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
    const token = ensureAuthenticated();

    try {
        await axios.post(
            `${backendUrl}/api/trip`,
            { country, startDate, endDate },
            { headers: { Authorization: `Bearer ${token}` } }
        );
    } catch (error) {
        console.error('Failed to create trip:', error);
        throw new Error('Could not create trip.');
    }
};

export const deleteTrip = async (_id: string): Promise<void> => {
    const token = ensureAuthenticated();

    try {
        await axios.delete(`${backendUrl}/api/trip/${_id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error('Failed to delete trip:', error);
        throw new Error('Could not delete trip.');
    }
};

export const updateTrip = async (
    _id: string,
    updatedTrip: { country: string; startDate: string; endDate: string }
): Promise<void> => {
    const token = ensureAuthenticated();

    try {
        await axios.put(`${backendUrl}/api/trip/${_id}`, updatedTrip, {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error('Failed to update trip:', error);
        throw new Error('Could not update trip.');
    }
};
