import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ReactNode } from "react";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import { buildWhatsAppLink } from "../data/site";

export function Header() {
  return <><header className="site-header"><div className="container header-inner"><Logo /><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/about">About</Link><Link href="/knowledge">Knowledge</Link><Link href="/partners">Partners</Link></nav><div className="header-actions"><Link href="/login" className="login-link">Login</Link><Link href="/diagnostic" className="button button-small button-light">Get started <ArrowUpRight size={16} /></Link><MobileNav /></div></div></header><WhatsAppFab /></>;
}

function WhatsAppFab() {
  return <a className="whatsapp-fab" href={buildWhatsAppLink("Hi Sahaciety, I'd like some help.")} target="_blank" rel="noopener noreferrer" aria-label="Chat with Sahaciety on WhatsApp"><MessageCircle size={22} /><span>Chat with us</span></a>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Logo footer /><p>Governance-led ecosystem for citizens, businesses and societies.</p></div><div><h2>Explore</h2><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/knowledge">Knowledge</Link></div><div><h2>Participate</h2><Link href="/partners">Partners</Link><Link href="/become-a-partner">Become a partner</Link><Link href="/ask-sahaciety">Ask Sahaciety</Link></div><div><h2>Connect</h2><Link href="/about">About Sahaciety</Link><Link href="/contact">Contact</Link><Link href="/login">Login</Link></div></div><div className="container footer-bottom"><span>Services, support and participation in one trusted ecosystem</span><span>© Sahaciety</span></div></footer>;
}

export function PageShell({ children, eyebrow, title, intro }: { children: ReactNode; eyebrow: string; title: string; intro: string }) { return <><Header /><main><section className="page-hero"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p></div></section>{children}</main><Footer /></>; }
export function SectionHeading({ eyebrow, title, intro, align = "left" }: { eyebrow: string; title: string; intro?: string; align?: "left" | "center" }) { return <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p>{intro}</p>}</div>; }