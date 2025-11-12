import AboutHero from "@/components/about/AboutHero";
import WhoAreWe from "@/components/about/WhoAreWe";
import MissionVisionCards from "@/components/about/MissionVisionCards";
import StrategyValues from "@/components/about/StrategyValues";
import SimpleSteps from "@/components/about/SimpleSteps";
import GetStartedFormSection from "@/components/forms/GetStartedFormSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <WhoAreWe />
      <GetStartedFormSection />
      <MissionVisionCards />
      <StrategyValues />
      <SimpleSteps />
      <GetStartedFormSection />
    </main>
  );
}
