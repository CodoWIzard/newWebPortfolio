"use client";

import { motion } from "framer-motion";
import Navigation from "../Navigation";
import Footer from "../Footer";

export default function WordPressPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
            Webflow Development
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            This page is currently under development. Check back soon for
            Webflow services and solutions.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-sm text-zinc-600 dark:text-zinc-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Coming Soon
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
