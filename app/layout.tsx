import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL("https://www.sahaciety.in"), title: { default: "Sahaciety | Governance-led ecosystem", template: "%s | Sahaciety" }, description: "Sahaciety connects people, businesses and societies with services, execution and participation.", openGraph: { title: "Sahaciety | One ecosystem for people, business & society.", description: "Governance-led ecosystem for citizens, businesses and societies.", type: "website", siteName: "Sahaciety" }, twitter: { card: "summary_large_image", title: "Sahaciety | Governance-led ecosystem", description: "One ecosystem for people, business & society." } };

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
