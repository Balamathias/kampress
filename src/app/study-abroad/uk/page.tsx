import UKHero from "@/components/study-abroad/uk/Hero";
import Overview from "@/components/study-abroad/uk/Overview";
import WhyUK from "@/components/study-abroad/uk/WhyUK";
import CostsAndTuition from "@/components/study-abroad/uk/CostsAndTuition";
import Universities from "@/components/study-abroad/uk/Universities";
import WorkAndChecklist from "@/components/study-abroad/uk/WorkAndChecklist";
import FormSection from "@/components/study-abroad/uk/FormSection";

export const metadata = {
  title: "Study in the United Kingdom | Kampress Global Placement Services",
  description:
    "Explore studying and working in the UK: overview, benefits, tuition ranges, affordable universities, work rules, admission checklist, and how to get started.",
};

export default function UKPage() {
  return (
    <main className="min-h-screen bg-[#041B4E] text-white">
      <UKHero />
      <FormSection />
      <Overview />
      <WhyUK />
      <CostsAndTuition />
      <Universities />
      <WorkAndChecklist />
      <FormSection />
    </main>
  );
}
