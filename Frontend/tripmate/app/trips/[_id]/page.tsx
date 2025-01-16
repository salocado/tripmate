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
    const { _id } = useParams();
    const [trip, setTrip] = useState<Trip | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTrip = async () => {
            try {
                const response = await fetchTrip(String(_id));
                setTrip(response);
            } catch (error) {
                setError('Could not load trip.');
            } finally {
                setIsLoading(false);
            }
        };
        loadTrip();
    }, [_id]);

    if (isLoading) {
        return (
            <div>
                <NavigationBar />
                <div className={styles.container}>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if (error || !trip) {
        return (
            <div>
                <NavigationBar />
                <div className={styles.container}>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this trip?')) {
            try {
                await deleteTrip(String(_id));
                alert('Trip successfully deleted.');
                window.location.href = '/trips';
            } catch (error) {
                alert('Could not delete trip.');
            }
        }
    };

    const handleEdit = () => {
        const params = new URLSearchParams({
            _id: trip._id,
            country: trip.country,
            startDate: trip.startDate,
            endDate: trip.endDate,
        });
        window.location.href = `/add-trip?${params.toString()}`;
    };

    return (
        <div>
            <NavigationBar />
            <div className={styles.container}>
                <TripDetailCard
                    key={trip._id}
                    _id={trip._id}
                    country={trip.country}
                    startDate={trip.startDate}
                    endDate={trip.endDate}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            </div>
        </div>
    );
};

export default TripDetails;
