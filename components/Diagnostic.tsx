"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Clock3, FileText, Lock, MessageCircle, Printer, RotateCcw, Share2, ShieldCheck } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { getJourneyPath, diagnosticIntents, JourneyPath } from "../data/journey";
import { buildWhatsAppLink, buildWhatsAppShareLink, knowledge, services } from "../data/site";
import { schemeCategoryTitles, schemeCategoryTitlesMr, schemesForPath } from "../data/schemes";
import { Bi, BiInline } from "./Bilingual";

const categoryPalette: Record<string, string> = { Business: "#b8872e", Finance: "#2f776d", "Real Estate": "#5b6fd9", "Society & Community": "#a0522d", "Farmer & Rural": "#3f8f4f", "Government & Schemes": "#8452c9", "Registrations & Compliance": "#c2574a", "Community & Local Services": "#3b8fa3", Participation: "#946c1f", "Planning & context": "#8a94a3" };
function categoryFor(step: JourneyPath["roadmap"][number]) { const service = step.serviceSlug ? services.find((candidate) => candidate.slug === step.serviceSlug) : null; return service?.category ?? "Planning & context"; }
function colorFor(category: string) { return categoryPalette[category] ?? "#8a94a3"; }

const labels: Record<string, string> = { new: "Something new", existing: "An existing activity", manufacturing: "Manufacturing", services: "Services", trading: "Trading", food: "Food or agriculture", maharashtra: "Maharashtra", gujarat: "Gujarat", funding: "Funding", foundation: "Registration and setup", growth: "Growth and market access", compliance: "Compliance", plan: "A project or business plan", documents: "Some documents and estimates", application: "An application already in progress" };

export default function Diagnostic({ initialPath = "" }: { initialPath?: string }) {
  const [pathKey, setPathKey] = useState(initialPath);
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [complete, setComplete] = useState(false);
  const path = pathKey ? getJourneyPath(pathKey) : null;
  const totalSteps = path ? path.questions.length + 1 : 1;
  const currentStep = questionIndex + 2;
  const answerSummary = useMemo(() => Object.entries(answers).filter(([, value]) => value).map(([key, value]) => ({ key, value: labels[value] ?? value })), [answers]);

  useEffect(() => {
    const queryPath = new URLSearchParams(window.location.search).get("path");
    if (queryPath && !pathKey) setPathKey(queryPath);
  }, [pathKey]);

  function chooseIntent(nextPath: string) {
    setPathKey(nextPath);
    setQuestionIndex(-1);
    setAnswers({});
    setComplete(false);
  }

  function chooseAnswer(value: string) {
    if (!path) return;
    const question = path.questions[questionIndex];
    setAnswers((current) => ({ ...current, [question.id]: value }));
    if (questionIndex + 1 >= path.questions.length) setComplete(true);
    else setQuestionIndex((current) => current + 1);
  }

  function startQuestions() { setQuestionIndex(0); }
  function reset() { setPathKey(""); setQuestionIndex(-1); setAnswers({}); setComplete(false); }

  if (!pathKey || !path) return <section className="diagnostic-shell"><div className="container diagnostic-container"><DiagnosticIntro /><div className="diagnostic-intents">{diagnosticIntents.map(({ value, label, labelMr, description, descriptionMr, icon: Icon, path: nextPath }) => <button className="diagnostic-intent" key={value} onClick={() => chooseIntent(nextPath)}><span className="icon-tile"><Icon size={22} /></span><span><strong><Bi en={label} mr={labelMr} /></strong><small><Bi en={description} mr={descriptionMr} /></small></span><ArrowRight size={17} /></button>)}</div></div></section>;
  if (complete) return <DiagnosticResult path={path} answers={answerSummary} onReset={reset} />;

  const question = path.questions[questionIndex]!;
  return <section className="diagnostic-shell"><div className="container diagnostic-container"><button className="back-link" onClick={questionIndex < 0 ? reset : () => setQuestionIndex((current) => current - 1)}><ArrowLeft size={16} /> <BiInline en="Back" mr="मागे" /></button><div className="diagnostic-progress"><span>Step {questionIndex < 0 ? 1 : currentStep} of {totalSteps} <span className="mr-inline" lang="mr">· पायरी {questionIndex < 0 ? 1 : currentStep} पैकी {totalSteps}</span></span><div><i style={{ width: `${((questionIndex + 1) / totalSteps) * 100}%` }} /></div></div>{questionIndex < 0 ? <div className="question-card"><p className="eyebrow"><Bi en={path.title} mr={path.titleMr} /></p><h2><Bi en="Let&apos;s understand where you are starting." mr="चला, तुम्ही कुठून सुरुवात करत आहात हे समजून घेऊया." /></h2><p><Bi en={path.summary} mr={path.summaryMr} /></p><button className="button button-dark" onClick={startQuestions}><BiInline en="Start with a few questions" mr="काही प्रश्नांसह सुरुवात करा" /> <ArrowRight size={17} /></button></div> : <div className="question-card"><p className="eyebrow">Question {currentStep} <span className="mr-inline" lang="mr">· प्रश्न {currentStep}</span></p><h2><Bi en={question.label} mr={question.labelMr} /></h2>{question.helper && <p><Bi en={question.helper} mr={question.helperMr ?? ""} /></p>}<div className="answer-options">{question.options.map((option) => <button className="answer-option" key={option.value} onClick={() => chooseAnswer(option.value)}><span><strong><Bi en={option.label} mr={option.labelMr} /></strong>{option.description && <small>{option.description}</small>}</span><ArrowRight size={17} /></button>)}</div></div>}</div></section>;
}

