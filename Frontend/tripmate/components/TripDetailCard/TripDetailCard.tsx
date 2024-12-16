// Author: Salome Schmied

import styles from './TripDetailCard.module.css';
import Button from '@/components/Button/Button';

type TripDetailCardProps = {
    tripID: number;
    country: string;
    startDate: string;
    endDate: string;
    onDelete: () => void;
}

const TripDetailCard = ({ tripID, country, startDate, endDate, onDelete }: TripDetailCardProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div>
                    <p className={styles.tripId}>Trip ID: {tripID}</p>
                    <h3>Trip to {country}</h3>
                    <p>{formatDate(startDate)} - {formatDate(endDate)}</p>
                </div>
                <div className={styles.buttons}>
                    <Button>Edit Trip</Button>
                    <Button onClick={onDelete}>Delete Trip</Button>
                </div>
            </div>
        </div>
    );
};

export default TripDetailCard;
