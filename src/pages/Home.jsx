import React from 'react';
import HeroSection from '../components/home/HeroSection';
import InfoStrip from '../components/home/InfoStrip';
import ServicesPreview from '../components/home/ServicesPreview';
import TechnologySection from '../components/home/TechnologySection';
import AboutPreview from '../components/home/AboutPreview';
import FirstVisit from '../components/home/FirstVisit';
import ClinicGallery from '../components/home/ClinicGallery';
import TeamPreview from '../components/home/TeamPreview';
import ReviewsSection from '../components/home/ReviewsSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';
import usePageMeta from '@/hooks/use-page-meta';
import { SEO } from '@/lib/seo';

export default function Home() {
    usePageMeta(SEO.Home.title, SEO.Home.description);

    return (
        <main className="overflow-hidden">
            <HeroSection />
            <InfoStrip />
            <ServicesPreview />
            <TechnologySection />
            <AboutPreview />
            <FirstVisit />
            <ClinicGallery />
            <TeamPreview />
            <ReviewsSection />
            <FAQSection />
            <CTASection />
        </main>
    );
}
