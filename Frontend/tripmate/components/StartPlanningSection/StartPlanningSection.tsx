// Author: Salome Schmied

import styles from './StartPlanningSection.module.css';
import DestinationDropdown from '@/components/DestinationDropdown/DestinationDropdown';
import Button from '@/components/Button/Button';

const StartPlanningSection = () => (
    <section className={styles.container}>
        <h1>Start planning your trip</h1>
        <p>Select your destination and start planning your trip today.</p>
        <ul>
            <li>Personalized trip itineraries for every traveler</li>
            <li>Expert guidance and local insights</li>
            <li>Seamless planning from start to finish</li>
        </ul>
        <DestinationDropdown />
        <Button>Start Planning</Button>
    </section>
);

export default StartPlanningSection;
