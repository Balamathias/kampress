import AcademyHero from "@/components/academy/AcademyHero";
import DiscoverInformProgram from "@/components/academy/DiscoverInformProgram";
import DurationContent from "@/components/academy/DurationContent";
import ObjectivesSection from "@/components/academy/ObjectivesSection";
import AcademySteps from "@/components/academy/AcademySteps";
import AcademyFormSection from "@/components/academy/AcademyFormSection";

export const metadata = {
  title: "Kampress Academy - Discover & Inform Program | Kampress Global Placement Services",
  description: "Join Kampress Academy's Discover & Inform Program. A two-week intensive boot camp experience designed to help prospective students get ready to face the world.",
};

export default function AcademyPage() {
  return (
    <main className="min-h-screen">
      <AcademyHero />
      <DiscoverInformProgram />
      <DurationContent />
      <ObjectivesSection />
      <AcademySteps />
      <AcademyFormSection />
    </main>
  );
}
