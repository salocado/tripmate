// Author: Salome Schmied

import NavigationBar from '@/components/NavigationBar/NavigationBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import Footer from '@/components/Footer/Footer';
import ConceptSection from '@/components/ConceptSection/ConceptSection';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <ConceptSection />
            <PhotoGallery />            
            <Footer />
        </div>
    );
}
