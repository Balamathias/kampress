import HeroSection from "@/components/home/HeroSection";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import ServicesDashboard from "@/components/home/ServicesDashboard";
import PartnerUniversities from "@/components/home/PartnerUniversities";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionVisionSection />
      <ServicesDashboard />
      <PartnerUniversities />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
