import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PageShell, SectionHeading } from "../../../components/Shell";
import { getSolution, solutions } from "../../../data/site";

export function generateStaticParams() { return solutions.map(({ slug }) => ({ type: slug })); }
export function generateMetadata({ params }: { params: { type: string } }) { const solution = getSolution(params.type); return { title: solution?.title ?? "Solutions", description: solution?.summary }; }

export default function SolutionPage({ params }: { params: { type: string } }) { const solution = getSolution(params.type); if (!solution) notFound(); const Icon = solution.icon; return <PageShell eyebrow="Solutions" title={solution.title} intro={solution.summary}><section className="section"><div className="container split-section"><div><span className="icon-tile"><Icon size={25} /></span><SectionHeading eyebrow="A relevant path" title="Bring the right services around the goal." intro="You can begin with a question, a need or a relationship. Sahaciety helps make the next useful step visible." /><Link href="/ask-sahaciety" className="button button-dark">Tell us what you need <ArrowUpRight size={17} /></Link></div><div className="detail-panel"><p className="eyebrow">Common starting points</p>{solution.points.map((point) => <div className="detail-points" key={point}><div><CheckCircle2 size={18} /><span>{point}</span></div></div>)}</div></div></section></PageShell>; }