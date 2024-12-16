// Author: Salome Schmied

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchTrip, deleteTrip } from '@/services/tripServices';
import { Trip } from '@/types/tripTypes';
import styles from '@/components/TripDetailCard/TripDetailCard.module.css';
import TripDetailCard from '@/components/TripDetailCard/TripDetailCard';
import NavigationBar from '@/components/NavigationBar/NavigationBar';

const TripDetails = () => {
    const { tripID } = useParams();
    const [trip, setTrip] = useState<Trip | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTrip(Number(tripID))
            .then(response => {
                setTrip(response);
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Failed to load trip.');
            });
    }, [tripID]);

    if (!trip) {
        return <p>Loading...</p>;
    }

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this trip?')) {
            try {
                await deleteTrip(Number(tripID));
                alert('Trip successfully deleted.');
                window.location.href = '/trips';
            } catch (error) {
                console.error('Error deleting trip:', error);
                alert('Failed to delete trip.');
            }
        }
    };

    return (
        <div>
            <NavigationBar />
            <div className={styles.container}>
                <TripDetailCard
                    key={trip.tripID}
                    tripID={trip.tripID}
                    country={trip.country}
                    startDate={trip.startDate}
                    endDate={trip.endDate}
                    onDelete={handleDelete} // Löschen-Funktion weitergeben
                />
            </div>
        </div>
    );
};

export default TripDetails;
