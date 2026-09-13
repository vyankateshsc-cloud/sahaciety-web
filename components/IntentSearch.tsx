"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { intents } from "../data/site";
import { BiInline } from "./Bilingual";

export default function IntentSearch() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => { const needle = query.toLowerCase(); return intents.filter(([label, , labelMr]) => label.toLowerCase().includes(needle) || labelMr.includes(query)); }, [query]);
  return <div className="intent-box">
    <div className="intent-input"><Search size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What are you trying to do? / तुम्हाला काय करायचे आहे?" aria-label="What are you trying to do?" /></div>
    <div className="intent-list">
      {matches.slice(0, 5).map(([label, href, labelMr]) => <Link href={href} key={label} className="intent-option"><span><BiInline en={label} mr={labelMr} /></span><ArrowUpRight size={17} /></Link>)}
      {matches.length === 0 && <span className="intent-empty"><BiInline en="Try a broader goal, such as finance, business or property." mr="वित्त, व्यवसाय किंवा मालमत्तेसारखे व्यापक ध्येय वापरून पहा." /></span>}
    </div>
  </div>;
}
