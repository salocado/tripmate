// Author: Salome Schmied

import axios from 'axios';
import Trip from '@/types/Trip';

export const fetchTrips = async (): Promise<Trip[]> => {
    const response = await axios.get('http://localhost:8085/api/trip');
    return response.data;
};
