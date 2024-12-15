// Author: Salome Schmied

'use client';

import { useState } from 'react';
import { postTrip } from '@/services/tripServices';
import PlanningSection from '@/components/PlanningSection/PlanningSection';
import NavigationBar from '@/components/NavigationBar/NavigationBar';

const AddTrip = () => {
    const [country, setCountry] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await postTrip({ country, startDate, endDate });
            alert('Trip added successfully.');
            setCountry('');
            setStartDate('');
            setEndDate('');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add trip.');
        }
    };

    return (
        <div>
            <NavigationBar />
            <PlanningSection
                country={country} setCountry={setCountry}
                startDate={startDate} setStartDate={setStartDate}
                endDate={endDate} setEndDate={setEndDate}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default AddTrip;
