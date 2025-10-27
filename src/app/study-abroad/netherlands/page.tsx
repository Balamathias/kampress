import NLHero from "@/components/study-abroad/netherlands/Hero";
import Overview from "@/components/study-abroad/netherlands/Overview";
import WhyNL from "@/components/study-abroad/netherlands/WhyNL";
import CostsAndTuition from "@/components/study-abroad/netherlands/CostsAndTuition";
import Universities from "@/components/study-abroad/netherlands/Universities";
import WorkAndChecklist from "@/components/study-abroad/netherlands/WorkAndChecklist";
import FormSection from "@/components/study-abroad/netherlands/FormSection";

export const metadata = {
  title: "Study in the Netherlands | Kampress Global Placement Services",
  description:
    "Discover English‑taught programmes, costs, universities, work rules, checklists and how to start your Netherlands study application.",
};

export default function NLPage() {
  return (
    <main className="min-h-screen bg-[#041B4E] text-white">
      <NLHero />
      <Overview />
      <WhyNL />
      <CostsAndTuition />
      <Universities />
      <WorkAndChecklist />
      <FormSection />
    </main>
  );
}
