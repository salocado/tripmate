// Author: Salome Schmied

import styles from './HeroSection.module.css';
import Button from '@/components/Button/Button';

const HeroSection = () => (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1>
                Your trip begins here! Begin planning today and discover the joy of seamless travel.
            </h1>
            <Button>Start Planning</Button>
        </div>
    </section>
);

export default HeroSection;
