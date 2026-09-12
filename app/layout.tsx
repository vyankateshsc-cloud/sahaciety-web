import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata={title:"Sahaciety | Governance-led ecosystem",description:"Governance-led ecosystem for citizens, businesses and societies."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
