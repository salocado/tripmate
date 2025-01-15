// Author: Salome Schmied

'use client';

import { useState, useEffect } from 'react';
import TripCard from '@/components/TripCard/TripCard';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { fetchTrips } from '@/services/tripServices';
import { Trip } from '@/types/tripTypes';

const Trips = () => {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTrips()
            .then(response => {setTrips(response);
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Failed to load trips.');
            });
    }, []);

    return (
        <div>
            <NavigationBar />
            <div style={{ margin: '100px 0 20px 0' }}>
                {trips.map((trip) => (
                    <TripCard
                        key={trip._id}
                        _id={trip._id}
                        country={trip.country}
                        startDate={trip.startDate}
                        endDate={trip.endDate}
                    />
                ))}
            </div>
        </div>
    );
};

export default Trips;
