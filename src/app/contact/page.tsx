import ContactHero from "@/components/contact/ContactHero";
import ContactInfoMaps from "@/components/contact/ContactInfoMaps";
import ContactFormSection from "@/components/contact/ContactFormSection";

export const metadata = {
  title: "Contact Us | Kampress Global Placement Services",
  description: "Get in touch with Kampress Global Placement Services. Visit our offices in Abuja or Asaba, call us, or send us a message. We're here to help you achieve your study abroad dreams.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfoMaps />
      <ContactFormSection />
    </main>
  );
}
