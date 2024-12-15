// Author: Salome Schmied

import axios from 'axios';
import { Trip, NewTrip } from '@/types/tripTypes';

export const fetchTrips = async (): Promise<Trip[]> => {
    const response = await axios.get('http://localhost:8085/api/trip');
    return response.data;
};

export const postTrip = async ( { country, startDate, endDate }: NewTrip ): Promise<void> => {
    await axios.post('http://localhost:8085/api/trip', { country, startDate, endDate });
}
