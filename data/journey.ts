import { Building2, Landmark, Leaf, MapPinned, Users, WalletCards } from "lucide-react";

export type DocumentStatus = "required" | "may" | "depends";
export type JourneyDocument = { name: string; status: DocumentStatus };
export type RoadmapStep = { title: string; reason: string; serviceSlug?: string; effort: string; support: string; authority: string; documents: JourneyDocument[]; timing: string };
export type JourneyPath = { slug: string; title: string; summary: string; icon: typeof Building2; options: string[]; questions: DiagnosticQuestion[]; roadmap: RoadmapStep[]; relatedServices: string[]; relatedKnowledge: string[] };
export type DiagnosticQuestion = { id: string; label: string; helper?: string; options: { value: string; label: string; description?: string }[] };

export const diagnosticIntents = [
  { value: "business-start", label: "Start something new", description: "Set up a business, project or new activity", path: "business", icon: Building2 },
  { value: "business-grow", label: "Grow my business", description: "Improve, expand or formalise an existing business", path: "business", icon: Building2 },
  { value: "funding", label: "Get funding", description: "Explore finance, loans or government-backed support", path: "funding", icon: WalletCards },
  { value: "scheme", label: "Find a government scheme", description: "Understand benefits, eligibility and next steps", path: "scheme", icon: Landmark },
  { value: "property", label: "Buy, sell or develop property", description: "Get help with a property goal", path: "property", icon: MapPinned },
  { value: "society", label: "Manage my society", description: "Improve management, compliance or governance", path: "society", icon: Users },
  { value: "farmer", label: "Improve my farm or rural business", description: "Find schemes, finance and enterprise support", path: "farmer", icon: Leaf },
  { value: "other", label: "Something else", description: "Tell us what you are trying to accomplish", path: "other", icon: Landmark },
] as const;

