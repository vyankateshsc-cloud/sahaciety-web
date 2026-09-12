import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./Shell";

export function DirectoryCards({ items, type }: { items: readonly { slug: string; title: string; summary: string; icon: React.ElementType }[]; type: "category" | "solution" }) {
  return <div className="directory-grid">{items.map(({ slug, title, summary, icon: Icon }) => <Link href={type === "category" ? `/services/${slug}` : `/solutions/${slug}`} className="directory-card" key={slug}><span className="icon-tile"><Icon size={23} /></span><h2>{title}</h2><p>{summary}</p><span className="text-link">Explore <ArrowUpRight size={16} /></span></Link>)}</div>;
}

export function CategoryContent({ title, summary, services }: { title: string; summary: string; services: readonly string[] }) {
  return <section className="section"><div className="container"><SectionHeading eyebrow="Service category" title={title} intro={summary} /><div className="service-list">{services.map((service) => <Link href={`/service/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="service-list-item" key={service}><CheckCircle2 size={19} /><span>{service}</span><ArrowRight size={17} /></Link>)}</div><div className="callout"><div><p className="eyebrow">A clearer next step</p><h2>Start with what you are trying to accomplish.</h2></div><Link href="/ask-sahaciety" className="button button-dark">Ask Sahaciety <ArrowUpRight size={17} /></Link></div></div></section>;
}