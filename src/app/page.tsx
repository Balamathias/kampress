import HeroSection from "@/components/home/HeroSection";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import ServicesDashboard from "@/components/home/ServicesDashboard";
import PartnerUniversities from "@/components/home/PartnerUniversities";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import CounselingFormSection from "@/components/career-counseling/CounselingFormSection";
import GetStartedFormSection from "@/components/forms/GetStartedFormSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CounselingFormSection />
      <MissionVisionSection />
      <ServicesDashboard />
      <PartnerUniversities />
      <GetStartedFormSection />
      <Testimonials />
      <ContactSection />
      {/* <ContactFormSection /> */}
    </main>
  );
}
