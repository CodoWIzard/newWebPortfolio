// WordPress Business Page
export const wordpressPage = `"use client";

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
}`;

// Industrial Design Page
export const industrialDesignPage = `"use client";

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
}`;

// API Contact Route
export const apiContactRoute = `import { NextRequest, NextResponse } from 'next/server';

const requestCounts = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 5;
  const window = 60000;

  const record = requestCounts.get(ip);
  
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + window });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '').trim().slice(0, 1000);
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      projectType: sanitizeInput(projectType),
      budget: sanitizeInput(budget),
      message: sanitizeInput(message),
    };

    // Integrate with email service or database here
    console.log('Contact form submission:', sanitizedData);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`;
