// Author: Salome Schmied

'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { postTrip, updateTrip } from '@/services/tripServices';
import PlanningSection from '@/components/PlanningSection/PlanningSection';
import NavigationBar from '@/components/NavigationBar/NavigationBar';

const AddTrip = () => {
    const searchParams = useSearchParams();
    const tripID = searchParams.get('tripID');

    const [country, setCountry] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (tripID) {
            setIsEditMode(true);
            const countryParam = searchParams.get('country');
            const startDateParam = searchParams.get('startDate');
            const endDateParam = searchParams.get('endDate');
    
            setCountry(countryParam || '');
            setStartDate(startDateParam ? new Date(startDateParam).toISOString().split('T')[0] : '');
            setEndDate(endDateParam ? new Date(endDateParam).toISOString().split('T')[0] : '');
        }
    }, [tripID, searchParams]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (isEditMode && tripID) {
                // edit trip
                await updateTrip(Number(tripID), { country, startDate, endDate });
                alert('Trip updated successfully.');
            } else {
                // add trip
                await postTrip({ country, startDate, endDate });
                alert('Trip added successfully.');
            }
            window.location.href = '/trips';
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save trip.');
        }
    };

    return (
        <div>
            <NavigationBar />
            <PlanningSection
                country={country}
                setCountry={setCountry}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                handleSubmit={handleSubmit}
                buttonLabel={isEditMode ? 'Save updated Trip' : 'Add Trip'}
            />
        </div>
    );
};

export default AddTrip;
