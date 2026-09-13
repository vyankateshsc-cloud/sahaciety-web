// Small helpers for the site's inline English + Marathi bilingual text.
export function Bi({ en, mr }: { en: string; mr: string }) { return <>{en}<span className="mr-line" lang="mr">{mr}</span></>; }
export function BiInline({ en, mr }: { en: string; mr: string }) { return <>{en} <span className="mr-inline" lang="mr">· {mr}</span></>; }
