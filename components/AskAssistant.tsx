"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircleQuestion, RotateCcw, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { diagnosticIntents, getJourneyPath } from "../data/journey";
import { buildWhatsAppLink, services } from "../data/site";
import { schemesForPath } from "../data/schemes";
import { Bi, BiInline } from "./Bilingual";

type Stage = "menu" | "followup" | "result";

export default function AskAssistant() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("menu");
  const [intentValue, setIntentValue] = useState("");
  const [followupLabel, setFollowupLabel] = useState("");
  const [followupLabelMr, setFollowupLabelMr] = useState("");

  const intent = diagnosticIntents.find((candidate) => candidate.value === intentValue);
  const path = intent ? getJourneyPath(intent.path) : null;
  const followupQuestion = path?.questions[0];

  function reset() { setStage("menu"); setIntentValue(""); setFollowupLabel(""); setFollowupLabelMr(""); }
  function close() { setOpen(false); reset(); }
  function chooseIntent(value: string) { setIntentValue(value); setStage("followup"); }
  function chooseFollowup(label: string, labelMr: string) { setFollowupLabel(label); setFollowupLabelMr(labelMr); setStage("result"); }

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
        <div><MessageCircleQuestion size={18} /><div><strong>Ask Sahaciety <span lang="mr">· साहासोसायटीला विचारा</span></strong><small><BiInline en="A quick, rule-based guide - not free-form AI" mr="एक द्रुत, नियम-आधारित मार्गदर्शक - मुक्त-स्वरूप एआय नाही" /></small></div></div>
        <button onClick={close} aria-label="Close"><X size={16} /></button>
      </div>
      <div className="ask-assistant-body">
        <div className="chat-bubble-bot"><Bi en="Hi, I&apos;m the Sahaciety guide. What are you trying to accomplish?" mr="नमस्कार, मी साहासोसायटीचा मार्गदर्शक आहे. तुम्हाला काय साध्य करायचे आहे?" /></div>

        {stage === "menu" && <div className="ask-assistant-chips">{diagnosticIntents.map(({ value, label, labelMr }) => <button key={value} onClick={() => chooseIntent(value)}><BiInline en={label} mr={labelMr} /></button>)}</div>}

        {stage !== "menu" && intent && <div className="chat-bubble-user"><BiInline en={intent.label} mr={intent.labelMr} /></div>}

        {stage === "followup" && followupQuestion && <>
          <div className="chat-bubble-bot"><Bi en={followupQuestion.label} mr={followupQuestion.labelMr} /></div>
          <div className="ask-assistant-chips">{followupQuestion.options.map((option) => <button key={option.value} onClick={() => chooseFollowup(option.label, option.labelMr)}><BiInline en={option.label} mr={option.labelMr} /></button>)}</div>
        </>}

        {stage === "result" && path && <>
          {followupLabel && <div className="chat-bubble-user"><BiInline en={followupLabel} mr={followupLabelMr} /></div>}
          <div className="chat-bubble-bot">
            <p><Bi en={`Here's a useful starting point for "${intent?.label}":`} mr={`"${intent?.labelMr}" साठी एक उपयुक्त सुरुवात:`} /></p>
            {recommendedServices.length > 0 && <div className="ask-assistant-results"><b><BiInline en="Relevant services" mr="संबंधित सेवा" /></b>{recommendedServices.map((service) => service && <Link href={`/service/${service.slug}`} key={service.slug}>{service.title} <ArrowUpRight size={13} /></Link>)}</div>}
            {recommendedSchemes.length > 0 && <div className="ask-assistant-results"><b><BiInline en="Schemes worth checking" mr="तपासण्यासारख्या योजना" /></b>{recommendedSchemes.map((scheme) => <Link href={`/schemes/${scheme.slug}`} key={scheme.slug}><Bi en={scheme.title} mr={scheme.titleMr} /> <ArrowUpRight size={13} /></Link>)}</div>}
          </div>
          <div className="ask-assistant-actions">
            <Link href={`/diagnostic?path=${intent?.path}`} className="button button-dark button-small"><BiInline en="See full roadmap" mr="संपूर्ण रोडमॅप पहा" /> <ArrowRight size={15} /></Link>
            <button className="button button-outline button-small" onClick={talkToSpecialist}><BiInline en="Talk to a specialist" mr="तज्ञाशी बोला" /></button>
            <button className="ask-assistant-restart" onClick={reset}><RotateCcw size={13} /> <BiInline en="Start over" mr="पुन्हा सुरू करा" /></button>
          </div>
        </>}
      </div>
    </div>}
  </>;
}
