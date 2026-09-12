import { notFound } from "next/navigation";
import { PageShell } from "../../../components/Shell";
import { ArticleDetail } from "../../../components/Detail";
import { getKnowledge, knowledge } from "../../../data/site";

export function generateStaticParams() { return knowledge.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { const article = getKnowledge(params.slug); return { title: article?.title ?? "Knowledge", description: article?.summary }; }

export default function KnowledgeArticlePage({ params }: { params: { slug: string } }) { const article = getKnowledge(params.slug); if (!article) notFound(); return <PageShell eyebrow={article.category} title={article.title} intro={article.summary}><ArticleDetail category={article.category} title={article.title} summary={article.summary} /></PageShell>; }