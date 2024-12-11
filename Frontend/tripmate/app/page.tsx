import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ConceptSection from '../components/ConceptSection';
import styles from './layout.module.css';

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <div className={styles.container}>
                <ConceptSection />
            </div>
            <Footer />
        </div>
    );
}
