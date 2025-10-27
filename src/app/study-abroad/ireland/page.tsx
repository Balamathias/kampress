import ComingSoon from "@/components/study-abroad/ComingSoon";

export const metadata = {
  title: "Study in Ireland - Coming Soon | Kampress",
  description: "Information about studying in Ireland is coming soon. Contact us to learn more about opportunities in Ireland.",
};

export default function StudyInIrelandPage() {
  return (
    <ComingSoon
      country="Ireland"
      flag="🇮🇪"
      description="We're preparing comprehensive information about studying in Ireland's renowned universities and vibrant culture."
    />
  );
}
