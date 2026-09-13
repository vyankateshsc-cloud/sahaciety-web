import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL("https://www.sahaciety.in"), title: { default: "Sahaciety | Governance-led ecosystem", template: "%s | Sahaciety" }, description: "Sahaciety connects people, businesses and societies with services, execution and participation.", openGraph: { title: "Sahaciety | One ecosystem for people, business & society.", description: "Governance-led ecosystem for citizens, businesses and societies.", type: "website", siteName: "Sahaciety" }, twitter: { card: "summary_large_image", title: "Sahaciety | Governance-led ecosystem", description: "One ecosystem for people, business & society." } };

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sahaciety",
  url: "https://www.sahaciety.in",
  description: "Governance-led ecosystem connecting citizens, businesses and societies with services, execution and participation.",
  telephone: "+91-84839-16755",
  email: "reach@sahaciety.in",
  address: { "@type": "PostalAddress", streetAddress: "Office No. 407, 4th Floor, Amanora Ascent Avenue, Amanora Park Town, Sadesatra Nali, Hadapsar", addressLocality: "Pune", addressRegion: "Maharashtra", postalCode: "411028", addressCountry: "IN" },
  areaServed: "IN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} /></body></html>;
}
