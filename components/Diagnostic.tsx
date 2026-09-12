"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, FileText, RotateCcw, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getJourneyPath, diagnosticIntents, JourneyPath } from "../data/journey";
import { knowledge, services } from "../data/site";

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

  if (!pathKey || !path) return <section className="diagnostic-shell"><div className="container diagnostic-container"><DiagnosticIntro /><div className="diagnostic-intents">{diagnosticIntents.map(({ value, label, description, icon: Icon, path: nextPath }) => <button className="diagnostic-intent" key={value} onClick={() => chooseIntent(nextPath)}><span className="icon-tile"><Icon size={22} /></span><span><strong>{label}</strong><small>{description}</small></span><ArrowRight size={17} /></button>)}</div></div></section>;
  if (complete) return <DiagnosticResult path={path} answers={answerSummary} onReset={reset} />;

  const question = path.questions[questionIndex]!;
  return <section className="diagnostic-shell"><div className="container diagnostic-container"><button className="back-link" onClick={questionIndex < 0 ? reset : () => setQuestionIndex((current) => current - 1)}><ArrowLeft size={16} /> Back</button><div className="diagnostic-progress"><span>Step {questionIndex < 0 ? 1 : currentStep} of {totalSteps}</span><div><i style={{ width: `${((questionIndex + 1) / totalSteps) * 100}%` }} /></div></div>{questionIndex < 0 ? <div className="question-card"><p className="eyebrow">{path.title}</p><h2>Let&apos;s understand where you are starting.</h2><p>{path.summary}</p><button className="button button-dark" onClick={startQuestions}>Start with a few questions <ArrowRight size={17} /></button></div> : <div className="question-card"><p className="eyebrow">Question {currentStep}</p><h2>{question.label}</h2>{question.helper && <p>{question.helper}</p>}<div className="answer-options">{question.options.map((option) => <button className="answer-option" key={option.value} onClick={() => chooseAnswer(option.value)}><span><strong>{option.label}</strong>{option.description && <small>{option.description}</small>}</span><ArrowRight size={17} /></button>)}</div></div>}</div></section>;
}

function DiagnosticIntro() { return <div className="diagnostic-intro"><p className="eyebrow">Find your path</p><h1>What are you trying to accomplish?</h1><p>Choose the closest goal. We&apos;ll ask only what helps us show you a useful next step.</p></div>; }

function DiagnosticResult({ path, answers, onReset }: { path: JourneyPath; answers: { key: string; value: string }[]; onReset: () => void }) {
  const recommended = path.relatedServices.map((slug) => services.find((service) => service.slug === slug)).filter(Boolean);
  const relatedArticles = path.relatedKnowledge.map((slug) => knowledge.find((article) => article.slug === slug)).filter(Boolean);
  return <section className="roadmap-shell"><div className="container roadmap-container"><div className="roadmap-top"><div><p className="eyebrow">Your Sahaciety Path</p><h1>{path.title}</h1><p>{path.summary}</p></div><button className="back-link" onClick={onReset}><RotateCcw size={16} /> Start again</button></div><div className="profile-strip"><div><span>Your goal</span><strong>{path.title.replace("Your ", "")}</strong></div>{answers.slice(0, 3).map(({ key, value }) => <div key={key}><span>{key.replace(/^[^-]+-/, "").replace(/-/g, " ")}</span><strong>{value}</strong></div>)}</div><div className="roadmap-heading"><div><p className="eyebrow">Recommended roadmap</p><h2>Here is what may need to happen next.</h2></div><span className="roadmap-disclaimer"><ShieldCheck size={16} /> Guidance, not a guarantee</span></div><div className="roadmap-list">{path.roadmap.map((step, index) => <RoadmapStepCard step={step} index={index} key={step.title} />)}</div>{recommended.length > 0 && <section className="recommended-section"><div><p className="eyebrow">Connected services</p><h2>You may also need</h2></div><div className="related-service-grid">{recommended.map((service) => service && <Link href={`/service/${service.slug}`} className="related-service" key={service.slug}><span>{service.category}</span><strong>{service.title}</strong><ArrowRight size={16} /></Link>)}</div></section>}{relatedArticles.length > 0 && <section className="recommended-section"><div><p className="eyebrow">Keep learning</p><h2>Guides for this path</h2></div><div className="related-service-grid">{relatedArticles.map((article) => article && <Link href={`/knowledge/${article.slug}`} className="related-service" key={article.slug}><span>{article.category}</span><strong>{article.title}</strong><ArrowRight size={16} /></Link>)}</div></section>}<div className="roadmap-next"><div><p className="eyebrow">Your next step</p><h2>Ready to check a specific service?</h2><p>Choose a recommended service or tell Sahaciety more about your requirement.</p></div><Link href="/contact" className="button button-dark">Talk to Sahaciety <ArrowRight size={17} /></Link></div></div></section>;
}

function RoadmapStepCard({ step, index }: { step: JourneyPath["roadmap"][number]; index: number }) {
  return <article className="roadmap-step-card"><div className="roadmap-step-number">0{index + 1}</div><div className="roadmap-step-main"><div className="roadmap-step-title"><div><h3>{step.title}</h3><p>{step.reason}</p></div>{step.serviceSlug && <Link href={`/service/${step.serviceSlug}`} className="text-link">View service <ArrowRight size={15} /></Link>}</div><div className="responsibility-grid"><div><strong>Your effort</strong><p>{step.effort}</p></div><div><strong>Sahaciety support</strong><p>{step.support}</p></div><div><strong>Third party / authority</strong><p>{step.authority}</p></div></div><div className="step-meta"><div><FileText size={16} /><span><b>Documents you may need</b>{step.documents.map((document) => <em className={`document-${document.status}`} key={document.name}>{document.status === "required" ? "Required" : document.status === "may" ? "May be required" : "Depends on case"}: {document.name}</em>)}</span></div><div><Clock3 size={16} /><span><b>Time &amp; dependencies</b>{step.timing}</span></div></div></div></article>;
}
