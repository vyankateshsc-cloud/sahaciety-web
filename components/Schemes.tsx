import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Landmark, ShieldCheck } from "lucide-react";
import { Scheme, schemeCategoryTitles, schemes } from "../data/schemes";
import { SectionHeading } from "./Shell";

export function SchemeGrid() {
  return <div className="scheme-grid">{schemes.map((scheme) => <SchemeCard scheme={scheme} key={scheme.slug} />)}</div>;
}

function SchemeCard({ scheme }: { scheme: Scheme }) {
  const Icon = scheme.icon;
  return <Link href={`/schemes/${scheme.slug}`} className="scheme-card">
    <span className="icon-tile"><Icon size={21} /></span>
    <span className="scheme-card-category">{schemeCategoryTitles[scheme.category] ?? scheme.category}</span>
    <h3>{scheme.title}</h3>
    <span className="scheme-tagline">{scheme.tagline}</span>
    <p>{scheme.summary}</p>
    <span className="text-link">View scheme <ArrowUpRight size={16} /></span>
  </Link>;
}

export function SchemeDetail({ scheme }: { scheme: Scheme }) {
  const Icon = scheme.icon;
  const related = schemes.filter((candidate) => candidate.slug !== scheme.slug && candidate.category === scheme.category).slice(0, 3);
  return <section className="section scheme-detail-page"><div className="container">
    <div className="detail-grid">
      <div>
        <span className="icon-tile"><Icon size={25} /></span>
        <p className="eyebrow detail-eyebrow">{schemeCategoryTitles[scheme.category] ?? scheme.category}</p>
        <h2>{scheme.title}</h2>
        <p className="detail-lede">{scheme.summary}</p>
        <div className="detail-actions">
          <Link href="/diagnostic" className="button button-dark">Check my eligibility <ArrowUpRight size={17} /></Link>
          <Link href="/contact" className="text-link">Talk to Sahaciety <ArrowRight size={16} /></Link>
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
    {related.length > 0 && <div className="related-services-block"><p className="eyebrow">Related schemes</p><h2>You may also want to check</h2><div className="related-service-grid">{related.map((item) => <Link href={`/schemes/${item.slug}`} className="related-service" key={item.slug}><span>{schemeCategoryTitles[item.category] ?? item.category}</span><strong>{item.title}</strong><ArrowRight size={16} /></Link>)}</div></div>}
    <div className="detail-next"><div><p className="eyebrow">Next step</p><h2>See how this fits your situation.</h2><p>Answer a few questions and get a roadmap that connects to the schemes that are actually relevant to you.</p></div><Link href="/diagnostic" className="button button-dark">Check my eligibility <ArrowUpRight size={17} /></Link></div>
  </div></section>;
}

export function SchemesIntro() {
  return <SectionHeading eyebrow="Schemes library" title="Government schemes, explained plainly." intro="Independent, plain-language explainers for schemes relevant to business, finance, farming, property and society needs. Always confirm current terms with the implementing body before you apply." />;
}
