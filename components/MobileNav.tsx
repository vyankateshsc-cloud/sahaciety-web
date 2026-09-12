"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileNav() { const [open, setOpen] = useState(false); return <div className="mobile-nav"><button className="icon-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>{open && <div className="mobile-menu"><Link href="/services" onClick={() => setOpen(false)}>Services</Link><Link href="/solutions" onClick={() => setOpen(false)}>Solutions</Link><Link href="/about" onClick={() => setOpen(false)}>About</Link><Link href="/knowledge" onClick={() => setOpen(false)}>Knowledge</Link><Link href="/partners" onClick={() => setOpen(false)}>Partners</Link><Link href="/login" onClick={() => setOpen(false)}>Login</Link></div>}</div>; }