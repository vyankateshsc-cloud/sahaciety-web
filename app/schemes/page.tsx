import { PageShell } from "../../components/Shell";
import { SchemeGrid, SchemesIntro } from "../../components/Schemes";

export const metadata = { title: "Government Schemes", description: "Plain-language explainers for government schemes across business, finance, farming, property and society needs." };

export default function SchemesPage() {
  return <PageShell eyebrow="Schemes" eyebrowMr="योजना" title="Understand schemes before you apply." titleMr="अर्ज करण्यापूर्वी योजना समजून घ्या." intro="Eligibility, benefits and the authority behind each scheme - explained plainly, connected back to your actual situation." introMr="प्रत्येक योजनेमागील पात्रता, लाभ आणि प्राधिकरण - सोप्या भाषेत, तुमच्या प्रत्यक्ष परिस्थितीशी जोडलेले.">
    <section className="section"><div className="container"><SchemesIntro /><SchemeGrid /></div></section>
  </PageShell>;
}
