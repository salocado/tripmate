// Author: Salome Schmied

import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => (
    <footer className={styles.container}>
        <Image
            src='logo.svg'
            alt='Logo'
            width={140}
            height={40}
        />
    </footer>
);

export default Footer;
