import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Landmark, ShieldCheck } from "lucide-react";
import { Scheme, schemeCategoryTitles, schemeCategoryTitlesMr, schemes } from "../data/schemes";
import { SectionHeading } from "./Shell";
import { Bi, BiInline } from "./Bilingual";

export function SchemeGrid() {
  return <div className="scheme-grid">{schemes.map((scheme) => <SchemeCard scheme={scheme} key={scheme.slug} />)}</div>;
}

function SchemeCard({ scheme }: { scheme: Scheme }) {
  const Icon = scheme.icon;
  return <Link href={`/schemes/${scheme.slug}`} className="scheme-card">
    <span className="icon-tile"><Icon size={21} /></span>
    <span className="scheme-card-category"><Bi en={schemeCategoryTitles[scheme.category] ?? scheme.category} mr={schemeCategoryTitlesMr[scheme.category] ?? ""} /></span>
    <h3><Bi en={scheme.title} mr={scheme.titleMr} /></h3>
    <span className="scheme-tagline"><Bi en={scheme.tagline} mr={scheme.taglineMr} /></span>
    <p>{scheme.summary}</p>
    <span className="text-link"><BiInline en="View scheme" mr="योजना पहा" /> <ArrowUpRight size={16} /></span>
  </Link>;
}

export function SchemeDetail({ scheme }: { scheme: Scheme }) {
  const Icon = scheme.icon;
  const related = schemes.filter((candidate) => candidate.slug !== scheme.slug && candidate.category === scheme.category).slice(0, 3);
  return <section className="section scheme-detail-page"><div className="container">
    <div className="detail-grid">
      <div>
        <span className="icon-tile"><Icon size={25} /></span>
        <p className="eyebrow detail-eyebrow"><Bi en={schemeCategoryTitles[scheme.category] ?? scheme.category} mr={schemeCategoryTitlesMr[scheme.category] ?? ""} /></p>
        <h2><Bi en={scheme.title} mr={scheme.titleMr} /></h2>
        <p className="detail-lede">{scheme.summary}</p>
        <div className="detail-actions">
          <Link href="/diagnostic" className="button button-dark"><BiInline en="Check my eligibility" mr="माझी पात्रता तपासा" /> <ArrowUpRight size={17} /></Link>
          <Link href="/contact" className="text-link"><BiInline en="Talk to Sahaciety" mr="साहासोसायटीशी बोला" /> <ArrowRight size={16} /></Link>
        </div>
      </div>
      <div className="detail-panel">
        <p className="eyebrow">Who is this for?</p>
        <h3>{scheme.who}</h3>
        <div className="detail-points">{scheme.benefits.map((benefit) => <div key={benefit}><CheckCircle2 size={18} /><span>{benefit}</span></div>)}</div>
        <div className="detail-note"><Landmark size={16} /><span>Implemented by {scheme.implementingBody}.</span></div>
      </div>
    </div>
    <div className="service-detail-sections">
      <section className="info-block"><p className="eyebrow">Eligibility highlights</p><div>{scheme.eligibility.map((item) => <p key={item}><CheckCircle2 size={17} />{item}</p>)}</div></section>
      <div className="detail-note scheme-disclaimer"><ShieldCheck size={16} /><span>Eligibility rules, limits and application windows change over time and are decided by {scheme.implementingBody}. Confirm current details on the official scheme portal or with a Sahaciety specialist before applying.</span></div>
    </div>
    {related.length > 0 && <div className="related-services-block"><p className="eyebrow"><Bi en="Related schemes" mr="संबंधित योजना" /></p><h2><Bi en="You may also want to check" mr="तुम्ही हे देखील तपासू शकता" /></h2><div className="related-service-grid">{related.map((item) => <Link href={`/schemes/${item.slug}`} className="related-service" key={item.slug}><span><Bi en={schemeCategoryTitles[item.category] ?? item.category} mr={schemeCategoryTitlesMr[item.category] ?? ""} /></span><strong><Bi en={item.title} mr={item.titleMr} /></strong><ArrowRight size={16} /></Link>)}</div></div>}
    <div className="detail-next"><div><p className="eyebrow"><Bi en="Next step" mr="पुढील पाऊल" /></p><h2><Bi en="See how this fits your situation." mr="हे तुमच्या परिस्थितीला कसे लागू होते ते पहा." /></h2><p><Bi en="Answer a few questions and get a roadmap that connects to the schemes that are actually relevant to you." mr="काही प्रश्नांची उत्तरे द्या आणि तुमच्याशी खरोखर संबंधित योजनांशी जोडलेला रोडमॅप मिळवा." /></p></div><Link href="/diagnostic" className="button button-dark"><BiInline en="Check my eligibility" mr="माझी पात्रता तपासा" /> <ArrowUpRight size={17} /></Link></div>
  </div></section>;
}

export function SchemesIntro() {
  return <SectionHeading eyebrow="Schemes library" eyebrowMr="योजना संग्रह" title="Government schemes, explained plainly." titleMr="सरकारी योजना, सोप्या भाषेत." intro="Independent, plain-language explainers for schemes relevant to business, finance, farming, property and society needs. Always confirm current terms with the implementing body before you apply." introMr="व्यवसाय, वित्त, शेती, मालमत्ता आणि सोसायटीच्या गरजांशी संबंधित योजनांचे स्वतंत्र, सोप्या भाषेतील स्पष्टीकरण. अर्ज करण्यापूर्वी नेहमी अंमलबजावणी संस्थेकडून सध्याच्या अटी तपासून घ्या." />;
}
