import { notFound } from "next/navigation";
import { PageShell } from "../../../components/Shell";
import { ServiceDetail } from "../../../components/Detail";
import { getService, services } from "../../../data/site";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { const service = getService(params.slug); return { title: service?.title ?? "Service", description: service?.detail }; }

export default function ServicePage({ params }: { params: { slug: string } }) { const service = getService(params.slug); if (!service) notFound(); return <PageShell eyebrow={service.category} title={service.title} intro={service.summary}><ServiceDetail service={service} /></PageShell>; }