import CanadaHero from "@/components/study-abroad/canada/Hero";
import Overview from "@/components/study-abroad/canada/Overview";
import WhyCanada from "@/components/study-abroad/canada/WhyCanada";
import CostsAndTuition from "@/components/study-abroad/canada/CostsAndTuition";
import Universities from "@/components/study-abroad/canada/Universities";
import WorkAndChecklist from "@/components/study-abroad/canada/WorkAndChecklist";
import FormSection from "@/components/study-abroad/canada/FormSection";

export const metadata = {
  title: "Study in Canada | Kampress Global Placement Services",
  description:
    "Everything you need to know about studying and working in Canada: overview, benefits, tuition ranges, affordable universities, work rules, and how to get started.",
};

export default function CanadaPage() {
  return (
    <main className="min-h-screen bg-[#041B4E] text-white">
      <CanadaHero />
      <FormSection />
      <Overview />
      <WhyCanada />
      <CostsAndTuition />
      <Universities />
      <WorkAndChecklist />
      <FormSection />
    </main>
  );
}
