// Author: Salome Schmied

import styles from './PhotoGallery.module.css';
import Image from 'next/image';

const PhotoGallery = () => {
    return (
        <div className={styles.container}>
            <h1>Inspiration from around the world</h1>
            <div className={styles.gallery}>
                <div className={styles.photo1}>
                    <Image
                        src="/images/photo1.jpg"
                        alt="Photo 1"
                        fill
                        className={styles.image}
                        sizes="(max-width: 600px)"
                    />
                </div>
                <div className={styles.photo2}>
                    <Image
                        src="/images/photo2.jpg"
                        alt="Photo 2"
                        fill
                        className={styles.image}
                        sizes="(max-width: 600px)"
                    />
                </div>
                <div className={styles.photo3}>
                    <Image
                        src="/images/photo3.jpg"
                        alt="Photo 3"
                        fill
                        className={styles.image}
                        sizes="(max-width: 600px)"
                    />
                </div>
                <div className={styles.photo4}>
                    <Image
                        src="/images/photo4.jpg"
                        alt="Photo 4"
                        fill
                        className={styles.image}
                        sizes="(max-width: 600px)"
                    />
                </div>
                <div className={styles.photo5}>
                    <Image
                        src="/images/photo5.jpg"
                        alt="Photo 5"
                        fill
                        className={styles.image}
                        sizes="(max-width: 600px)"
                    />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;