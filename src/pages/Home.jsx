import TopBar from '../components/TopBar';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import LocationBanner from '../components/LocationBanner';
import AboutSection from '../components/AboutSection';
import ReviewsSection from '../components/ReviewsSection';
import AreasSection from '../components/AreasSection.jsx';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const HERO_IMAGES = [
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/96ab7862c_generated_image.png",
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/6c81d21a1_generated_image.png",
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/d8a7baf9c_generated_image.png",
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/45262f701_generated_image.png",
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/e5689ed5b_generated_image.png",
];
const SERVICE_IMAGES = [
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/5dbbf6b9c_generated_b34b8330.png",
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/613eb1f71_generated_784cb157.png",
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/b9b3fff41_generated_8003a31b.png",
];
const ABOUT_IMAGE = "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/74aba915c_generated_image.png"; "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/8a563f6d1_generated_7f055693.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection heroImages={HERO_IMAGES} />
      <LocationBanner />
      <ServicesSection images={SERVICE_IMAGES} />
      <AreasSection />
      <CTABanner />
      <AboutSection aboutImage={ABOUT_IMAGE} />
      <ReviewsSection />
      <Footer />
    </div>
  );
}