import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import MobileNav from "./MobileNav";

export function Header() {
  return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Sahaciety home"><span className="brand-mark">S</span><span><strong>SAHACIETY</strong><small>Governance-led ecosystem</small></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/about">About</Link><Link href="/knowledge">Knowledge</Link><Link href="/partners">Partners</Link></nav><div className="header-actions"><Link href="/login" className="login-link">Login</Link><Link href="/services" className="button button-small button-light">Get started <ArrowUpRight size={16} /></Link><MobileNav /></div></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="footer-brand">SAHACIETY</Link><p>Governance-led ecosystem for citizens, businesses and societies.</p></div><div><h2>Explore</h2><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/knowledge">Knowledge</Link></div><div><h2>Participate</h2><Link href="/partners">Partners</Link><Link href="/become-a-partner">Become a partner</Link><Link href="/ask-sahaciety">Ask Sahaciety</Link></div><div><h2>Connect</h2><Link href="/about">About Sahaciety</Link><Link href="/contact">Contact</Link><Link href="/login">Login</Link></div></div><div className="container footer-bottom"><span>Services, support and participation in one trusted ecosystem</span><span>© Sahaciety</span></div></footer>;
}

export function PageShell({ children, eyebrow, title, intro }: { children: ReactNode; eyebrow: string; title: string; intro: string }) { return <><Header /><main><section className="page-hero"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p></div></section>{children}</main><Footer /></>; }
export function SectionHeading({ eyebrow, title, intro, align = "left" }: { eyebrow: string; title: string; intro?: string; align?: "left" | "center" }) { return <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p>{intro}</p>}</div>; }