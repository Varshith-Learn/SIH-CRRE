import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnnouncementBar from '@/components/AnnouncementBar';
import CollegeSlideshow from '@/components/CollegeSlideshow';
import AboutSection from '@/components/AboutSection';
import JourneySection from '@/components/JourneySection';
import AlumniCarousel from '@/components/AlumniCarousel';
import WhyParticipate from '@/components/WhyParticipate';
import Timeline from '@/components/Timeline';
import ImportantDates from '@/components/ImportantDates';
import PrizeMoneySection from '@/components/PrizeMoneySection';
import { PlayCircle } from 'lucide-react';

// SIH 2026 Internal Hackathon Homepage (College Institutional Theme)
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* ==================== REGISTRATION TUTORIAL ==================== */}
        <section className="relative w-full py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-[#071a33] via-[#0a2340] to-[#071a33]">

          {/* Background Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(#c59b27 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-400/10 blur-3xl rounded-full pointer-events-none" />

          {/* 80% Width / 10% Left + 10% Right */}
          <div className="relative z-10 w-[80%] mx-auto">

            {/* Section Heading */}
            <div className="text-center mb-8 sm:mb-10">

              {/* Registration Guide Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/5 border border-[#c59b27]/50 text-[#d4af37] font-mono text-xs sm:text-sm font-semibold tracking-wider">
                <PlayCircle className="w-4 h-4" />
                REGISTRATION GUIDE
              </div>

              {/* Title */}
              <h2 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                How to Register to SIH Internal Hackathon 2026 of CRRE
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                Watch this step-by-step video to learn how to complete your
                team registration successfully.
              </p>
            </div>

            {/* ==================== NEON VIDEO FRAME ==================== */}
            <div className="relative p-[2px] rounded-[28px] bg-gradient-to-r from-[#c59b27] via-cyan-400 to-[#c59b27] animate-neon-border">

              {/* Video */}
              <div className="relative w-full h-[40vh] min-h-[260px] max-h-[520px] overflow-hidden rounded-[26px] bg-black shadow-2xl">

                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/WvfxDYqpUjA"
                  title="How to Register to SIH Internal Hackathon 2026 of CRRE"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>
            </div>

            {/* Bottom Caption */}
            <div className="flex justify-center mt-5">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                Follow the steps carefully before submitting your registration.
              </div>
            </div>

          </div>
        </section>

        <AnnouncementBar />
        <CollegeSlideshow />
        <AboutSection />
        <PrizeMoneySection />
        <JourneySection />
        <AlumniCarousel />
        <WhyParticipate />
        <Timeline />
        <ImportantDates />
      </main>

      <Footer />
    </div>
  );
}
