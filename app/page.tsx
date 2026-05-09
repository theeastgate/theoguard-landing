import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { EmailCapture } from '@/components/EmailCapture';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
