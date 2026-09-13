"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircleQuestion, RotateCcw, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { diagnosticIntents, getJourneyPath } from "../data/journey";
import { buildWhatsAppLink, services } from "../data/site";
import { schemesForPath } from "../data/schemes";

type Stage = "menu" | "followup" | "result";

export default function AskAssistant() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("menu");
  const [intentValue, setIntentValue] = useState("");
  const [followupLabel, setFollowupLabel] = useState("");

  const intent = diagnosticIntents.find((candidate) => candidate.value === intentValue);
  const path = intent ? getJourneyPath(intent.path) : null;
  const followupQuestion = path?.questions[0];

  function reset() { setStage("menu"); setIntentValue(""); setFollowupLabel(""); }
  function close() { setOpen(false); reset(); }
  function chooseIntent(value: string) { setIntentValue(value); setStage("followup"); }
  function chooseFollowup(label: string) { setFollowupLabel(label); setStage("result"); }

  const recommendedServices = path ? path.relatedServices.map((slug) => services.find((service) => service.slug === slug)).filter(Boolean).slice(0, 2) : [];
  const recommendedSchemes = path ? schemesForPath(path.slug, 2) : [];

  function talkToSpecialist() {
    if (!path) return;
    const message = [`Hi Sahaciety, I used Ask Sahaciety about: ${intent?.label}.`, followupLabel ? `More detail: ${followupLabel}` : "", "Can someone help me with the next step?"].filter(Boolean).join("\n");
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return <>
    <button className="ask-assistant-fab" onClick={() => setOpen((current) => !current)} aria-label={open ? "Close Ask Sahaciety" : "Open Ask Sahaciety"} aria-expanded={open}>
      {open ? <X size={20} /> : <Sparkles size={20} />}<span>Ask Sahaciety</span>
    </button>
    {open && <div className="ask-assistant-panel" role="dialog" aria-label="Ask Sahaciety assistant">
      <div className="ask-assistant-head">
        <div><MessageCircleQuestion size={18} /><div><strong>Ask Sahaciety</strong><small>A quick, rule-based guide - not free-form AI</small></div></div>
        <button onClick={close} aria-label="Close"><X size={16} /></button>
      </div>
      <div className="ask-assistant-body">
        <div className="chat-bubble-bot">Hi, I&apos;m the Sahaciety guide. What are you trying to accomplish?</div>

        {stage === "menu" && <div className="ask-assistant-chips">{diagnosticIntents.map(({ value, label }) => <button key={value} onClick={() => chooseIntent(value)}>{label}</button>)}</div>}

        {stage !== "menu" && intent && <div className="chat-bubble-user">{intent.label}</div>}

        {stage === "followup" && followupQuestion && <>
          <div className="chat-bubble-bot">{followupQuestion.label}</div>
          <div className="ask-assistant-chips">{followupQuestion.options.map((option) => <button key={option.value} onClick={() => chooseFollowup(option.label)}>{option.label}</button>)}</div>
        </>}

        {stage === "result" && path && <>
          {followupLabel && <div className="chat-bubble-user">{followupLabel}</div>}
          <div className="chat-bubble-bot">
            <p>Here&apos;s a useful starting point for &quot;{intent?.label}&quot;:</p>
            {recommendedServices.length > 0 && <div className="ask-assistant-results"><b>Relevant services</b>{recommendedServices.map((service) => service && <Link href={`/service/${service.slug}`} key={service.slug}>{service.title} <ArrowUpRight size={13} /></Link>)}</div>}
            {recommendedSchemes.length > 0 && <div className="ask-assistant-results"><b>Schemes worth checking</b>{recommendedSchemes.map((scheme) => <Link href={`/schemes/${scheme.slug}`} key={scheme.slug}>{scheme.title} <ArrowUpRight size={13} /></Link>)}</div>}
          </div>
          <div className="ask-assistant-actions">
            <Link href={`/diagnostic?path=${intent?.path}`} className="button button-dark button-small">See full roadmap <ArrowRight size={15} /></Link>
            <button className="button button-outline button-small" onClick={talkToSpecialist}>Talk to a specialist</button>
            <button className="ask-assistant-restart" onClick={reset}><RotateCcw size={13} /> Start over</button>
          </div>
        </>}
      </div>
    </div>}
  </>;
}
