"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { capabilities, projects, services } from "./data";
import {
  FloatingSignal,
  MagneticPanel,
  PageReveal,
  Reveal
} from "./components/MotionPrimitives";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero-section">
          <div className="hero-grid">
            <PageReveal>
              <div className="hero-copy">
                <p className="eyebrow">Jayden de Roo / DerooStudio</p>
                <h1>
                  Websites that feel built by someone who actually gives a damn.
                </h1>
                <p className="hero-lede">
                  I design and build premium web experiences for people who need their online
                  presence to feel sharper, more credible, and more alive than a template ever can.
                </p>
                <div className="hero-actions">
                  <Link className="btn primary" href="/work">
                    Explore the work
                  </Link>
                  <Link className="btn secondary" href="/vision">
                    Read the vision
                  </Link>
                </div>
              </div>
            </PageReveal>

            <PageReveal>
              <div className="hero-visual" aria-label="Interactive DerooStudio system visual">
                <FloatingSignal />
                <motion.div
                  className="system-card main-card"
                  whileHover={{ scale: 1.025 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                >
                  <span className="card-label">current focus</span>
                  <strong>Creative technical partner</strong>
                  <p>Websites, AI workflows, design systems, and deployable ideas.</p>
                </motion.div>
                <motion.div
                  className="system-card side-card one"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>Motion</span>
                  <strong>subtle but felt</strong>
                </motion.div>
                <motion.div
                  className="system-card side-card two"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>Output</span>
                  <strong>client-ready</strong>
                </motion.div>
              </div>
            </PageReveal>
          </div>

          <div className="capability-marquee" aria-label="Capabilities">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {[...capabilities, ...capabilities].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section split-section">
          <Reveal className="section-intro">
            <p className="eyebrow">What this becomes</p>
            <h2>A personal site with a stronger job than “look, I know tools”.</h2>
          </Reveal>
          <Reveal className="statement-panel" delay={0.1}>
            <p>
              The new DerooStudio site should make one thing clear: you are not simply offering code.
              You help businesses translate ambition into an online presence with taste, motion,
              automation, structure, and enough technical discipline to ship.
            </p>
          </Reveal>
        </section>

        <section className="section services-section">
          <div className="section-heading">
            <p className="eyebrow">Offer shape</p>
            <h2>Three ways I can move a project forward.</h2>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <MagneticPanel className="service-card" key={service.title}>
                <span>{service.kicker}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <motion.div
                  className="card-line"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.7 }}
                />
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

