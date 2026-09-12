"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { intents } from "../data/site";

export default function IntentSearch() { const [query, setQuery] = useState(""); const matches = useMemo(() => intents.filter(([label]) => label.toLowerCase().includes(query.toLowerCase())), [query]); return <div className="intent-box"><div className="intent-input"><Search size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What are you trying to do?" aria-label="What are you trying to do?" /></div><div className="intent-list">{matches.slice(0, 5).map(([label, href]) => <Link href={href} key={label} className="intent-option"><span>{label}</span><ArrowUpRight size={17} /></Link>)}{matches.length === 0 && <span className="intent-empty">Try a broader goal, such as finance, business or property.</span>}</div></div>; }