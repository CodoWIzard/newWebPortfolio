"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";

export default function WordPressPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const roadmap = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We discuss your vision, goals, and requirements to understand your business needs."
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "Creating a detailed project plan, sitemap, and design strategy tailored to your brand."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Building your custom WordPress site with modern design and robust functionality."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing across devices, final revisions, and smooth deployment to production."
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and optimization to keep your site running perfectly."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                WordPress Development
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
                Transform your business with a custom WordPress website. Professional design,
                powerful functionality, and seamless user experience.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black dark:text-white mb-12"
            >
              What I Offer
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Custom Theme Development", "E-Commerce Solutions", "Performance Optimization"].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800"
                >
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    {service}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Professional solutions tailored to your needs
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black dark:text-white mb-12"
            >
              Development Roadmap
            </motion.h2>
            <div className="space-y-6">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="flex-shrink-0">
                    <span className="text-3xl font-bold text-blue-500">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black dark:text-white mb-12 text-center"
            >
              Start Your Project
            </motion.h2>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                >
                  <option value="">Select a project type</option>
                  <option value="business">Business Website</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="blog">Blog/Magazine</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                >
                  <option value="">Select budget range</option>
                  <option value="1000-3000">$1,000 - $3,000</option>
                  <option value="3000-5000">$3,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Sent Successfully!" : status === "error" ? "Error - Try Again" : "Submit Inquiry"}
              </motion.button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
