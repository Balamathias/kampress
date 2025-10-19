import FRHero from "@/components/study-abroad/france/Hero";
import Overview from "@/components/study-abroad/france/Overview";
import WhyFR from "@/components/study-abroad/france/WhyFR";
import CostsAndTuition from "@/components/study-abroad/france/CostsAndTuition";
import Universities from "@/components/study-abroad/france/Universities";
import WorkAndChecklist from "@/components/study-abroad/france/WorkAndChecklist";
import FormSection from "@/components/study-abroad/france/FormSection";

export const metadata = {
  title: "Study & Work in France | Kampress Global Placement Services",
  description:
    "Explore studying and working in France: overview, benefits, tuition ranges, universities, work rules, admission checklist, and how to get started.",
};

export default function FRPage() {
  return (
    <main className="min-h-screen bg-[#041B4E] text-white">
      <FRHero />
      <Overview />
      <WhyFR />
      <CostsAndTuition />
      <Universities />
      <WorkAndChecklist />
      <FormSection />
    </main>
  );
}
