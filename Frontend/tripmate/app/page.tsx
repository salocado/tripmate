// Author: Salome Schmied

import NavigationBar from '@/components/NavigationBar/NavigationBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import Footer from '@/components/Footer/Footer';
import ConceptSection from '@/components/ConceptSection/ConceptSection';
import StartPlanningSection from '@/components/StartPlanningSection/StartPlanningSection';

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
