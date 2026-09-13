"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Bi } from "./Bilingual";

export default function MobileNav() { const [open, setOpen] = useState(false); return <div className="mobile-nav"><button className="icon-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>{open && <div className="mobile-menu"><Link href="/services" onClick={() => setOpen(false)}><Bi en="Services" mr="सेवा" /></Link><Link href="/schemes" onClick={() => setOpen(false)}><Bi en="Schemes" mr="योजना" /></Link><Link href="/solutions" onClick={() => setOpen(false)}><Bi en="Solutions" mr="उपाय" /></Link><Link href="/about" onClick={() => setOpen(false)}><Bi en="About" mr="आमच्याविषयी" /></Link><Link href="/knowledge" onClick={() => setOpen(false)}><Bi en="Knowledge" mr="ज्ञान केंद्र" /></Link><Link href="/partners" onClick={() => setOpen(false)}><Bi en="Partners" mr="भागीदार" /></Link><Link href="/login" onClick={() => setOpen(false)}><Bi en="Login" mr="लॉगिन" /></Link></div>}</div>; }