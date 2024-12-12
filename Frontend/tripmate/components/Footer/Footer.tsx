import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => (
    <footer className={styles.container}>
        <div>
            <Image 
                src="logo.svg" 
                alt="Logo"
                width={140}
                height={40}
            />
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <h3>Support</h3>
                <p>We are available from Monday to Friday, 9:00 AM to 6:00 PM:</p>
                <p>+49 123 45678</p>
                <p>info@tripmate.com</p>
            </div>
            <div className={styles.content}>
                <h3>About us</h3>
                <p>Imprint</p>
                <p>Terms and Conditions</p>
                <p>Data Security</p>
            </div>
        </div>
    </footer>
);

export default Footer;
