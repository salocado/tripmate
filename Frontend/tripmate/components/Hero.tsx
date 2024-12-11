import styles from './Hero.module.css';
import Button from './Button';

const Hero = () => (
    <section className={styles.hero}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Your trip begins here! Begin planning today and discover the joy of seamless travel.
            </h1>
            <p></p>
            <Button>Start Planning</Button>
        </div>
    </section>
);

export default Hero;