function DiagnosticIntro() { return <div className="diagnostic-intro"><p className="eyebrow"><Bi en="Find your path" mr="तुमचा मार्ग शोधा" /></p><h1><Bi en="What are you trying to accomplish?" mr="तुम्हाला काय साध्य करायचे आहे?" /></h1><p><Bi en="Choose the closest goal. We&apos;ll ask only what helps us show you a useful next step." mr="सर्वात जवळचे ध्येय निवडा. आम्ही फक्त तेच प्रश्न विचारू जे तुम्हाला उपयुक्त पुढील पाऊल दाखवण्यास मदत करतील." /></p></div>; }

function DiagnosticResult({ path, answers, onReset }: { path: JourneyPath; answers: { key: string; value: string }[]; onReset: () => void }) {
  const recommended = path.relatedServices.map((slug) => services.find((service) => service.slug === slug)).filter(Boolean);
  const relatedArticles = path.relatedKnowledge.map((slug) => knowledge.find((article) => article.slug === slug)).filter(Boolean);
  const matchedSchemes = schemesForPath(path.slug, 3);
  return <section className="roadmap-shell"><div className="container roadmap-container">
    <div className="roadmap-top"><div><p className="eyebrow"><Bi en="Your Sahaciety Path" mr="तुमचा साहासोसायटी मार्ग" /></p><h1><Bi en={path.title} mr={path.titleMr} /></h1><p><Bi en={path.summary} mr={path.summaryMr} /></p></div><button className="back-link" onClick={onReset}><RotateCcw size={16} /> <BiInline en="Start again" mr="पुन्हा सुरू करा" /></button></div>
    <div className="profile-strip"><div><span>Your goal</span><strong>{path.title.replace("Your ", "")}</strong></div>{answers.slice(0, 3).map(({ key, value }) => <div key={key}><span>{key.replace(/^[^-]+-/, "").replace(/-/g, " ")}</span><strong>{value}</strong></div>)}</div>
    <div className="roadmap-heading"><div><p className="eyebrow"><Bi en="Recommended roadmap" mr="शिफारस केलेला रोडमॅप" /></p><h2><Bi en="Here is what may need to happen next." mr="पुढे काय होण्याची शक्यता आहे ते येथे आहे." /></h2></div><span className="roadmap-disclaimer"><ShieldCheck size={16} /> <BiInline en="Guidance, not a guarantee" mr="मार्गदर्शन, हमी नाही" /></span></div>
    <MilestoneSummary path={path} />
    <div className="roadmap-list">{path.roadmap.map((step, index) => <RoadmapStepCard step={step} index={index} key={step.title} />)}</div>
    {matchedSchemes.length > 0 && <section className="recommended-section"><div><p className="eyebrow"><Bi en="Schemes that may be relevant" mr="संबंधित असू शकणाऱ्या योजना" /></p><h2><Bi en="Worth checking for this path" mr="या मार्गासाठी तपासण्यासारखे" /></h2></div><div className="scheme-match-grid">{matchedSchemes.map((scheme) => <Link href={`/schemes/${scheme.slug}`} className="scheme-match-card" key={scheme.slug}><span className="scheme-card-category"><Bi en={schemeCategoryTitles[scheme.category] ?? scheme.category} mr={schemeCategoryTitlesMr[scheme.category] ?? ""} /></span><strong><Bi en={scheme.title} mr={scheme.titleMr} /></strong><span className="scheme-tagline"><Bi en={scheme.tagline} mr={scheme.taglineMr} /></span><span className="text-link"><BiInline en="View scheme" mr="योजना पहा" /> <ArrowUpRight size={15} /></span></Link>)}</div><p className="detail-muted"><Bi en="Eligibility depends on your specific case - confirm current terms with the implementing body or a Sahaciety specialist." mr="पात्रता तुमच्या विशिष्ट प्रकरणावर अवलंबून आहे - सध्याच्या अटी अंमलबजावणी संस्थेकडून किंवा साहासोसायटीच्या तज्ञाकडून तपासून घ्या." /></p></section>}
    <LeadCapturePanel path={path} answers={answers} />
    {recommended.length > 0 && <section className="recommended-section"><div><p className="eyebrow"><Bi en="Connected services" mr="जोडलेल्या सेवा" /></p><h2><Bi en="You may also need" mr="तुम्हाला हे देखील हवे असू शकते" /></h2></div><div className="related-service-grid">{recommended.map((service) => service && <Link href={`/service/${service.slug}`} className="related-service" key={service.slug}><span>{service.category}</span><strong>{service.title}</strong><ArrowRight size={16} /></Link>)}</div></section>}
    {relatedArticles.length > 0 && <section className="recommended-section"><div><p className="eyebrow"><Bi en="Keep learning" mr="शिकत रहा" /></p><h2><Bi en="Guides for this path" mr="या मार्गासाठी मार्गदर्शक" /></h2></div><div className="related-service-grid">{relatedArticles.map((article) => article && <Link href={`/knowledge/${article.slug}`} className="related-service" key={article.slug}><span><Bi en={article.category} mr={article.categoryMr} /></span><strong><Bi en={article.title} mr={article.titleMr} /></strong><ArrowRight size={16} /></Link>)}</div></section>}
    <div className="roadmap-next"><div><p className="eyebrow"><Bi en="Your next step" mr="तुमचे पुढील पाऊल" /></p><h2><Bi en="Ready to check a specific service?" mr="एखादी विशिष्ट सेवा तपासण्यास तयार आहात?" /></h2><p><Bi en="Choose a recommended service or tell Sahaciety more about your requirement." mr="शिफारस केलेली सेवा निवडा किंवा साहासोसायटीला तुमच्या गरजेबद्दल अधिक सांगा." /></p></div><Link href="/contact" className="button button-dark"><BiInline en="Talk to Sahaciety" mr="साहासोसायटीशी बोला" /> <ArrowRight size={17} /></Link></div>
  </div></section>;
}

