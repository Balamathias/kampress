import AboutHero from "@/components/about/AboutHero";
import WhoAreWe from "@/components/about/WhoAreWe";
import MissionVisionCards from "@/components/about/MissionVisionCards";
import StrategyValues from "@/components/about/StrategyValues";
import SimpleSteps from "@/components/about/SimpleSteps";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <WhoAreWe />
      <MissionVisionCards />
      <StrategyValues />
      <SimpleSteps />
    </main>
  );
}
