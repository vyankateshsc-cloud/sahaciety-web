import { Mail, MapPin, Phone } from "lucide-react";
import { PageShell, SectionHeading } from "../../components/Shell";
import ContactForm from "../../components/ContactForm";
import { contactPhoneDisplay } from "../../data/site";

export const metadata = { title: "Contact", description: "Contact Sahaciety about services, partnerships and ecosystem participation." };

export default function ContactPage() {
  return <PageShell eyebrow="Contact" title="Start a useful conversation." intro="Tell us what you are trying to accomplish, and we will help you find the right context for the next step.">
    <section className="section"><div className="container contact-grid">
      <div>
        <SectionHeading eyebrow="Connect" title="Keep the first step simple." intro="Reach us directly, or send a quick message and we will get back to you." />
        <div className="contact-list">
          <div><Mail size={20} /><span>reach@sahaciety.in</span></div>
          <div><Phone size={20} /><span>Main Office: {contactPhoneDisplay}</span></div>
          <div><MapPin size={20} /><span>Office No. 407, 4th Floor, Amanora Ascent Avenue, Amanora Park Town, Sadesatra Nali, Hadapsar, Pune – 411028, Maharashtra.</span></div>
        </div>
      </div>
      <ContactForm />
    </div></section>
  </PageShell>;
}
