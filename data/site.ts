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

export const contactPhoneDisplay = "+91 84839 16755";
export const whatsappNumber = "918483916755";
export function buildWhatsAppLink(message: string) { return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`; }
export function buildWhatsAppShareLink(message: string) { return `https://wa.me/?text=${encodeURIComponent(message)}`; }

export const ecosystem = [
  { title: "Citizens & Families", summary: "Benefits, finance, documentation, property and essential services.", icon: Users, href: "/solutions/individual" },
  { title: "Businesses & Entrepreneurs", summary: "Setup, funding, compliance, certifications, growth and advisory.", icon: Building2, href: "/solutions/business" },
  { title: "Farmers & Rural Enterprise", summary: "Schemes, finance, agri services and local enterprise support.", icon: Leaf, href: "/services/farmer-rural" },
  { title: "Societies & Communities", summary: "Management, governance, compliance, vendors and member services.", icon: Landmark, href: "/solutions/society" },
  { title: "Governance Ecosystem", summary: "Structured services, participation, centres and accountable execution.", icon: ShieldCheck, href: "/solutions/enterprise" },
  { title: "Real Estate", summary: "Property, development, RERA support, documentation and finance connection.", icon: MapPinned, href: "/services/property" },
] as const;

export const trustPrinciples = [
  ["Governance-led", "Clear ownership and responsible pathways.", "सुशासन-आधारित", "स्पष्ट जबाबदारी आणि जबाबदार मार्ग."],
  ["Transparent", "Understand what happens next.", "पारदर्शक", "पुढे काय होणार आहे ते समजून घ्या."],
  ["Verified ecosystem", "Relevant people and services, connected carefully.", "पडताळणी केलेली परिसंस्था", "योग्य लोक आणि सेवा, काळजीपूर्वक जोडलेल्या."],
  ["End-to-end execution", "Move from intent to completion.", "सुरुवातीपासून शेवटपर्यंत अंमलबजावणी", "इच्छेपासून पूर्णत्वापर्यंत वाटचाल."],
  ["Local presence", "Human context where it matters.", "स्थानिक उपस्थिती", "गरज तिथे माणुसकीचा दृष्टिकोन."],
  ["Technology enabled", "A simpler experience backed by a stronger runtime.", "तंत्रज्ञान-सक्षम", "सशक्त यंत्रणेच्या आधारे सोपा अनुभव."],
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

export const categoryStages: Record<string, { title: string; items: string[] }[]> = {
  business: [{ title: "Starting", items: ["Business setup", "Udyam", "GST", "Registrations"] }, { title: "Growing", items: ["Business advisory", "Digital growth", "Certifications"] }, { title: "Funding", items: ["Loans", "Government schemes", "Project finance"] }, { title: "Compliance", items: ["GST", "Licences", "Renewals"] }],
  finance: [{ title: "Understand", items: ["Funding discovery", "Finance options", "Eligibility guidance"] }, { title: "Prepare", items: ["Business information", "Project report", "Bank documentation"] }, { title: "Apply", items: ["Loans", "Government schemes", "Financial facilitation"] }],
  property: [{ title: "Discover", items: ["Property advisory", "Search", "Buying and selling"] }, { title: "Verify", items: ["Due diligence", "Documentation", "RERA-related support"] }, { title: "Complete", items: ["Finance", "Transaction support", "Post-purchase services"] }],
  community: [{ title: "Organise", items: ["Society management", "Documentation", "Member services"] }, { title: "Govern", items: ["Governance", "Compliance", "Accounts"] }, { title: "Improve", items: ["Vendor services", "Redevelopment", "Ongoing support"] }],
  "farmer-rural": [{ title: "Assess", items: ["Farmer schemes", "Agri services", "Activity context"] }, { title: "Fund", items: ["Finance assistance", "Scheme discovery", "Documentation"] }, { title: "Grow", items: ["Rural enterprise", "Local services", "Market support"] }],
  "government-schemes": [{ title: "Discover", items: ["Scheme discovery", "Eligibility guidance"] }, { title: "Prepare", items: ["Documentation support", "Application assistance"] }, { title: "Follow through", items: ["Status questions", "Next steps", "Related services"] }],
};

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
  { slug: "schemes-eligibility", category: "Schemes & eligibility", categoryMr: "योजना व पात्रता", title: "How to begin with a government scheme", titleMr: "सरकारी योजनेची सुरुवात कशी करावी", summary: "A simple checklist for moving from a broad need to a relevant scheme and a clearer next step.", summaryMr: "सर्वसाधारण गरजेपासून योग्य योजनेपर्यंत आणि स्पष्ट पुढील पावलापर्यंत पोहोचण्यासाठी सोपी यादी." },
  { slug: "business-compliance", category: "Business & compliance", categoryMr: "व्यवसाय व अनुपालन", title: "The useful order for setting up a business", titleMr: "व्यवसाय सुरू करण्याचा उपयुक्त क्रम", summary: "Understand the decisions, registrations and documents that commonly shape an early business journey.", summaryMr: "सुरुवातीच्या व्यवसाय प्रवासाला आकार देणारे निर्णय, नोंदणी आणि कागदपत्रे समजून घ्या." },
  { slug: "property-rera", category: "Property & RERA", categoryMr: "मालमत्ता व रेरा", title: "Questions to ask before a property decision", titleMr: "मालमत्तेचा निर्णय घेण्यापूर्वी विचारायचे प्रश्न", summary: "A practical starting point for documentation, context and professional guidance.", summaryMr: "कागदपत्रे, पार्श्वभूमी आणि व्यावसायिक मार्गदर्शनासाठी एक व्यावहारिक सुरुवात." },
  { slug: "society-governance", category: "Society governance", categoryMr: "सोसायटी प्रशासन", title: "What visible governance looks like", titleMr: "दृश्यमान प्रशासन म्हणजे काय", summary: "Why clear records, responsibilities and communication help communities operate with trust." , summaryMr: "स्पष्ट नोंदी, जबाबदाऱ्या आणि संवाद समुदायांना विश्वासाने काम करण्यास कशी मदत करतात."},
  { slug: "farmer-services", category: "Farmer & rural services", categoryMr: "शेतकरी व ग्रामीण सेवा", title: "Connecting rural enterprise to support", titleMr: "ग्रामीण उद्योगाला सहाय्याशी जोडणे", summary: "Map the people, finance and services that can help a rural idea move forward.", summaryMr: "ग्रामीण कल्पनेला पुढे नेण्यास मदत करणारे लोक, वित्त आणि सेवा शोधा." },
  { slug: "finance-first-steps", category: "Loans & finance", categoryMr: "कर्ज व वित्त", title: "What to understand before seeking finance", titleMr: "वित्त सहाय्य घेण्यापूर्वी काय समजून घ्यावे", summary: "Prepare the goal, documents and questions that make a funding conversation more useful.", summaryMr: "निधीबाबतची चर्चा अधिक उपयुक्त बनवणारे ध्येय, कागदपत्रे आणि प्रश्न तयार करा." },
] as const;

export const intents = [
  ["Start a business", "/services/business", "व्यवसाय सुरू करा"], ["Grow my business", "/services/business", "माझा व्यवसाय वाढवा"], ["Get a loan", "/services/finance", "कर्ज मिळवा"], ["Find government schemes", "/services/government-schemes", "सरकारी योजना शोधा"], ["Manage compliance", "/services/compliance", "अनुपालन सांभाळा"], ["Buy or sell property", "/services/property", "मालमत्ता खरेदी किंवा विक्री करा"], ["Manage my society", "/services/community", "माझी सोसायटी सांभाळा"], ["Access farmer services", "/services/farmer-rural", "शेतकरी सेवांचा लाभ घ्या"], ["Find local services", "/services/local-services", "स्थानिक सेवा शोधा"], ["Become a partner", "/become-a-partner", "भागीदार व्हा"],
] as const;

export const helpCards = [
  { title: "Funding", summary: "Loans, schemes & financial facilitation", titleMr: "निधी", summaryMr: "कर्ज, योजना आणि आर्थिक सहाय्य", icon: WalletCards, href: "/services/finance", path: "funding" },
  { title: "Business", summary: "Registration, compliance & business growth", titleMr: "व्यवसाय", summaryMr: "नोंदणी, अनुपालन आणि व्यवसाय वाढ", icon: Building2, href: "/services/business", path: "business" },
  { title: "Government Schemes", summary: "Benefits, eligibility & application assistance", titleMr: "सरकारी योजना", summaryMr: "लाभ, पात्रता आणि अर्ज सहाय्य", icon: Landmark, href: "/services/government-schemes", path: "scheme" },
  { title: "Property", summary: "Buy, sell, develop & property advisory", titleMr: "मालमत्ता", summaryMr: "खरेदी, विक्री, विकास आणि सल्ला", icon: MapPinned, href: "/services/property", path: "property" },
  { title: "Society", summary: "Management, governance & compliance", titleMr: "सोसायटी", summaryMr: "व्यवस्थापन, प्रशासन आणि अनुपालन", icon: Users, href: "/services/community", path: "society" },
  { title: "Farmer Services", summary: "Schemes, finance & rural enterprise", titleMr: "शेतकरी सेवा", summaryMr: "योजना, वित्त आणि ग्रामीण उद्योग", icon: Leaf, href: "/services/farmer-rural", path: "farmer" },
] as const;

export const homepageServices = [
  { title: "Business", summary: "Build and grow with the right support.", titleMr: "व्यवसाय", summaryMr: "योग्य सहाय्याने उभारणी आणि वाढ करा.", items: ["Business Registration", "MSME Services", "GST & Compliance", "Certifications", "Business Advisory"], itemsMr: ["व्यवसाय नोंदणी", "एमएसएमई सेवा", "जीएसटी व अनुपालन", "प्रमाणपत्रे", "व्यवसाय सल्ला"], href: "/services/business", icon: Building2 },
  { title: "Finance", summary: "Understand funding and move forward.", titleMr: "वित्त", summaryMr: "निधी समजून घ्या आणि पुढे जा.", items: ["Business Loans", "Home / Property Finance", "Government Schemes", "Funding Assistance"], itemsMr: ["व्यवसाय कर्ज", "गृह / मालमत्ता वित्त", "सरकारी योजना", "निधी सहाय्य"], href: "/services/finance", icon: WalletCards },
  { title: "Property", summary: "Make property decisions with clarity.", titleMr: "मालमत्ता", summaryMr: "स्पष्टतेने मालमत्तेचे निर्णय घ्या.", items: ["Property Advisory", "Buying & Selling", "Real Estate Development", "RERA-related Services"], itemsMr: ["मालमत्ता सल्ला", "खरेदी व विक्री", "रिअल इस्टेट विकास", "रेरा-संबंधित सेवा"], href: "/services/property", icon: MapPinned },
  { title: "Society", summary: "Support better-run communities.", titleMr: "सोसायटी", summaryMr: "अधिक चांगल्या चालणाऱ्या समुदायांसाठी सहाय्य.", items: ["Society Management", "Governance", "Compliance", "Documentation", "Vendor Services"], itemsMr: ["सोसायटी व्यवस्थापन", "प्रशासन", "अनुपालन", "कागदपत्रे", "वेंडर सेवा"], href: "/services/community", icon: Users },
  { title: "Farmer & Rural", summary: "Connect rural needs with useful support.", titleMr: "शेतकरी व ग्रामीण", summaryMr: "ग्रामीण गरजांना उपयुक्त सहाय्याशी जोडा.", items: ["Farmer Schemes", "Agri Services", "Rural Enterprise", "Finance Assistance"], itemsMr: ["शेतकरी योजना", "कृषी सेवा", "ग्रामीण उद्योग", "वित्त सहाय्य"], href: "/services/farmer-rural", icon: Leaf },
  { title: "Government & Compliance", summary: "Get help with essential formalities.", titleMr: "सरकार व अनुपालन", summaryMr: "आवश्यक औपचारिकतांसाठी मदत मिळवा.", items: ["Registrations", "Certifications", "Government Services", "Documentation"], itemsMr: ["नोंदणी", "प्रमाणपत्रे", "सरकारी सेवा", "कागदपत्रे"], href: "/services/compliance", icon: FileCheck2 },
] as const;

export const audiences = [
  ["Individuals & Families", "Everyday services, finance, schemes and property.", "व्यक्ती व कुटुंबे", "दैनंदिन सेवा, वित्त, योजना आणि मालमत्ता."],
  ["Businesses & Entrepreneurs", "Setup, growth, funding and compliance.", "व्यवसाय व उद्योजक", "सुरुवात, वाढ, निधी आणि अनुपालन."],
  ["Farmers & Rural Enterprises", "Schemes, finance and local enterprise support.", "शेतकरी व ग्रामीण उद्योग", "योजना, वित्त आणि स्थानिक उद्योग सहाय्य."],
  ["Housing Societies & Communities", "Management, governance and member services.", "गृहनिर्माण सोसायट्या व समुदाय", "व्यवस्थापन, प्रशासन आणि सदस्य सेवा."],
  ["Institutions & Organisations", "Connected services for wider responsibilities.", "संस्था व संघटना", "व्यापक जबाबदाऱ्यांसाठी जोडलेल्या सेवा."],
] as const;

export const helpSteps = [
  ["Tell us what you need", "Start with your goal, in simple words.", "तुम्हाला काय हवे ते सांगा", "सोप्या शब्दांत तुमच्या ध्येयाने सुरुवात करा."],
  ["Find the right service", "See the path that fits your situation.", "योग्य सेवा शोधा", "तुमच्या परिस्थितीला साजेसा मार्ग पहा."],
  ["Connect with the right people", "Get the guidance and support you need.", "योग्य लोकांशी जोडले जा", "तुम्हाला आवश्यक मार्गदर्शन आणि सहाय्य मिळवा."],
  ["Get it done", "Move forward with a clear next step.", "पूर्ण करा", "स्पष्ट पुढील पावलासह वाटचाल करा."],
] as const;

export const homepageJourneys = [
  { title: "Business", titleMr: "व्यवसाय", stages: ["Start", "Register", "Fund", "Comply", "Grow"], stagesMr: ["सुरुवात", "नोंदणी", "निधी", "अनुपालन", "वाढ"], href: "/diagnostic?path=business" },
  { title: "Property", titleMr: "मालमत्ता", stages: ["Discover", "Finance", "Verify", "Transact", "Manage"], stagesMr: ["शोध", "वित्त", "पडताळणी", "व्यवहार", "व्यवस्थापन"], href: "/diagnostic?path=property" },
  { title: "Society", titleMr: "सोसायटी", stages: ["Organise", "Govern", "Comply", "Manage", "Improve"], stagesMr: ["संघटन", "प्रशासन", "अनुपालन", "व्यवस्थापन", "सुधारणा"], href: "/diagnostic?path=society" },
  { title: "Farmer & rural", titleMr: "शेतकरी व ग्रामीण", stages: ["Assess", "Scheme", "Finance", "Enterprise", "Grow"], stagesMr: ["मूल्यांकन", "योजना", "वित्त", "उद्योग", "वाढ"], href: "/diagnostic?path=farmer" },
] as const;

export const whySahaciety = [
  ["Governance First", "Transparent and structured service delivery.", "प्रशासन प्रथम", "पारदर्शक आणि सुसंरचित सेवा वितरण."],
  ["One Ecosystem", "Multiple services through one trusted place.", "एक परिसंस्था", "एका विश्वासार्ह ठिकाणाहून अनेक सेवा."],
  ["Human Assistance", "Technology where it helps. People where they matter.", "मानवी सहाय्य", "जिथे उपयुक्त तिथे तंत्रज्ञान, जिथे गरज तिथे माणसे."],
  ["Verified Connections", "Connect with relevant professionals and service providers.", "पडताळणी केलेले संबंध", "योग्य व्यावसायिक आणि सेवा पुरवठादारांशी जोडले जा."],
  ["Local Presence", "Services can extend through local partners and centres.", "स्थानिक उपस्थिती", "स्थानिक भागीदार आणि केंद्रांद्वारे सेवांचा विस्तार."],
  ["End-to-End Support", "From understanding the requirement to completion.", "सुरुवातीपासून शेवटपर्यंत सहाय्य", "गरज समजून घेण्यापासून पूर्णत्वापर्यंत."],
] as const;

export const participationPaths = [
  ["Member", "Use services and stay connected to the ecosystem.", Users, "सदस्य", "सेवांचा वापर करा आणि परिसंस्थेशी जोडलेले रहा."],
  ["Partner", "Bring expertise and help people move forward.", Handshake, "भागीदार", "कौशल्य आणा आणि लोकांना पुढे जाण्यास मदत करा."],
  ["Centre", "Extend useful assistance into local communities.", Landmark, "केंद्र", "स्थानिक समुदायांपर्यंत उपयुक्त सहाय्य पोहोचवा."],
  ["Service Provider", "Offer trusted capability where it is needed.", Handshake, "सेवा पुरवठादार", "जिथे गरज आहे तिथे विश्वासार्ह क्षमता द्या."],
] as const;

export function getService(slug: string) { return services.find((service) => service.slug === slug); }
export function getCategory(slug: string) { return serviceCategories.find((category) => category.slug === slug); }
export function getSolution(slug: string) { return solutions.find((solution) => solution.slug === slug); }
export function getKnowledge(slug: string) { return knowledge.find((article) => article.slug === slug); }