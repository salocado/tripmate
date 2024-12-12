import styles from './conceptSection.module.css';
import ConceptStep from './ConceptStep';

export default function ConceptSection() {
    return (
        <section className={styles.container}>
            <h1>Our Concept</h1>
            <div className={styles.stepsContainer}>
                <ConceptStep
                    title="Step 1"
                    description="Select the country for your trip"
                />
                <ConceptStep
                    title="Step 2"
                    description="Choose the dates and trip duration"
                />
                <ConceptStep
                    title="Step 3"
                    description="Pick your favourite cities to visit"
                />
                <ConceptStep
                    title="Step 4"
                    description="Head off to your exciting trip"
                />
            </div>
        </section>
    );
}
