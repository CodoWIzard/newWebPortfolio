"use client";

import Link from "next/link";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { capabilities, projects } from "../data";
import { MagneticPanel, PageReveal, Reveal } from "../components/MotionPrimitives";

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-hero compact">
          <PageReveal>
            <p className="eyebrow">Work / proof / direction</p>
            <h1>Work is the point where taste has to become usable.</h1>
            <p>
              This page frames the kind of output DerooStudio should be known for:
              distinctive websites, useful AI systems, and polished deployments that do not collapse
              after the first review.
            </p>
          </PageReveal>
        </section>

        <section className="section case-grid-section">
          <div className="case-grid">
            {projects.map((project, index) => (
              <Reveal delay={index * 0.08} key={project.title}>
                <MagneticPanel className={`case-card ${project.accent}`}>
                  <div className="case-meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="case-outcome">{project.outcome}</div>
                </MagneticPanel>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section capability-lab">
          <div>
            <p className="eyebrow">Component sources, used properly</p>
            <h2>Primitives, not presets.</h2>
            <p>
              shadcn-style buttons, open-source UI panel patterns, command surfaces, badges, and
              cards are useful starting points. The final result still needs a unique rhythm, palette,
              copy voice, and motion language.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section process-lanes">
          {[
            ["01", "Frame", "Clarify audience, offer, tone, sections, and conversion path."],
            ["02", "Shape", "Build the visual system, motion grammar, component primitives, and copy."],
            ["03", "Ship", "Run checks, deploy, inspect the live page, and iterate from real feedback."]
          ].map(([kicker, title, body]) => (
            <Reveal className="process-lane" key={title}>
              <span>{kicker}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </section>

        <section className="section cta-band">
          <h2>Want the next case study to be yours?</h2>
          <Link className="btn primary" href="/vision">
            Start with the vision
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

