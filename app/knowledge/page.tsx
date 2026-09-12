import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell, SectionHeading } from "../../components/Shell";
import { knowledge } from "../../data/site";

export const metadata = { title: "Knowledge Centre", description: "Guides and explainers for schemes, finance, business, property, society governance and rural services." };

export default function KnowledgePage() { return <PageShell eyebrow="Knowledge centre" title="Understand before you act." intro="Guides, scheme explainers, eligibility checklists and practical context connected back to actionable journeys."><section className="section"><div className="container"><SectionHeading eyebrow="Browse knowledge" title="A better question makes a better next step." /><div className="knowledge-grid">{knowledge.map((article) => <Link href={`/knowledge/${article.slug}`} className="knowledge-card" key={article.slug}><span>{article.category}</span><h2>{article.title}</h2><p>{article.summary}</p><strong>Read guide <ArrowUpRight size={16} /></strong></Link>)}</div></div></section></PageShell>; }