import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { EmailCapture } from '@/components/EmailCapture';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-700 focus:text-white focus:rounded-md focus:text-sm">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Pricing />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
