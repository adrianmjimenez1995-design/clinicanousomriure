import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import AboutPreview from '../components/home/AboutPreview';
import ClinicGallery from '../components/home/ClinicGallery';
import CTASection from '../components/home/CTASection';

export default function Home() {
    return (
        <main className="overflow-hidden">
            <HeroSection />
            <ServicesPreview />
            <AboutPreview />
            <ClinicGallery />
            <CTASection />
        </main>
    );
}