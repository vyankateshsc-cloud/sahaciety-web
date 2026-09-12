import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./Shell";
import { categoryStages } from "../data/site";

export function DirectoryCards({ items, type }: { items: readonly { slug: string; title: string; summary: string; icon: React.ElementType }[]; type: "category" | "solution" }) {
  return <div className="directory-grid">{items.map(({ slug, title, summary, icon: Icon }) => <Link href={type === "category" ? `/services/${slug}` : `/solutions/${slug}`} className="directory-card" key={slug}><span className="icon-tile"><Icon size={23} /></span><h2>{title}</h2><p>{summary}</p><span className="text-link">Explore <ArrowUpRight size={16} /></span></Link>)}</div>;
}

export function CategoryContent({ slug, title, summary, services }: { slug: string; title: string; summary: string; services: readonly string[] }) {
  const categorySlug = slug;
  const stages = categoryStages[categorySlug] ?? [{ title: "Explore", items: services }];
  return <section className="section"><div className="container"><SectionHeading eyebrow="Where are you in your journey?" title={title} intro={summary} /><div className="category-stage-list">{stages.map((stage) => <div className="category-stage" key={stage.title}><div><span className="stage-marker">{stage.title.slice(0, 1)}</span><h2>{stage.title}</h2></div><div className="stage-items">{stage.items.map((item) => <span key={item}><CheckCircle2 size={16} />{item}</span>)}</div></div>)}</div><div className="callout"><div><p className="eyebrow">Not sure which stage fits?</p><h2>Answer a few questions and get your path.</h2></div><Link href={`/diagnostic?path=${categorySlug === "community" ? "society" : categorySlug === "finance" ? "funding" : categorySlug}`} className="button button-dark">Find my path <ArrowUpRight size={17} /></Link></div></div></section>;
}