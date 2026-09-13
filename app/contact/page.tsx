import { Mail, MapPin, Phone } from "lucide-react";
import { PageShell, SectionHeading } from "../../components/Shell";
import { Bi } from "../../components/Bilingual";
import ContactForm from "../../components/ContactForm";
import { contactPhoneDisplay } from "../../data/site";

export const metadata = { title: "Contact", description: "Contact Sahaciety about services, partnerships and ecosystem participation." };

export default function ContactPage() {
  return <PageShell eyebrow="Contact" eyebrowMr="संपर्क" title="Start a useful conversation." titleMr="एक उपयुक्त संवाद सुरू करा." intro="Tell us what you are trying to accomplish, and we will help you find the right context for the next step." introMr="तुम्हाला काय साध्य करायचे आहे ते सांगा, आम्ही तुम्हाला पुढील पावलासाठी योग्य दिशा शोधण्यास मदत करू.">
    <section className="section"><div className="container contact-grid">
      <div>
        <SectionHeading eyebrow="Connect" eyebrowMr="जोडले जा" title="Keep the first step simple." titleMr="पहिले पाऊल सोपे ठेवा." intro="Reach us directly, or send a quick message and we will get back to you." introMr="आमच्याशी थेट संपर्क साधा, किंवा एक छोटा संदेश पाठवा, आम्ही तुम्हाला परत संपर्क करू." />
        <div className="contact-list">
          <div><Mail size={20} /><span>reach@sahaciety.in</span></div>
          <div><Phone size={20} /><span><Bi en={`Main Office: ${contactPhoneDisplay}`} mr={`मुख्य कार्यालय: ${contactPhoneDisplay}`} /></span></div>
          <div><MapPin size={20} /><span>Office No. 407, 4th Floor, Amanora Ascent Avenue, Amanora Park Town, Sadesatra Nali, Hadapsar, Pune – 411028, Maharashtra.</span></div>
        </div>
      </div>
      <ContactForm />
    </div></section>
  </PageShell>;
}
