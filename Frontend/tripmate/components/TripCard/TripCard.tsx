// Author: Salome Schmied

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
        <div>
            <p>ID: {tripID}</p>
            <p>Trip to {country}</p>
            <p>Start Date: {formatDate(startDate)}</p>
            <p>End Date: {formatDate(endDate)}</p>
        </div>
    );
};

export default TripCard;
