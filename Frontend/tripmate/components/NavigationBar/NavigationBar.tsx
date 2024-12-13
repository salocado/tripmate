// Author: Salome Schmied

import styles from './NavigationBar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const NavigationBar = () => (
    <nav className={styles.navbar}>
        <div>
            <Image 
                src='logo.svg'
                alt='Logo'
                width={140}
                height={40}
            />
        </div>
        <h3><ul className={styles.navLinks}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/trips'>My Trips</Link></li>
            <li><Link href='/add-trip'>Add Trip</Link></li>
        </ul></h3>
    </nav>
);

export default NavigationBar;
