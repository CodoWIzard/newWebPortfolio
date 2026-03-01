"use client";

import { motion } from "framer-motion";
import Navigation from "../Navigation";
import Footer from "../Footer";

export default function IndustrialDesignPage() {
  const categories = [
    {
      title: "Technical Prototyping",
      description: "CAD models and functional prototypes",
      placeholder: "Upload your technical prototypes here"
    },
    {
      title: "Digital Sculpting",
      description: "3D sculpted designs and concepts",
      placeholder: "Showcase your digital sculptures"
    },
    {
      title: "Sketches & Concepts",
      description: "Initial ideation and design exploration",
      placeholder: "Add your concept sketches"
    },
    {
      title: "Physical Models",
      description: "3D printed and handcrafted models",
      placeholder: "Display your physical prototypes"
    },
    {
      title: "Material Research",
      description: "Material studies and applications",
      placeholder: "Document your material research"
    },
    {
      title: "Published Work",
      description: "Featured projects and publications",
      placeholder: "Share your published projects"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-zinc-50 dark:bg-black">
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
                Industrial Design
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
                Exploring the intersection of form, function, and innovation through
                technical prototyping, digital sculpting, and material research.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                >
                  <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <svg
                        className="w-16 h-16 mx-auto mb-4 text-zinc-400 dark:text-zinc-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500">
                        {category.placeholder}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Portfolio Under Development
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                This section is being prepared to showcase industrial design work.
                Check back soon for updates on technical prototypes, digital sculptures,
                and material research projects.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
