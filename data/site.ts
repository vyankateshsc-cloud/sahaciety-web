import {
  BadgeCheck,
  Building2,
  FileCheck2,
  Handshake,
  Landmark,
  Leaf,
  LucideIcon,
  MapPinned,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

export type Service = { slug: string; title: string; category: string; summary: string; detail: string; audience: string; icon: LucideIcon; bullets: string[] };

export const ecosystem = [
  { title: "Citizens & Families", summary: "Benefits, finance, documentation, property and essential services.", icon: Users, href: "/solutions/individual" },
  { title: "Businesses & Entrepreneurs", summary: "Setup, funding, compliance, certifications, growth and advisory.", icon: Building2, href: "/solutions/business" },
  { title: "Farmers & Rural Enterprise", summary: "Schemes, finance, agri services and local enterprise support.", icon: Leaf, href: "/services/farmer-rural" },
  { title: "Societies & Communities", summary: "Management, governance, compliance, vendors and member services.", icon: Landmark, href: "/solutions/society" },
  { title: "Governance Ecosystem", summary: "Structured services, participation, centres and accountable execution.", icon: ShieldCheck, href: "/solutions/enterprise" },
  { title: "Real Estate", summary: "Property, development, RERA support, documentation and finance connection.", icon: MapPinned, href: "/services/property" },
] as const;

export const trustPrinciples = [
  ["Governance-led", "Clear ownership and responsible pathways."], ["Transparent", "Understand what happens next."], ["Verified ecosystem", "Relevant people and services, connected carefully."], ["End-to-end execution", "Move from intent to completion."], ["Local presence", "Human context where it matters."], ["Technology enabled", "A simpler experience backed by a stronger runtime."],
] as const;

export const journeys = [
  ["Discover", "Start with what you are trying to accomplish."], ["Understand", "See eligibility, documents, costs and responsibilities."], ["Connect", "Reach the right service, person or partner."], ["Execute", "Begin a guided service journey."], ["Track", "Know what is happening and what comes next."], ["Complete", "Close the loop with evidence and clarity."], ["Participate", "Stay connected to the wider ecosystem."],
] as const;

export const serviceCategories = [
  { slug: "business", title: "Business", summary: "Build, formalise and grow with connected support.", icon: Building2, services: ["Business setup", "MSME ecosystem", "Business advisory", "Digital growth", "Certifications", "Compliance"] },
  { slug: "finance", title: "Finance", summary: "Understand funding options and take the next step with confidence.", icon: WalletCards, services: ["Business loans", "Home/property finance", "Financial facilitation", "Government-backed schemes", "Funding discovery"] },
  { slug: "government-schemes", title: "Government & Schemes", summary: "Find relevant schemes with practical eligibility and documentation guidance.", icon: Landmark, services: ["Scheme discovery", "Eligibility guidance", "Documentation support", "Application assistance"] },
  { slug: "farmer-rural", title: "Farmer & Rural", summary: "Connect rural needs with finance, services and enterprise support.", icon: Leaf, services: ["Farmer schemes", "Agricultural services", "Rural enterprise", "Finance facilitation", "Local ecosystem services"] },
  { slug: "community", title: "Society & Community", summary: "Make community operations more visible, organised and accountable.", icon: Users, services: ["Society management", "Governance", "Compliance", "Documentation", "Vendor/service coordination"] },
  { slug: "property", title: "Real Estate", summary: "Navigate property, development and documentation with connected support.", icon: MapPinned, services: ["Property advisory", "Buying/selling facilitation", "Development advisory", "RERA-related services", "Property documentation"] },
  { slug: "compliance", title: "Registrations & Compliance", summary: "Get help with the registrations and standards behind responsible growth.", icon: FileCheck2, services: ["Registrations", "GST-related services", "Certifications", "Legal/governance support", "Industrial compliance"] },
  { slug: "local-services", title: "Community & Local Services", summary: "Discover useful services, centres and trusted local capacity.", icon: MapPinned, services: ["Local service discovery", "Centres", "Partner services", "Citizen services"] },
  { slug: "participation", title: "Participation", summary: "Find your place as a member, partner, centre or contributor.", icon: Handshake, services: ["Become a member", "Become a partner", "Become a centre", "Participate in the ecosystem"] },
] as const;

const categoryDetails: Record<string, { audience: string; detail: string }> = {
  business: { audience: "Businesses & entrepreneurs", detail: "A practical starting point for founders and growing businesses that need to make progress across setup, finance, compliance and growth." }, finance: { audience: "Individuals, families and businesses", detail: "Understand the route to funding before you begin, with guidance that keeps eligibility, documents and next steps visible." }, "government-schemes": { audience: "Citizens, families and communities", detail: "Move from scheme discovery to a clearer understanding of eligibility and documentation without promising an outcome before the facts are known." }, "farmer-rural": { audience: "Farmers and rural enterprises", detail: "Connect rural enterprise goals with relevant services, local capacity and finance facilitation." }, community: { audience: "Societies and communities", detail: "Support more organised community operations through visible responsibilities, records, services and governance pathways." }, property: { audience: "Property owners, buyers and developers", detail: "Bring property advisory, documentation, development and finance connection into a more understandable journey." }, compliance: { audience: "Businesses and institutions", detail: "Keep the steps around registrations, certifications and governance support clear as an organisation grows." }, "local-services": { audience: "Citizens and local communities", detail: "Find relevant local services and human assistance without having to understand the whole ecosystem first." }, participation: { audience: "Members, partners and centres", detail: "Explore responsible ways to contribute to Sahaciety and the communities it serves." },
};

export const services: Service[] = serviceCategories.flatMap((category) => {
  const details = categoryDetails[category.slug];
  return category.services.map((title, index) => ({ slug: `${category.slug}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`, title, category: category.title, summary: category.summary, detail: details.detail, audience: details.audience, icon: category.icon, bullets: ["Clarify the goal and the right starting point", "Understand likely documents and responsibilities", index % 2 === 0 ? "Connect with the relevant service pathway" : "Keep the next step visible and actionable"] }));
});

export const solutions = [
  { slug: "individual", title: "Individuals", summary: "Start with a personal goal and find the services that fit around it.", icon: Users, points: ["Government benefits and schemes", "Finance and documentation", "Property and essential services"] },
  { slug: "family", title: "Families", summary: "Bring household needs into one understandable service journey.", icon: Users, points: ["Family documentation", "Protection and finance", "Property and local services"] },
  { slug: "business", title: "Businesses", summary: "Make progress across setup, funding, compliance and growth.", icon: Building2, points: ["Business setup and MSME support", "Funding and certifications", "Compliance and digital growth"] },
  { slug: "society", title: "Societies", summary: "Create more visible, accountable and connected community operations.", icon: Landmark, points: ["Governance and documentation", "Vendors and member services", "Compliance and participation"] },
  { slug: "enterprise", title: "Enterprise", summary: "Coordinate a broader ecosystem with structured services and participation.", icon: BadgeCheck, points: ["Service and partner pathways", "Evidence and accountability", "Centres and local capacity"] },
] as const;

export const knowledge = [
  { slug: "schemes-eligibility", category: "Schemes & eligibility", title: "How to begin with a government scheme", summary: "A simple checklist for moving from a broad need to a relevant scheme and a clearer next step." },
  { slug: "business-compliance", category: "Business & compliance", title: "The useful order for setting up a business", summary: "Understand the decisions, registrations and documents that commonly shape an early business journey." },
  { slug: "property-rera", category: "Property & RERA", title: "Questions to ask before a property decision", summary: "A practical starting point for documentation, context and professional guidance." },
  { slug: "society-governance", category: "Society governance", title: "What visible governance looks like", summary: "Why clear records, responsibilities and communication help communities operate with trust." },
  { slug: "farmer-services", category: "Farmer & rural services", title: "Connecting rural enterprise to support", summary: "Map the people, finance and services that can help a rural idea move forward." },
  { slug: "finance-first-steps", category: "Loans & finance", title: "What to understand before seeking finance", summary: "Prepare the goal, documents and questions that make a funding conversation more useful." },
] as const;

export const intents = [["Start a business", "/services/business"], ["Grow my business", "/services/business"], ["Get a loan", "/services/finance"], ["Find government schemes", "/services/government-schemes"], ["Manage compliance", "/services/compliance"], ["Buy or sell property", "/services/property"], ["Manage my society", "/services/community"], ["Access farmer services", "/services/farmer-rural"], ["Find local services", "/services/local-services"], ["Become a partner", "/become-a-partner"]] as const;

export function getService(slug: string) { return services.find((service) => service.slug === slug); }
export function getCategory(slug: string) { return serviceCategories.find((category) => category.slug === slug); }
export function getSolution(slug: string) { return solutions.find((solution) => solution.slug === slug); }
export function getKnowledge(slug: string) { return knowledge.find((article) => article.slug === slug); }