import ComingSoon from "@/components/study-abroad/ComingSoon";

export const metadata = {
  title: "Study in Mauritius - Coming Soon | Kampress",
  description: "Information about studying in Mauritius is coming soon. Contact us to learn more about opportunities in Mauritius.",
};

export default function StudyInMauritiusPage() {
  return (
    <ComingSoon
      country="Mauritius"
      flag="🇲🇺"
      description="We're preparing comprehensive information about studying in this stunning island nation."
    />
  );
}
