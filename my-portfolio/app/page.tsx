"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { projects, services } from "./data";
import { MagneticPanel, PageReveal, Reveal } from "./components/MotionPrimitives";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero-section">
          <div className="hero-inner">
            <PageReveal>
              <div className="hero-copy">
                <p className="eyebrow">Jayden de Roo / DerooStudio</p>
                <h1>Digital presence for people who want to be taken seriously.</h1>
                <p className="hero-lede">
                  I design and build websites that make a business feel sharper, clearer, and more
                  worth trusting. Strategy, taste, motion, and code in one focused process.
                </p>
                <div className="hero-actions">
                  <Link className="btn primary" href="/work">
                    View the work
                  </Link>
                  <Link className="btn secondary" href="/vision">
                    Start a conversation
                  </Link>
                </div>
              </div>
            </PageReveal>

            <PageReveal>
              <div className="hero-aside" aria-label="DerooStudio studio notes">
                <span>Amsterdam / independent studio</span>
                <strong>Websites that feel composed, trusted, and alive.</strong>
                <dl className="hero-notes">
                  <div>
                    <dt>Focus</dt>
                    <dd>Web presence</dd>
                  </div>
                  <div>
                    <dt>Method</dt>
                    <dd>Strategy, design, code</dd>
                  </div>
                  <div>
                    <dt>Output</dt>
                    <dd>Client-ready sites</dd>
                  </div>
                </dl>
              </div>
            </PageReveal>
          </div>
        </section>

        <section className="section split-section">
          <Reveal className="section-intro">
            <p className="eyebrow">What this becomes</p>
            <h2>A site with a stronger job than “look, I know tools”.</h2>
          </Reveal>
          <Reveal className="statement-panel" delay={0.1}>
            <p>
              DerooStudio is for businesses and founders who know their online presence could be
              sharper. The work is not just putting sections on a page. It is deciding what should be
              said, how it should feel, and how to make it live without losing taste.
            </p>
          </Reveal>
        </section>

        <section className="section brand-directions">
          <div className="section-heading">
            <p className="eyebrow">Wordmark directions</p>
            <h2>Three ways DerooStudio can start behaving like a brand.</h2>
          </div>
          <div className="brand-direction-grid">
            <Reveal>
              <article className="brand-direction-card refined">
                <span className="brand-option-label">01 / Refined</span>
                <div className="brand-preview wordmark-refined" aria-label="DerooStudio refined wordmark">
                  DerooStudio
                </div>
                <p>Quiet, editorial, and timeless. Best if the brand should feel premium without trying too hard.</p>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="brand-direction-card split">
                <span className="brand-option-label">02 / Split identity</span>
                <div className="brand-preview wordmark-split" aria-label="DerooStudio split wordmark">
                  <span>Deroo</span>
                  <span>Studio</span>
                </div>
                <p>My recommendation. It keeps the name readable, but adds a studio-system feeling through contrast and spacing.</p>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article className="brand-direction-card monogram">
                <span className="brand-option-label">03 / Monogram system</span>
                <div className="brand-preview monogram-lockup" aria-label="DerooStudio monogram lockup">
                  <span className="monogram-box">
                    <span>D</span>
                    <span>S</span>
                  </span>
                  <span>DerooStudio</span>
                </div>
                <p>Best for avatars, favicons, watermarks, and small UI moments where the full name would be too much.</p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section services-section">
          <div className="section-heading">
            <p className="eyebrow">Offer shape</p>
            <h2>Three ways I can move a project forward.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <MagneticPanel className="service-card" key={service.title}>
                <span>{service.kicker}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </MagneticPanel>
            ))}
          </div>
        </section>

        <section className="section work-preview">
          <div className="section-heading">
            <p className="eyebrow">Selected directions</p>
            <h2>Not a gallery. A signal of how I think.</h2>
          </div>
          <div className="project-strip">
            {projects.map((project) => (
              <Link className={`project-row ${project.accent}`} href="/work" key={project.title}>
                <span>{project.year}</span>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section cta-band">
          <Reveal>
            <p className="eyebrow">Next move</p>
            <h2>Let the site feel like the level you want to operate at.</h2>
            <Link className="btn primary" href="/vision">
              See how I approach it
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
