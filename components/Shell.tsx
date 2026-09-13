import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ReactNode } from "react";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import AskAssistant from "./AskAssistant";
import FloatingDock from "./FloatingDock";
import { Bi, BiInline } from "./Bilingual";
import { buildWhatsAppLink } from "../data/site";

export function Header() {
  return <><header className="site-header"><div className="container header-inner"><Logo /><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/services"><Bi en="Services" mr="सेवा" /></Link><Link href="/schemes"><Bi en="Schemes" mr="योजना" /></Link><Link href="/solutions"><Bi en="Solutions" mr="उपाय" /></Link><Link href="/about"><Bi en="About" mr="आमच्याविषयी" /></Link><Link href="/knowledge"><Bi en="Knowledge" mr="ज्ञान केंद्र" /></Link><Link href="/partners"><Bi en="Partners" mr="भागीदार" /></Link></nav><div className="header-actions"><Link href="/login" className="login-link"><Bi en="Login" mr="लॉगिन" /></Link><Link href="/diagnostic" className="button button-small button-light"><BiInline en="Get started" mr="सुरू करा" /> <ArrowUpRight size={16} /></Link><MobileNav /></div></div></header><FloatingDock><AskAssistant /><WhatsAppFab /></FloatingDock></>;
}

function WhatsAppFab() {
  return <a className="whatsapp-fab" href={buildWhatsAppLink("Hi Sahaciety, I'd like some help.")} target="_blank" rel="noopener noreferrer" aria-label="Chat with Sahaciety on WhatsApp"><MessageCircle size={22} /><span><BiInline en="Chat with us" mr="चॅट करा" /></span></a>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Logo footer /><p><Bi en="Governance-led ecosystem for citizens, businesses and societies." mr="नागरिक, व्यवसाय आणि संस्थांसाठी सुशासन-आधारित परिसंस्था." /></p></div><div><h2><Bi en="Explore" mr="शोधा" /></h2><Link href="/services"><Bi en="Services" mr="सेवा" /></Link><Link href="/schemes"><Bi en="Schemes" mr="योजना" /></Link><Link href="/solutions"><Bi en="Solutions" mr="उपाय" /></Link><Link href="/knowledge"><Bi en="Knowledge" mr="ज्ञान केंद्र" /></Link></div><div><h2><Bi en="Participate" mr="सहभागी व्हा" /></h2><Link href="/partners"><Bi en="Partners" mr="भागीदार" /></Link><Link href="/become-a-partner"><Bi en="Become a partner" mr="भागीदार व्हा" /></Link><Link href="/ask-sahaciety"><Bi en="Ask Sahaciety" mr="साहासोसायटीला विचारा" /></Link></div><div><h2><Bi en="Connect" mr="संपर्क" /></h2><Link href="/about"><Bi en="About Sahaciety" mr="साहासोसायटीबद्दल" /></Link><Link href="/contact"><Bi en="Contact" mr="संपर्क करा" /></Link><Link href="/login"><Bi en="Login" mr="लॉगिन" /></Link></div></div><div className="container footer-bottom"><span><Bi en="Services, support and participation in one trusted ecosystem" mr="एका विश्वासार्ह परिसंस्थेत सेवा, सहाय्य आणि सहभाग" /></span><span>© Sahaciety</span></div></footer>;
}

export function PageShell({ children, eyebrow, title, intro, eyebrowMr, titleMr, introMr }: { children: ReactNode; eyebrow: string; title: string; intro: string; eyebrowMr?: string; titleMr?: string; introMr?: string }) { return <><Header /><main><section className="page-hero"><div className="container narrow"><p className="eyebrow">{eyebrowMr ? <Bi en={eyebrow} mr={eyebrowMr} /> : eyebrow}</p><h1>{titleMr ? <Bi en={title} mr={titleMr} /> : title}</h1><p className="page-intro">{introMr ? <Bi en={intro} mr={introMr} /> : intro}</p></div></section>{children}</main><Footer /></>; }
export function SectionHeading({ eyebrow, title, intro, eyebrowMr, titleMr, introMr, align = "left" }: { eyebrow: string; title: string; intro?: string; eyebrowMr?: string; titleMr?: string; introMr?: string; align?: "left" | "center" }) { return <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}><p className="eyebrow">{eyebrowMr ? <Bi en={eyebrow} mr={eyebrowMr} /> : eyebrow}</p><h2>{titleMr ? <Bi en={title} mr={titleMr} /> : title}</h2>{intro && <p>{introMr ? <Bi en={intro} mr={introMr} /> : intro}</p>}</div>; }