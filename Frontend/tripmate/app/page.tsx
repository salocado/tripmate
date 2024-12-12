import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ConceptSection from '../components/ConceptSection';
import StartPlanningSection from '@/components/StartPlanningSection';

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <ConceptSection />
            <StartPlanningSection />
            <Footer />
        </div>
    );
}
