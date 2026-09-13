import { notFound } from "next/navigation";
import { PageShell } from "../../../components/Shell";
import { SchemeDetail } from "../../../components/Schemes";
import { getScheme, schemes } from "../../../data/schemes";

export function generateStaticParams() { return schemes.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { const scheme = getScheme(params.slug); return { title: scheme?.title ?? "Scheme", description: scheme?.summary }; }

export default function SchemeArticlePage({ params }: { params: { slug: string } }) {
  const scheme = getScheme(params.slug);
  if (!scheme) notFound();
  return <PageShell eyebrow="Scheme" eyebrowMr="योजना" title={scheme.title} titleMr={scheme.titleMr} intro={scheme.tagline} introMr={scheme.taglineMr}>
    <SchemeDetail scheme={scheme} />
  </PageShell>;
}
