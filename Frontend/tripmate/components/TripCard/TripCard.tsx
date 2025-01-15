// Author: Salome Schmied

import styles from './TripCard.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';

type TripCardProps = {
    _id: string;
    country: string;
    startDate: string;
    endDate: string;
}

const TripCard = ({ _id, country, startDate, endDate }: TripCardProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.tripId}>Trip ID: {_id}</p>
                <h3>Trip to {country}</h3>
                <p>{formatDate(startDate)} - {formatDate(endDate)}</p>
                <Link href={`/trips/${_id}`}>
                    <Button>Show Trip</Button>
                </Link>
            </div>
        </div>
    );
};

export default TripCard;
