import styles from './HeroSection.module.css';
import Button from './Button';

const HeroSection = () => (
    <section className={styles.heroSection}>
        <div className={styles.content}>
            <h1>
                Your trip begins here! Begin planning today and discover the joy of seamless travel.
            </h1>
            <p></p>
            <Button>Start Planning</Button>
        </div>
    </section>
);

export default HeroSection;