function MilestoneSummary({ path }: { path: JourneyPath }) {
  const categories = path.roadmap.map(categoryFor);
  const counts = categories.reduce<Record<string, number>>((acc, category) => ({ ...acc, [category]: (acc[category] ?? 0) + 1 }), {});
  const uniqueCategories = Object.keys(counts);

  function handleShare() {
    const lines = [`My Sahaciety roadmap: ${path.title}`, path.summary, "", ...path.roadmap.map((step, index) => `${index + 1}. ${step.title}`), "", "See your own roadmap at sahaciety.in/diagnostic"];
    window.open(buildWhatsAppShareLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return <div className="milestone-summary">
    <div className="milestone-summary-top">
      <span>{path.roadmap.length} milestones · {uniqueCategories.length} area{uniqueCategories.length === 1 ? "" : "s"} covered <span className="mr-inline" lang="mr">· {path.roadmap.length} टप्पे · {uniqueCategories.length} क्षेत्रे समाविष्ट</span></span>
      <div className="milestone-summary-actions">
        <button className="button button-outline button-small" type="button" onClick={handleShare}><BiInline en="Share on WhatsApp" mr="व्हॉट्सअॅपवर शेअर करा" /> <Share2 size={15} /></button>
        <button className="button button-outline button-small" type="button" onClick={() => window.print()}><BiInline en="Save as PDF" mr="पीडीएफ म्हणून जतन करा" /> <Printer size={15} /></button>
      </div>
    </div>
    <div className="milestone-bar">{categories.map((category, index) => <span key={`${category}-${index}`} style={{ background: colorFor(category) }} />)}</div>
    <div className="milestone-tags">{uniqueCategories.map((category) => <span key={category}><i style={{ background: colorFor(category) }} />{category} × {counts[category]}</span>)}</div>
  </div>;
}

function LeadCapturePanel({ path, answers }: { path: JourneyPath; answers: { key: string; value: string }[] }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) return setError("Please share your name. / कृपया तुमचे नाव द्या.");
    if (digits.length < 10) return setError("Please share a valid 10-digit mobile number. / कृपया वैध 10-अंकी मोबाईल नंबर द्या.");
    setError("");
    const details = answers.map(({ key, value }) => `${key.replace(/^[^-]+-/, "").replace(/-/g, " ")}: ${value}`).join(", ");
    const message = [`Hi Sahaciety, I completed the "${path.title}" assessment.`, `Name: ${name.trim()}`, details ? `Details: ${details}` : "", "Please help me with the next step."].filter(Boolean).join("\n");
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return <div className="lead-panel"><div className="lead-panel-head"><p className="eyebrow"><Bi en="Get expert help" mr="तज्ञांची मदत घ्या" /></p><h2><Bi en="Send this roadmap to a Sahaciety specialist." mr="हा रोडमॅप साहासोसायटीच्या तज्ञाला पाठवा." /></h2><p><Bi en="Share your name and number - we&apos;ll start a real conversation on WhatsApp, not a sales call." mr="तुमचे नाव आणि नंबर द्या - आम्ही व्हॉट्सअॅपवर खरी चर्चा सुरू करू, विक्री कॉल नाही." /></p></div>{sent ? <div className="lead-success"><CheckCircle2 size={22} /><div><h3>Thanks, {name.trim().split(" ")[0]}. <span className="mr-inline" lang="mr">· धन्यवाद</span></h3><p><Bi en="We&apos;ve prepared your message in a new WhatsApp tab. Send it and a Sahaciety specialist will respond." mr="आम्ही तुमचा संदेश नवीन व्हॉट्सअॅप टॅबमध्ये तयार केला आहे. तो पाठवा, साहासोसायटीचा तज्ञ प्रतिसाद देईल." /></p></div></div> : <form className="lead-form" onSubmit={handleSubmit}><label><BiInline en="Your name" mr="तुमचे नाव" /><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name / पूर्ण नाव" autoComplete="name" /></label><label><BiInline en="WhatsApp number" mr="व्हॉट्सअॅप नंबर" /><input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="10-digit mobile number / 10-अंकी मोबाईल नंबर" inputMode="tel" autoComplete="tel" /></label>{error && <p className="lead-form-error">{error}</p>}<div className="lead-form-actions"><button className="button button-dark" type="submit"><BiInline en="Continue on WhatsApp" mr="व्हॉट्सअॅपवर पुढे जा" /> <MessageCircle size={17} /></button><span className="lead-trust-note"><Lock size={14} /> <BiInline en="We only use this to help with your request. No spam, no sharing." mr="आम्ही हे फक्त तुमच्या विनंतीसाठी वापरतो. स्पॅम नाही, शेअरिंग नाही." /></span></div></form>}</div>;
}

function RoadmapStepCard({ step, index }: { step: JourneyPath["roadmap"][number]; index: number }) {
  return <article className="roadmap-step-card"><div className="roadmap-step-number">0{index + 1}</div><div className="roadmap-step-main"><div className="roadmap-step-title"><div><h3>{step.title}</h3><p>{step.reason}</p></div>{step.serviceSlug && <Link href={`/service/${step.serviceSlug}`} className="text-link"><BiInline en="View service" mr="सेवा पहा" /> <ArrowRight size={15} /></Link>}</div><div className="responsibility-grid"><div><strong><BiInline en="Your effort" mr="तुमचे प्रयत्न" /></strong><p>{step.effort}</p></div><div><strong><BiInline en="Sahaciety support" mr="साहासोसायटीचे सहाय्य" /></strong><p>{step.support}</p></div><div><strong><BiInline en="Third party / authority" mr="तृतीय पक्ष / प्राधिकरण" /></strong><p>{step.authority}</p></div></div><div className="step-meta"><div><FileText size={16} /><span><b><BiInline en="Documents you may need" mr="आवश्यक कागदपत्रे" /></b>{step.documents.map((document) => <em className={`document-${document.status}`} key={document.name}>{document.status === "required" ? "Required" : document.status === "may" ? "May be required" : "Depends on case"}: {document.name}</em>)}</span></div><div><Clock3 size={16} /><span><b><BiInline en="Time &amp; dependencies" mr="वेळ व अवलंबित्व" /></b>{step.timing}</span></div></div></div></article>;
}
