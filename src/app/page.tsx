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

        {/* ==================== HERO ==================== */}
        <Hero />

        {/* =========================================================
            REGISTRATION TUTORIAL
            ========================================================= */}
        <section
          className="
            relative
            w-full
            py-12
            sm:py-16
            lg:py-20
            overflow-hidden
            bg-gradient-to-b
            from-[#071a33]
            via-[#0a2340]
            to-[#071a33]
          "
        >

          {/* ==================== BACKGROUND GRID ==================== */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(#c59b27 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* ==================== AMBIENT GLOW ==================== */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[300px]
              h-[220px]
              sm:w-[500px]
              sm:h-[300px]
              bg-cyan-400/10
              blur-3xl
              rounded-full
              pointer-events-none
            "
          />

          {/* =====================================================
              RESPONSIVE CONTENT WIDTH
              Mobile  → 94%
              Tablet  → 90%
              Desktop → 80%
              ===================================================== */}
          <div
            className="
              relative
              z-10
              w-[94%]
              sm:w-[90%]
              lg:w-[80%]
              mx-auto
            "
          >

            {/* ==================== SECTION HEADING ==================== */}
            <div className="text-center mb-7 sm:mb-9 lg:mb-10">

              {/* Registration Guide Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  sm:px-4
                  mb-4
                  rounded-full
                  bg-white/5
                  border
                  border-[#c59b27]/50
                  text-[#d4af37]
                  font-mono
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  font-semibold
                  tracking-wider
                "
              >
                <PlayCircle className="w-4 h-4" />
                REGISTRATION GUIDE
              </div>

              {/* Title */}
              <h2
                className="
                  font-serif
                  font-extrabold
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                  leading-tight
                  text-white
                  tracking-tight
                  max-w-5xl
                  mx-auto
                "
              >
                How to Register to SIH Internal Hackathon 2026 of CRRE
              </h2>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-xs
                  sm:text-sm
                  md:text-base
                  text-slate-300
                  max-w-2xl
                  mx-auto
                  leading-relaxed
                "
              >
                Watch this step-by-step video to learn how to complete your
                team registration successfully.
              </p>
            </div>

            {/* =====================================================
                NEON VIDEO FRAME
                ===================================================== */}
            <div
              className="
                relative
                p-[2px]
                rounded-[22px]
                sm:rounded-[26px]
                lg:rounded-[28px]
                bg-gradient-to-r
                from-[#c59b27]
                via-cyan-400
                to-[#c59b27]
                animate-neon-border
              "
            >

              {/* =================================================
                  TRUE 16:9 RESPONSIVE VIDEO

                  This is the important part.

                  The video ALWAYS stays 16:9:
                  Mobile  → 16:9
                  Tablet  → 16:9
                  Laptop  → 16:9
                  Desktop → 16:9
                  ================================================= */}
              <div
                className="
                  relative
                  w-full
                  aspect-video
                  overflow-hidden
                  rounded-[20px]
                  sm:rounded-[24px]
                  lg:rounded-[26px]
                  bg-black
                  shadow-2xl
                "
              >

                {/* YouTube Video */}
                <iframe
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    border-0
                  "
                  src="https://www.youtube.com/embed/WvfxDYqpUjA"
                  title="How to Register to SIH Internal Hackathon 2026 of CRRE"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>
            </div>

            {/* ==================== BOTTOM CAPTION ==================== */}
            <div className="flex justify-center mt-4 sm:mt-5 px-2">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  text-slate-400
                  text-center
                  leading-relaxed
                "
              >
                <span
                  className="
                    flex-shrink-0
                    w-2
                    h-2
                    rounded-full
                    bg-[#d4af37]
                    animate-pulse
                  "
                />

                Follow the steps carefully before submitting your registration.
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            EXISTING WEBSITE SECTIONS
            ========================================================= */}

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
