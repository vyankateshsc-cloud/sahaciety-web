import { PageShell, SectionHeading } from "../../components/Shell";
import { DirectoryCards } from "../../components/Directory";
import { serviceCategories } from "../../data/site";

export const metadata = { title: "Services", description: "Explore Sahaciety services across business, finance, compliance, property, community and participation." };

export default function ServicesPage() { return <PageShell eyebrow="Services" title="Find a clear starting point for what you need." intro="Explore by goal, then understand the relevant service, people, documents and next step."><section className="section"><div className="container"><SectionHeading eyebrow="Service universe" title="Connected categories, simpler journeys." intro="Sahaciety is designed to grow across many services without making people learn a different system for every need." /><DirectoryCards items={serviceCategories} type="category" /></div></section></PageShell>; }