export const journeyPaths: Record<string, JourneyPath> = {
  business: {
    slug: "business", title: "Your business path", summary: "A practical path from your current position to a stronger, more organised business.", icon: Building2,
    options: ["Start a new business", "Grow an existing business"],
    questions: [
      { id: "business-status", label: "Where are you in your business journey?", options: [{ value: "new", label: "I am starting something new" }, { value: "existing", label: "I already run a business" }] },
      { id: "business-type", label: "What kind of business is this?", helper: "Choose the closest fit for now.", options: [{ value: "manufacturing", label: "Manufacturing" }, { value: "services", label: "Services" }, { value: "trading", label: "Trading" }, { value: "food", label: "Food or agriculture" }] },
      { id: "business-location", label: "Where will the business operate?", options: [{ value: "maharashtra", label: "Maharashtra" }, { value: "gujarat", label: "Gujarat" }, { value: "other-india", label: "Another Indian state" }, { value: "not-sure", label: "I am not sure yet" }] },
      { id: "business-need", label: "What do you need most right now?", options: [{ value: "foundation", label: "Registration and setup" }, { value: "funding", label: "Funding" }, { value: "growth", label: "Growth and market access" }, { value: "compliance", label: "Compliance" }] },
    ],
    roadmap: [
      { title: "Business foundation", reason: "Your structure and essential registrations should be clear before other commitments.", serviceSlug: "business-business-setup", effort: "Share your business idea, identity details and preferred structure.", support: "Help clarify the starting route and prepare a practical checklist.", authority: "Registrars and departments decide registration outcomes.", documents: [{ name: "PAN / identity proof", status: "required" }, { name: "Address proof", status: "may" }, { name: "Business activity details", status: "required" }], timing: "Timing depends on the chosen structure, documents and relevant department." },
      { title: "Registrations and compliance", reason: "Formal registrations make later finance and operations easier to assess.", serviceSlug: "business-compliance", effort: "Provide accurate business, address and tax information.", support: "Coordinate the checklist and help organise submission-ready information.", authority: "The relevant government department verifies and approves registrations.", documents: [{ name: "Business registration", status: "may" }, { name: "GST / Udyam details", status: "depends" }, { name: "Bank details", status: "may" }], timing: "Depends on eligibility, documents and the relevant authority." },
      { title: "Funding assessment", reason: "Once the business context is clearer, suitable funding routes can be explored.", serviceSlug: "finance-business-loans", effort: "Share the requirement, purpose, projections and financial history.", support: "Help compare possible routes and prepare questions and documents.", authority: "Banks, lenders or scheme authorities make the final decision.", documents: [{ name: "Project or business plan", status: "may" }, { name: "Bank statement", status: "may" }, { name: "KYC documents", status: "required" }], timing: "No fixed timeline; depends on preparation, eligibility and lender review." },
      { title: "Ongoing growth and compliance", reason: "A business journey continues after setup or funding.", serviceSlug: "business-business-advisory", effort: "Keep records current and share changing requirements.", support: "Connect relevant advisory, certification or digital growth services.", authority: "Each provider or authority controls its own requirements.", documents: [{ name: "Current registrations", status: "may" }, { name: "Financial records", status: "depends" }], timing: "An ongoing support path shaped by your goals." },
    ],
    relatedServices: ["business-business-setup", "business-compliance", "finance-business-loans", "business-business-advisory"], relatedKnowledge: ["business-compliance", "finance-first-steps"],
  },
  funding: {
    slug: "funding", title: "Your funding path", summary: "Understand what you are funding, what may be relevant and what needs to be prepared.", icon: WalletCards,
    options: ["New business", "Business expansion", "Machinery", "Working capital", "Property", "Agriculture", "Other"],
    questions: [
      { id: "funding-purpose", label: "What are you funding?", options: ["New business", "Business expansion", "Machinery", "Working capital", "Property", "Agriculture", "Other"].map((value) => ({ value: value.toLowerCase().replace(/ /g, "-"), label: value })) },
      { id: "funding-status", label: "Is this for a new or existing activity?", options: [{ value: "new", label: "Something new" }, { value: "existing", label: "An existing business or activity" }] },
      { id: "funding-location", label: "Where will the activity take place?", options: [{ value: "maharashtra", label: "Maharashtra" }, { value: "gujarat", label: "Gujarat" }, { value: "other", label: "Another location" }, { value: "not-sure", label: "Not decided" }] },
      { id: "funding-readiness", label: "What do you have ready today?", options: [{ value: "idea", label: "An idea or requirement" }, { value: "documents", label: "Some documents and estimates" }, { value: "plan", label: "A project or business plan" }, { value: "application", label: "An application already in progress" }] },
    ],
    roadmap: [
      { title: "Clarify the funding requirement", reason: "The purpose, amount and activity shape which routes are worth exploring.", effort: "Explain the purpose, approximate amount and current position.", support: "Help structure the requirement and identify missing context.", authority: "Funding providers decide whether a route is suitable.", documents: [{ name: "Purpose and cost estimate", status: "required" }, { name: "KYC documents", status: "required" }], timing: "Timeline depends on the route, eligibility and document readiness." },
      { title: "Funding and scheme assessment", reason: "Relevant loan or scheme options can be compared after the requirement is understood.", serviceSlug: "finance-government-backed-schemes", effort: "Provide accurate financial and activity information.", support: "Eligibility discussion, checklist and facilitation support.", authority: "Banks, lenders and government authorities make the final decision.", documents: [{ name: "Business registration", status: "may" }, { name: "Bank statement", status: "may" }, { name: "Scheme-specific documents", status: "depends" }], timing: "No guaranteed timeline; depends on the relevant institution." },
      { title: "Project and documentation", reason: "Good preparation makes the next conversation more useful.", serviceSlug: "finance-funding-discovery", effort: "Review and provide the requested information.", support: "Help organise projections, project information and submission materials.", authority: "The lender or authority validates the submission.", documents: [{ name: "Project report / projections", status: "may" }, { name: "Financial records", status: "depends" }, { name: "Property or machinery documents", status: "depends" }], timing: "Depends on document completeness and review." },
      { title: "Application and next steps", reason: "The right institution or professional can take the request forward.", effort: "Submit information and respond to clarifications.", support: "Coordinate communication where appropriate.", authority: "Final approval, sanction or rejection belongs to the authority.", documents: [{ name: "Final application set", status: "depends" }], timing: "Controlled by the relevant authority, not Sahaciety." },
    ],
    relatedServices: ["finance-business-loans", "finance-government-backed-schemes", "finance-funding-discovery", "business-business-setup"], relatedKnowledge: ["finance-first-steps", "schemes-eligibility"],
  },
  property: {
    slug: "property", title: "Your property path", summary: "Work out whether you need search, finance, verification, documentation or transaction support.", icon: MapPinned,
    options: ["Buy", "Sell", "Develop", "Invest"],
    questions: [
      { id: "property-goal", label: "What are you trying to do?", options: ["Buy", "Sell", "Develop", "Invest"].map((value) => ({ value: value.toLowerCase(), label: value })) },
      { id: "property-type", label: "What kind of property is involved?", options: [{ value: "residential", label: "Residential" }, { value: "commercial", label: "Commercial" }, { value: "land", label: "Land" }, { value: "not-sure", label: "Not sure yet" }] },
      { id: "property-location", label: "Where is the property or requirement?", options: [{ value: "maharashtra", label: "Maharashtra" }, { value: "gujarat", label: "Gujarat" }, { value: "other", label: "Another location" }, { value: "not-sure", label: "Not decided" }] },
      { id: "property-finance", label: "Will finance be part of the decision?", options: [{ value: "yes", label: "Yes, I may need finance" }, { value: "no", label: "No finance needed" }, { value: "unsure", label: "I am not sure" }] },
    ],
    roadmap: [
      { title: "Define the property requirement", reason: "The transaction type, asset and location determine the right next steps.", serviceSlug: "property-property-advisory", effort: "Share your goal, preferred location and available context.", support: "Help organise the search or advisory requirement.", authority: "Owners, agents, registrars and authorities control the underlying property facts.", documents: [{ name: "Identity proof", status: "required" }, { name: "Property details", status: "may" }], timing: "Depends on the property, market and people involved." },
      { title: "Finance, verification and due diligence", reason: "A property decision needs financial and factual clarity before commitment.", serviceSlug: "finance-home-property-finance", effort: "Review documents, affordability and questions carefully.", support: "Connect relevant finance, documentation and professional support.", authority: "Lenders and qualified professionals determine their own findings.", documents: [{ name: "Income / bank documents", status: "may" }, { name: "Title and property records", status: "depends" }], timing: "Depends on documents, property records and professional review." },
      { title: "Transaction and documentation", reason: "The final transaction needs the right documents and responsible parties.", serviceSlug: "property-property-documentation", effort: "Provide information and review documents before signing.", support: "Coordinate the relevant service connections.", authority: "Registrars, owners, lenders and professionals control approval and execution.", documents: [{ name: "Agreement and property documents", status: "depends" }, { name: "Registration documents", status: "depends" }], timing: "Depends on the transaction and authority processes." },
      { title: "Post-purchase or ongoing support", reason: "Property needs can continue after a transaction or development decision.", serviceSlug: "property-development-advisory", effort: "Share the next requirement as it becomes clear.", support: "Connect associated services where relevant.", authority: "The relevant provider or authority decides the outcome.", documents: [{ name: "Updated property records", status: "depends" }], timing: "A case-dependent ongoing path." },
    ],
    relatedServices: ["property-property-advisory", "finance-home-property-finance", "property-property-documentation", "property-development-advisory"], relatedKnowledge: ["property-rera", "finance-first-steps"],
  },
  society: {
    slug: "society", title: "Your society path", summary: "Move from a management problem to clearer governance, compliance and service support.", icon: Users,
    options: ["Governance", "Compliance", "Documentation", "Vendors and services", "Redevelopment"],
    questions: [
      { id: "society-type", label: "What kind of community are you representing?", options: [{ value: "housing", label: "Housing society" }, { value: "community", label: "Community or association" }, { value: "institution", label: "Institution or organisation" }] },
      { id: "society-need", label: "What are you trying to improve?", options: [{ value: "governance", label: "Management and governance" }, { value: "compliance", label: "Compliance and records" }, { value: "vendors", label: "Vendors and services" }, { value: "redevelopment", label: "Redevelopment or property support" }] },
      { id: "society-size", label: "How large is the community?", options: [{ value: "small", label: "Up to 50 units or members" }, { value: "medium", label: "51 to 200" }, { value: "large", label: "More than 200" }, { value: "unknown", label: "Not sure" }] },
      { id: "society-arrangement", label: "How is it managed today?", options: [{ value: "committee", label: "By a committee" }, { value: "manager", label: "By a manager or agency" }, { value: "mixed", label: "A mix of people and providers" }, { value: "unclear", label: "It is not working clearly" }] },
    ],
    roadmap: [
      { title: "Understand the current position", reason: "A useful intervention starts with responsibilities, records and the actual problem.", serviceSlug: "community-society-management", effort: "Share the current arrangement, goals and available records.", support: "Help structure the issue and identify the right service area.", authority: "The society or governing body makes its own decisions.", documents: [{ name: "Society records", status: "may" }, { name: "Member / unit information", status: "depends" }], timing: "Depends on the scope and availability of records." },
      { title: "Governance and compliance", reason: "Clear roles and current records create a stronger base for improvement.", serviceSlug: "community-governance", effort: "Identify owners, decisions and missing information.", support: "Connect governance, documentation and compliance support.", authority: "The society, registrar or other authority decides formal matters.", documents: [{ name: "Registration and governing documents", status: "depends" }, { name: "Minutes / resolutions", status: "may" }], timing: "Case-dependent and shaped by the responsible authority." },
      { title: "Services and vendors", reason: "Once needs are clear, the right service providers can be evaluated.", serviceSlug: "community-vendor-service-coordination", effort: "Define the service requirement and review proposals.", support: "Help coordinate relevant vendor or service conversations.", authority: "The society selects providers and approves contracts.", documents: [{ name: "Requirement brief", status: "required" }, { name: "Existing contracts", status: "may" }], timing: "Depends on the requirement and selection process." },
    ],
    relatedServices: ["community-society-management", "community-governance", "community-compliance", "community-vendor-service-coordination"], relatedKnowledge: ["society-governance"],
  },
  farmer: {
    slug: "farmer", title: "Your farmer and rural enterprise path", summary: "Connect your activity with relevant schemes, finance, services and enterprise support.", icon: Leaf,
    options: ["Crop or farm activity", "Agri service", "Rural enterprise", "Finance", "Scheme discovery"],
    questions: [
      { id: "farmer-activity", label: "What best describes your activity?", options: [{ value: "farm", label: "Farm or crop activity" }, { value: "livestock", label: "Livestock or allied activity" }, { value: "processing", label: "Food or agri processing" }, { value: "service", label: "Rural service or enterprise" }] },
      { id: "farmer-stage", label: "Is this a new or existing activity?", options: [{ value: "new", label: "New activity" }, { value: "existing", label: "Existing activity" }, { value: "improve", label: "Existing activity I want to improve" }] },
      { id: "farmer-location", label: "Where is the activity located?", options: [{ value: "maharashtra", label: "Maharashtra" }, { value: "gujarat", label: "Gujarat" }, { value: "other", label: "Another location" }, { value: "not-sure", label: "Not decided" }] },
      { id: "farmer-need", label: "What support are you looking for?", options: [{ value: "scheme", label: "A scheme or benefit" }, { value: "finance", label: "Finance" }, { value: "service", label: "An agricultural service" }, { value: "enterprise", label: "Enterprise guidance" }] },
    ],
    roadmap: [
      { title: "Assess the activity", reason: "The activity, stage and location shape the support that may be relevant.", serviceSlug: "farmer-rural-agricultural-services", effort: "Share the activity, location and current requirement.", support: "Help organise the profile and identify possible service paths.", authority: "Scheme departments, lenders and providers decide eligibility and outcomes.", documents: [{ name: "Identity and location proof", status: "required" }, { name: "Land or activity records", status: "depends" }], timing: "Depends on the activity and relevant department." },
      { title: "Scheme and finance discovery", reason: "Relevant schemes or finance should be considered against the actual activity.", serviceSlug: "farmer-rural-farmer-schemes", effort: "Provide accurate activity and financial information.", support: "Help compare the next questions and documentation.", authority: "Government departments and financial institutions make final decisions.", documents: [{ name: "Bank details", status: "may" }, { name: "Scheme-specific records", status: "depends" }], timing: "No fixed timeline; depends on eligibility and authority review." },
      { title: "Enterprise and local support", reason: "Long-term value often depends on services, market context and local capability.", serviceSlug: "farmer-rural-rural-enterprise", effort: "Review options and choose the path that fits.", support: "Connect relevant rural enterprise and local services.", authority: "The selected provider or institution controls delivery.", documents: [{ name: "Business or activity plan", status: "may" }], timing: "A case-dependent path that can continue as the activity grows." },
    ],
    relatedServices: ["farmer-rural-farmer-schemes", "farmer-rural-agricultural-services", "farmer-rural-rural-enterprise", "farmer-rural-finance-facilitation"], relatedKnowledge: ["farmer-services", "schemes-eligibility"],
  },
  scheme: {
    slug: "scheme", title: "Your scheme discovery path", summary: "Start with your situation, then understand which benefits or schemes may be worth exploring.", icon: Landmark,
    options: ["Personal benefit", "Business support", "Farmer support", "Housing or community", "Other"],
    questions: [
      { id: "scheme-area", label: "What kind of support are you looking for?", options: [{ value: "personal", label: "A personal or family benefit" }, { value: "business", label: "Business support" }, { value: "farmer", label: "Farmer or rural support" }, { value: "other", label: "Something else" }] },
      { id: "scheme-location", label: "Where are you located?", options: [{ value: "maharashtra", label: "Maharashtra" }, { value: "gujarat", label: "Gujarat" }, { value: "other", label: "Another location" }, { value: "not-sure", label: "Not sure" }] },
      { id: "scheme-stage", label: "What do you have ready?", options: [{ value: "question", label: "Only a question" }, { value: "documents", label: "Some documents" }, { value: "application", label: "An application or reference number" }] },
    ],
    roadmap: [
      { title: "Clarify your situation", reason: "Scheme relevance depends on who you are, where you are and what you need.", effort: "Share accurate personal, business or activity information.", support: "Help frame the question and identify the relevant category.", authority: "The scheme department publishes and interprets eligibility.", documents: [{ name: "Identity proof", status: "required" }, { name: "Income, activity or category records", status: "depends" }], timing: "Depends on scheme windows, eligibility and documentation." },
      { title: "Eligibility and document check", reason: "A checklist helps separate a promising route from an unsuitable one.", serviceSlug: "government-schemes-eligibility-guidance", effort: "Review and provide the requested documents.", support: "Guide the checklist and assist with preparation.", authority: "The relevant department confirms eligibility.", documents: [{ name: "Scheme-specific application", status: "depends" }, { name: "Supporting records", status: "depends" }], timing: "Depends on the scheme and authority." },
      { title: "Application assistance", reason: "Once the route is understood, the next step is a prepared application.", serviceSlug: "government-schemes-application-assistance", effort: "Check the final information before submission.", support: "Help coordinate the application pathway where appropriate.", authority: "The government department decides approval or benefit release.", documents: [{ name: "Final application set", status: "depends" }], timing: "Controlled by the relevant scheme authority." },
    ],
    relatedServices: ["government-schemes-scheme-discovery", "government-schemes-eligibility-guidance", "government-schemes-application-assistance"], relatedKnowledge: ["schemes-eligibility"],
  },
  other: {
    slug: "other", title: "A starting point for your requirement", summary: "Tell Sahaciety what you are trying to accomplish and we will help shape the next useful question.", icon: Landmark, options: ["I need guidance"], questions: [{ id: "other-context", label: "Which area feels closest to your need?", options: [{ value: "business", label: "Business" }, { value: "finance", label: "Finance" }, { value: "property", label: "Property" }, { value: "community", label: "Society or community" }, { value: "personal", label: "Personal or family service" }] }], roadmap: [{ title: "Understand the requirement", reason: "The right service becomes clearer after the goal and context are understood.", effort: "Describe what you are trying to accomplish.", support: "Help frame the next question and connect a relevant starting point.", authority: "The eventual provider or authority decides the outcome.", documents: [{ name: "Context and identity information", status: "may" }], timing: "Timeline depends on the requirement once it is defined." }], relatedServices: [], relatedKnowledge: [],
  },
};

export function getJourneyPath(path: string) { return journeyPaths[path] ?? journeyPaths.other; }

export function getServiceJourney(serviceSlug: string) {
  const path = Object.values(journeyPaths).find((candidate) => candidate.relatedServices.includes(serviceSlug) || candidate.roadmap.some((step) => step.serviceSlug === serviceSlug));
  return path ?? journeyPaths.other;
}