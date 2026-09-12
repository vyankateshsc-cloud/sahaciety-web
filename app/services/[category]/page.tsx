import { notFound } from "next/navigation";
import { PageShell } from "../../../components/Shell";
import { CategoryContent } from "../../../components/Directory";
import { getCategory, serviceCategories } from "../../../data/site";

export function generateStaticParams() { return serviceCategories.map(({ slug }) => ({ category: slug })); }
export function generateMetadata({ params }: { params: { category: string } }) { const category = getCategory(params.category); return { title: category?.title ?? "Services", description: category?.summary }; }

export default function CategoryPage({ params }: { params: { category: string } }) { const category = getCategory(params.category); if (!category) notFound(); return <PageShell eyebrow="Services" title={category.title} intro={category.summary}><CategoryContent slug={category.slug} title={category.title} summary={category.summary} services={category.services} /></PageShell>; }