import React from 'react';
import Link from '@docusaurus/Link';

export function PageIntro({eyebrow, title, children, tone='blue'}) {
  return <section className={`pageIntro pageIntro--${tone}`}><div className="container narrow">
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1><div className="pageIntroText">{children}</div>
  </div></section>;
}
export function KeyPoint({label, children}) {return <div className="keyPoint"><strong>{label}</strong><span>{children}</span></div>}
export function CardGrid({children, columns=3}) {return <div className={`cardGrid cardGrid--${columns}`}>{children}</div>}
export function InfoCard({title, children, href, kicker}) {const body=<><div className="cardKicker">{kicker}</div><h3>{title}</h3><div>{children}</div></>; return href?<Link className="infoCard infoCard--link" to={href}>{body}</Link>:<div className="infoCard">{body}</div>}
export function Section({title, children, lead}) {return <section className="contentSection"><div className="container narrow"><h2>{title}</h2>{lead&&<p className="sectionLead">{lead}</p>}{children}</div></section>}
export function CompareRow({criterion, awt, rgr}) {return <div className="compareRow"><div className="compareCriterion">{criterion}</div><div><span className="pill pill--awt">AWT</span>{awt}</div><div><span className="pill pill--rgr">RGR</span>{rgr}</div></div>}
export function SourceNote({children}) {return <div className="sourceNote"><strong>Source note</strong><div>{children}</div></div>}
