import Hero from "@/components/study-abroad/usa/Hero";
import Overview from "@/components/study-abroad/usa/Overview";
import WhyUSA from "@/components/study-abroad/usa/WhyUSA";
import Universities from "@/components/study-abroad/usa/Universities";
import CostsAndTuition from "@/components/study-abroad/usa/CostsAndTuition";
import WorkAndChecklist from "@/components/study-abroad/usa/WorkAndChecklist";
import FormSection from "@/components/study-abroad/usa/FormSection";

export const metadata = {
  title: "Study in USA | Kampress - Your Gateway to American Education",
  description:
    "Discover world-class education in the United States. Expert guidance for admissions, visas, scholarships, and settling into American university life.",
  keywords: [
    "study in USA",
    "US universities",
    "American education",
    "USA student visa",
    "study abroad USA",
    "US scholarships",
    "US admissions",
    "international students USA",
  ],
  openGraph: {
    title: "Study in USA | Kampress",
    description:
      "Home to world-renowned universities, cutting-edge research, and endless opportunities for international students",
    type: "website",
  },
};

export default function StudyInUSAPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <WhyUSA />
      <Universities />
      <CostsAndTuition />
      <WorkAndChecklist />
      <FormSection />
    </main>
  );
}
