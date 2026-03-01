"use client";

import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Home() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "TailwindCSS", "PostgreSQL", "MongoDB", "AWS"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["React", "Node.js", "WebSocket"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence with interactive charts and reports.",
      tech: ["TypeScript", "D3.js", "Express"],
      link: "#"
    }
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
                Software Engineer
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
                Building scalable web applications with modern technologies.
                Passionate about clean code, user experience, and solving complex problems.
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
              className="text-3xl font-bold text-black dark:text-white mb-12"
            >
              Skills & Tools
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-center text-sm font-medium text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
                >
                  {skill}
                </motion.div>
              ))}
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
