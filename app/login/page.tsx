import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { PageShell } from "../../components/Shell";

export const metadata = { title: "Login", description: "Login entry point for the future Sahaciety experience." };

export default function LoginPage() { return <PageShell eyebrow="Sahaciety access" title="Your connected journeys, in one place." intro="Login will connect to the Sahaciety identity and membership layer when it is ready. The public website remains an experience layer, not an authentication system."><section className="section"><div className="container login-panel"><LockKeyhole size={28} /><h2>Login is coming with the Runtime.</h2><p>For now, explore services or tell Sahaciety what you are trying to accomplish.</p><div><Link href="/services" className="button button-dark">Explore services <ArrowRight size={17} /></Link><Link href="/ask-sahaciety" className="text-link">Ask Sahaciety <ArrowRight size={16} /></Link></div></div></section></PageShell>; }