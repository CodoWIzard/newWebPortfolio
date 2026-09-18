"use client";

import Link from "next/link";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { principles } from "../data";
import { MagneticPanel, PageReveal, Reveal } from "../components/MotionPrimitives";

export default function VisionPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-hero vision-hero">
          <PageReveal>
            <p className="eyebrow">Vision / online presence</p>
            <h1>A good website changes how seriously people take the thing behind it.</h1>
            <p>
              I want to help businesses and creators show up online with more intent: clearer
              positioning, sharper visuals, smoother interactions, and a site that feels alive enough
              to remember.
            </p>
          </PageReveal>
        </section>

        <section className="section principles-grid">
          {principles.map((principle, index) => (
            <Reveal delay={index * 0.08} key={principle.title}>
              <MagneticPanel className="principle-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{principle.title}</h2>
                <p>{principle.body}</p>
              </MagneticPanel>
            </Reveal>
          ))}
        </section>

        <section className="section manifesto">
          <Reveal>
            <p className="eyebrow">What I am aiming for</p>
            <h2>
              Build a practice where websites, automation, and design taste work together instead of
              living in separate boxes.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              The goal is not to become another generic “web developer”. The goal is to become the
              person a business calls when their digital presence needs taste, structure, speed, and a
              practical path from idea to live deployment.
            </p>
          </Reveal>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="eyebrow">Business inquiries</p>
            <h2>Tell me what you want your online presence to do.</h2>
            <p>
              Send a short note with the business, current site if there is one, what feels outdated,
              and what a better version should help you achieve.
            </p>
          </div>

          <div className="contact-panel">
            <a href="mailto:jayden.deroo@gmail.com?subject=Website%20project%20inquiry">
              jayden.deroo@gmail.com
            </a>
            <div className="contact-prompts">
              <span>Website rebuild</span>
              <span>Motion landing page</span>
              <span>AI workflow</span>
              <span>Creative direction</span>
            </div>
            <Link className="btn primary" href="mailto:jayden.deroo@gmail.com?subject=Website%20project%20inquiry">
              Open email
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

