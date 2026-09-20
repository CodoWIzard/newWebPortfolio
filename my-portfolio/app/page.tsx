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
              <div className="hero-aside" aria-label="DerooStudio focus">
                <span>Based in Amsterdam</span>
                <strong>Websites / identity / motion / systems</strong>
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

