"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const skills = [
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Nuxt.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ];

  const projects = [
    {
      title: "PWA Mobile-First",
      description:
        "A mobile-first driven web project. This web-app is capable of functioning offline by caching your data from your latest on-line session.",
      tech: ["Test"],
      link: "https://vercel.com/codowizards-projects/wpa-app",
    },
    {
      title: "FineTune",
      description:
        "Music web-app. Personal project where AI takes over design, but where I implement technical functionalities to make the app work.",
      tech: ["TypeScript"],
      link: "https://vercel.com/codowizards-projects/mini-music-app",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-zinc-50 dark:bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
                Jayden de Roo
              </h1>
              <div className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl space-y-4">
                <p>
                  Aspiring Software Engineer with focus on solid code, seamless
                  design and functional systems.
                </p>
                <motion.div
                  initial={false}
                  animate={{
                    height: showMore ? "auto" : 0,
                    opacity: showMore ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden space-y-4"
                >
                  <p>
                    I'm a security enthusiast next to being involved in design.
                    I enjoy learning and practising defensive and offensive
                    security, while understanding human-machine design
                    principles is another skill-tree that I love indulging
                    myself in.
                  </p>
                  <p>
                    Though, I do not just stick to my interest, while also
                    avoiding to be a generalist. Specialisation is important,
                    while having a broad knowledge of other tools and
                    technologies are essential.
                  </p>
                  <p>This is my vision, and I'm ready to broaden it.</p>
                </motion.div>
              </div>
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-2 px-3 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-lg text-xs font-mono text-green-600 dark:text-green-500 hover:border-blue-500 transition-colors"
              >
                {showMore ? "Show less" : "Learn more about me"}
              </button>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black dark:text-white mb-12 text-center"
            >
              I get along with
            </motion.h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-black dark:text-white mb-8 text-center"
            >
              Currently Learning
            </motion.h3>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                {
                  name: "Ubuntu Server",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
                },
                {
                  name: "Python",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                },
                {
                  name: "AWS",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              <path
                d="M0,400 L200,300 L400,350 L600,250 L800,320 L1000,280 L1200,350 L1200,600 L0,600 Z"
                fill="currentColor"
                className="text-zinc-400 dark:text-zinc-400"
              />
              <path
                d="M0,450 L150,380 L350,420 L550,350 L750,400 L950,360 L1200,420 L1200,600 L0,600 Z"
                fill="currentColor"
                className="text-zinc-300 dark:text-zinc-600"
              />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black dark:text-white mb-12"
            >
              Featured Projects
            </motion.h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
