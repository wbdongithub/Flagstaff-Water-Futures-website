import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {CardGrid,InfoCard,KeyPoint} from '../components/SiteBlocks';
export default function Home(){return <Layout title="Flagstaff's Next Water Decision" description="Why Advanced Water Treatment deserves a full evaluation alongside Red Gap Ranch.">
  <div className="draftBanner">Working draft for Flagstaff Water Group review — not yet a public City document.</div>
  <header className="heroWater"><div className="container narrow"><div className="eyebrow" style={{color:'#d9e9ec'}}>Flagstaff's next water decision</div>
    <h1>Before Flagstaff commits to one path, AWT deserves a fair evaluation.</h1>
    <p className="heroLead">Red Gap Ranch would import groundwater through a major regional pipeline. Advanced Water Treatment would purify reclaimed water already produced in Flagstaff. The Flagstaff Water Group believes both must be compared openly—on cost, timing, funding, water quality, energy, risk, and flexibility.</p>
    <div className="heroButtons"><Link className="button button--sand button--lg" to="/why-awt">Why AWT?</Link><Link className="button button--ghost button--lg" to="/compare">Compare AWT and RGR</Link><Link className="button button--ghost button--lg" to="/red-gap-ranch">Understand RGR</Link></div>
    <div className="heroQuestion"><strong>The immediate question is not whether Red Gap Ranch should disappear.</strong> It is whether a technology and regulatory landscape that has changed substantially over the last decade justifies a new, full-scale evaluation of AWT.</div>
  </div></header>
  <main>
    <section className="frontBand"><div className="container narrow"><div className="eyebrow">The situation in one minute</div><h2>Two very different ways to secure the next increment of water</h2>
      <p className="frontStatement"><strong>RGR looks outward:</strong> new wells, treatment, pumping, and roughly 35–40 miles of conveyance from east of Flagstaff. <strong>AWT looks inward:</strong> advanced purification of water the community already collects and treats. RGR may offer a very large supply, but likely requires federal or regional participation and a long delivery schedule. AWT may be smaller and more modular, while also reducing trace contaminants in reclaimed water.</p>
      <div className="keyStrip"><KeyPoint label="Core choice">Large imported groundwater project versus phased local purification.</KeyPoint><KeyPoint label="Why now">Arizona now has an AWT regulatory pathway that did not exist during the earlier DPR studies.</KeyPoint><KeyPoint label="Water quality">AWT can target PFAS, pharmaceuticals, endocrine-active compounds, and other CECs.</KeyPoint><KeyPoint label="FWG request">Perform a transparent, side-by-side study before committing to a dominant path.</KeyPoint></div>
      <div className="calloutStrong"><strong>FWG's position:</strong> Advanced Water Treatment should receive the same serious engineering, financial, environmental, and public-health evaluation that Red Gap Ranch has received.</div>
    </div></section>
    <section className="contentSection"><div className="container narrow"><div className="eyebrow">Start with the issue that matters to you</div><CardGrid columns={3}>
      <InfoCard kicker="The argument" title="Why AWT deserves another look" href="/why-awt">Technology, regulations, funding opportunities, and water-quality expectations have changed.</InfoCard>
      <InfoCard kicker="The decision" title="Compare the alternatives" href="/compare">See the high-level differences in scale, schedule, energy, funding, water quality, and expandability.</InfoCard>
      <InfoCard kicker="The City plan" title="Understand Red Gap Ranch" href="/red-gap-ranch">Why the City has pursued it, what it would require, and what remains unresolved.</InfoCard>
      <InfoCard kicker="Public health & environment" title="Why water quality matters" href="/water-quality">Conventional treatment was not designed for every trace chemical now found in wastewater.</InfoCard>
      <InfoCard kicker="What changed" title="Why now?" href="/why-now">Earlier DPR studies occurred before Arizona's current rules and before today's operating experience.</InfoCard>
      <InfoCard kicker="Background" title="How Flagstaff's system works" href="/current-system">Wells, Lake Mary, wastewater plants, reclaimed water, storage, and future needs.</InfoCard>
    </CardGrid></div></section>
    <section className="contentSection"><div className="container narrow"><h2>This is advocacy supported by a knowledge base</h2><p className="sectionLead">FWG does not claim neutrality. It advocates for AWT to receive a fair evaluation. The Water Library supports that case with City data, engineering context, uncertainties, and sources.</p><div className="heroButtons"><Link className="button button--primary" to="/library/overview">Enter the Water Library</Link><Link className="button button--secondary" to="/history">See the project history</Link></div><div className="homeFooterNote">This first complete working version uses the strongest information presently available to FWG. It is designed to be edited as new City studies, local monitoring, cost estimates, and regulatory information become available.</div></div></section>
  </main></Layout>}
