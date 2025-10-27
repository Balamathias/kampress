import ComingSoon from "@/components/study-abroad/ComingSoon";

export const metadata = {
  title: "Study in Barbados - Coming Soon | Kampress",
  description: "Information about studying in Barbados is coming soon. Contact us to learn more about opportunities in Barbados.",
};

export default function StudyInBarbadosPage() {
  return (
    <ComingSoon
      country="Barbados"
      flag="🇧🇧"
      description="We're preparing comprehensive information about studying in this beautiful Caribbean destination."
    />
  );
}
