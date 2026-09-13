"use client";

import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { buildWhatsAppLink } from "../data/site";
import { Bi, BiInline } from "./Bilingual";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim()) return setError("Please share your name. / कृपया तुमचे नाव द्या.");
    if (!need.trim()) return setError("Please tell us what you are trying to do. / कृपया तुम्हाला काय करायचे आहे ते सांगा.");
    setError("");
    const message = [`Hi Sahaciety, my name is ${name.trim()}.`, phone.trim() ? `My number is ${phone.trim()}.` : "", `I need help with: ${need.trim()}`].filter(Boolean).join("\n");
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) return <div className="contact-form" aria-live="polite"><div className="contact-success"><CheckCircle2 size={22} /><div><h3>Thanks, {name.trim().split(" ")[0]}.</h3><p><Bi en="We&apos;ve prepared your message in a new WhatsApp tab. Send it and our team will respond shortly." mr="आम्ही तुमचा संदेश नवीन व्हॉट्सअॅप टॅबमध्ये तयार केला आहे. तो पाठवा, आमची टीम लवकरच प्रतिसाद देईल." /></p></div></div></div>;

  return <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
    <label htmlFor="contact-name"><BiInline en="Your name" mr="तुमचे नाव" /></label>
    <input id="contact-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name / नाव" autoComplete="name" />
    <label htmlFor="contact-phone"><BiInline en="WhatsApp / phone number (optional)" mr="व्हॉट्सअॅप / फोन नंबर (ऐच्छिक)" /></label>
    <input id="contact-phone" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="10-digit mobile number / 10-अंकी मोबाईल नंबर" inputMode="tel" autoComplete="tel" />
    <label htmlFor="contact-need"><BiInline en="What are you trying to do?" mr="तुम्हाला काय करायचे आहे?" /></label>
    <textarea id="contact-need" rows={5} value={need} onChange={(event) => setNeed(event.target.value)} placeholder="Tell us briefly about your goal / तुमच्या ध्येयाबद्दल थोडक्यात सांगा" />
    {error && <p className="contact-form-error">{error}</p>}
    <div className="contact-form-actions">
      <button className="button button-dark" type="submit"><BiInline en="Send on WhatsApp" mr="व्हॉट्सअॅपवर पाठवा" /> <MessageCircle size={17} /></button>
      <a className="button button-outline" href={`mailto:reach@sahaciety.in?subject=${encodeURIComponent("Enquiry from " + (name.trim() || "website visitor"))}&body=${encodeURIComponent(need)}`}><BiInline en="Email instead" mr="ईमेल करा" /> <Send size={16} /></a>
    </div>
    <p className="contact-form-note"><Bi en="We only use these details to respond to your enquiry. No spam, no sharing." mr="आम्ही ही माहिती फक्त तुमच्या चौकशीला उत्तर देण्यासाठी वापरतो. स्पॅम नाही, शेअरिंग नाही." /></p>
  </form>;
}
