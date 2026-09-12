import { PageShell, SectionHeading } from "../../components/Shell";
import { DirectoryCards } from "../../components/Directory";
import { solutions } from "../../data/site";

export const metadata = { title: "Solutions", description: "Find a Sahaciety path for individuals, families, businesses, societies and enterprise ecosystems." };

export default function SolutionsPage() { return <PageShell eyebrow="Solutions" title="Start with who you are, or what you are trying to accomplish." intro="Sahaciety connects the relevant services, people and governance pathways around your context."><section className="section"><div className="container"><SectionHeading eyebrow="Paths into the ecosystem" title="Useful context without unnecessary complexity." /><DirectoryCards items={solutions} type="solution" /></div></section></PageShell>; }