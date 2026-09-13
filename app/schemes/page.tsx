import { PageShell } from "../../components/Shell";
import { SchemeGrid, SchemesIntro } from "../../components/Schemes";

export const metadata = { title: "Government Schemes", description: "Plain-language explainers for government schemes across business, finance, farming, property and society needs." };

export default function SchemesPage() {
  return <PageShell eyebrow="Schemes" title="Understand schemes before you apply." intro="Eligibility, benefits and the authority behind each scheme - explained plainly, connected back to your actual situation.">
    <section className="section"><div className="container"><SchemesIntro /><SchemeGrid /></div></section>
  </PageShell>;
}
