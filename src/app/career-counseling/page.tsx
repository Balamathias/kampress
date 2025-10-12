import CounselingHero from "@/components/career-counseling/CounselingHero";
import OverviewSection from "@/components/career-counseling/OverviewSection";
import CounselingChecklist from "@/components/career-counseling/CounselingChecklist";
import CountriesSection from "@/components/career-counseling/CountriesSection";
import CounselingFormSection from "@/components/career-counseling/CounselingFormSection";

export const metadata = {
  title: "Career Counseling & Visa Guide | Kampress Global Placement Services",
  description: "Comprehensive career counseling and visa guidance services for international students. Get expert advice for studying abroad.",
};

export default function CareerCounselingPage() {
  return (
    <main className="min-h-screen">
      <CounselingHero />
      <OverviewSection />
      <CounselingChecklist />
      <CounselingFormSection />
      <CountriesSection />
    </main>
  );
}
