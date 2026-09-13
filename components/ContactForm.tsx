"use client";

import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { buildWhatsAppLink } from "../data/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim()) return setError("Please share your name.");
    if (!need.trim()) return setError("Please tell us what you are trying to do.");
    setError("");
    const message = [`Hi Sahaciety, my name is ${name.trim()}.`, phone.trim() ? `My number is ${phone.trim()}.` : "", `I need help with: ${need.trim()}`].filter(Boolean).join("\n");
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) return <div className="contact-form" aria-live="polite"><div className="contact-success"><CheckCircle2 size={22} /><div><h3>Thanks, {name.trim().split(" ")[0]}.</h3><p>We&apos;ve prepared your message in a new WhatsApp tab. Send it and our team will respond shortly.</p></div></div></div>;

  return <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
    <label htmlFor="contact-name">Your name</label>
    <input id="contact-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" autoComplete="name" />
    <label htmlFor="contact-phone">WhatsApp / phone number (optional)</label>
    <input id="contact-phone" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="10-digit mobile number" inputMode="tel" autoComplete="tel" />
    <label htmlFor="contact-need">What are you trying to do?</label>
    <textarea id="contact-need" rows={5} value={need} onChange={(event) => setNeed(event.target.value)} placeholder="Tell us briefly about your goal" />
    {error && <p className="contact-form-error">{error}</p>}
    <div className="contact-form-actions">
      <button className="button button-dark" type="submit">Send on WhatsApp <MessageCircle size={17} /></button>
      <a className="button button-outline" href={`mailto:reach@sahaciety.in?subject=${encodeURIComponent("Enquiry from " + (name.trim() || "website visitor"))}&body=${encodeURIComponent(need)}`}>Email instead <Send size={16} /></a>
    </div>
    <p className="contact-form-note">We only use these details to respond to your enquiry. No spam, no sharing.</p>
  </form>;
}
