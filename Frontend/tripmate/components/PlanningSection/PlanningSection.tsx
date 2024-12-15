// Author: Salome Schmied

import styles from './PlanningSection.module.css';
import DateInput from '@/components/DateInput/DateInput';
import TextInput from '@/components/TextInput/TextInput';
import Button from '@/components/Button/Button';
import Image from 'next/image';

type PlanningSectionProps = {
    country: string;
    setCountry: (value: string) => void;
    startDate: string;
    setStartDate: (value: string) => void;
    endDate: string;
    setEndDate: (value: string) => void;
    handleSubmit: (event: React.FormEvent) => void;
};

const PlanningSection = ({
    country, setCountry,
    startDate, setStartDate,
    endDate, setEndDate,
    handleSubmit
}: PlanningSectionProps) => {
    return (
        <section className={styles.container}>
            <div className={styles.background}>
                <Image
                    src="/images/planningSectionBG.jpg"
                    alt="Background"
                    fill
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <h3>Which country do you want to visit?</h3>
                        <TextInput
                            type="text"
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                        />
                    </div>
                    <div>
                        <h3>When does your trip start?</h3>
                        <DateInput
                            id="startDate"
                            value={startDate}
                            onChange={(event) => setStartDate(event.target.value)}
                        />
                    </div>
                    <div>
                        <h3>When does your trip end?</h3>
                        <DateInput
                            id="endDate"
                            value={endDate}
                            onChange={(event) => setEndDate(event.target.value)}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button type="submit">Add Trip</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PlanningSection;
