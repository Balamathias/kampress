import StudyAbroadHero from "@/components/study-abroad/StudyAbroadHero";
import CountriesGrid from "@/components/study-abroad/CountriesGrid";
import StudyAbroadBenefits from "@/components/study-abroad/StudyAbroadBenefits";
import ApplicationProcess from "@/components/study-abroad/ApplicationProcess";

export const metadata = {
  title: "Study Abroad | Kampress Global Placement Services",
  description: "Explore study opportunities in Canada, United States, United Kingdom, Netherlands, France, Australia, Ireland, Barbados, Ghana, and Mauritius.",
};

export default function StudyAbroadPage() {
  return (
    <main className="min-h-screen">
      <StudyAbroadHero />
      <CountriesGrid />
      <StudyAbroadBenefits />
      <ApplicationProcess />
    </main>
  );
}
