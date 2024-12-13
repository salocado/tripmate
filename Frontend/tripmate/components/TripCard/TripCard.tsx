// Author: Salome Schmied

import styles from './TripCard.module.css';

interface TripCardProps {
    tripID: number;
    country: string;
    startDate: string;
    endDate: string;
}

const TripCard = ({ tripID, country, startDate, endDate }: TripCardProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return(
        <div className={styles.card}>
            <p className={styles.tripId}>Trip ID: {tripID}</p>
            <h3>Trip to {country}</h3>
            <p>{formatDate(startDate)} - {formatDate(endDate)}</p>
        </div>
    );
};

export default TripCard;
