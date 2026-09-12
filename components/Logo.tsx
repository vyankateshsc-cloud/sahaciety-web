import Image from "next/image";
import Link from "next/link";
import logo from "../data/logo.png";

export default function Logo({ footer = false }: { footer?: boolean }) {
  return <Link href="/" className={`logo ${footer ? "logo-footer" : ""}`} aria-label="Sahaciety home"><Image src={logo} alt="Sahaciety" priority={!footer} className="logo-image" /><span className="logo-descriptor">Governance-led ecosystem</span></Link>;
}
