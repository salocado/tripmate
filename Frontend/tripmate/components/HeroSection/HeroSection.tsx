// Author: Salome Schmied

import styles from './HeroSection.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const HeroSection = () => (
    <section className={styles.container}>
        <div className={styles.background}>
            <Image
                src='/images/heroBG.jpg'
                alt='Hero Background'
                fill
                className={styles.image}
            />
        </div>
        <div className={styles.content}>
            <h1>
                Your trip begins here! Begin planning today and discover the joy of seamless travel.
            </h1>
            <Button>Start Planning</Button>
        </div>
    </section>
);

export default HeroSection;
