"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["React", "Node.js", "WebSocket"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization platform for business intelligence with interactive charts and reports.",
      tech: ["TypeScript", "D3.js", "Express"],
      link: "#",
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
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
                Aspiring Software Engineer with focus on solid code, unique
                design and functional systems.
              </p>
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
              Skills & Tools
            </motion.h2>
            <div className="relative flex items-center justify-center min-h-[500px]">
              {skills.map((skill, index) => {
                const angle = (index / skills.length) * 2 * Math.PI;
                const radius = 150;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.3, zIndex: 10 }}
                    animate={{
                      x: [
                        Math.cos(angle) * radius,
                        Math.cos(angle + 0.5) * radius,
                        Math.cos(angle) * radius,
                      ],
                      y: [
                        Math.sin(angle) * radius,
                        Math.sin(angle + 0.5) * radius,
                        Math.sin(angle) * radius,
                      ],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="absolute cursor-pointer"
                  >
                    <div
                      className={`p-4 rounded-full border transition-all duration-300 ${
                        hoveredSkill === skill.name
                          ? "bg-blue-500/10 border-blue-500 shadow-lg shadow-blue-500/30"
                          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                      }`}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
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
