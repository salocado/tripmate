// Author: Salome Schmied

import { useState } from 'react';
import styles from './PlanningSection.module.css';
import DateInput from '@/components/DateInput/DateInput';
import TextInput from '@/components/TextInput/TextInput';
import Button from '@/components/Button/Button';

type PlanningSectionProps = {
    country: string;
    setCountry: (value: string) => void;
    startDate: string;
    setStartDate: (value: string) => void;
    endDate: string;
    setEndDate: (value: string) => void;
    handleSubmit: (event: React.FormEvent) => void;
    buttonLabel: string;
};

const PlanningSection = ({
    country, setCountry,
    startDate, setStartDate,
    endDate, setEndDate,
    handleSubmit,
    buttonLabel
}: PlanningSectionProps) => {
    const [errors, setErrors] = useState<{ country?: string; startDate?: string; endDate?: string }>({});

    const validateForm = () => {
        const errors: { country?: string; startDate?: string; endDate?: string } = {};

        if (!country) {
            errors.country = 'Country cannot be empty.';
        } else if (!/^[a-zA-Z]+$/.test(country)) {
            errors.country = 'Countries can only contain letters.';
        }
        if (!startDate) {
            errors.startDate = 'Start date cannot be empty.';
        } else if (new Date(startDate) < new Date()) {
            errors.startDate = 'Start date cannot be in the past.';
        }
        if (!endDate) {
            errors.endDate = 'End date cannot be empty.';
        } else if (new Date(endDate) <= new Date(startDate)) {
            errors.endDate = 'End date must be after the start date.';
        }

        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            return true;
        }
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            handleSubmit(event);
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.background}></div>
            <form onSubmit={onSubmit} className={styles.form}>
                <div>
                    <h3>Which country do you want to visit?</h3>
                    <TextInput
                        type="text"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                    />
                    <p className={styles.error}>{errors.country}</p>
                </div>
                <div>
                    <h3>When does your trip start?</h3>
                    <DateInput
                        id="startDate"
                        value={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                    />
                    <p className={styles.error}>{errors.startDate}</p>
                </div>
                <div>
                    <h3>When does your trip end?</h3>
                    <DateInput
                        id="endDate"
                        value={endDate}
                        onChange={(event) => setEndDate(event.target.value)}
                    />
                    <p className={styles.error}>{errors.endDate}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <Button type="submit">{buttonLabel}</Button>
                </div>
            </form>
        </section>
    );
};

export default PlanningSection;
