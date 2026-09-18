"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ScrollProgress } from "./components/MotionPrimitives";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/vision", label: "Vision" }
];

export default function Navigation() {
  const pathname = usePathname();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Amsterdam",
          hour: "2-digit",
          minute: "2-digit"
        })
      );
    };

    updateTime();
    const interval = window.setInterval(updateTime, 30000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <ScrollProgress />
      <motion.header
        className="site-nav"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href="/" className="brand-lockup" aria-label="DerooStudio home">
          <span className="brand-glyph">D</span>
          <span>
            <strong>DerooStudio</strong>
            <small>websites / systems / motion</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={active ? "active" : ""}>
                {link.label}
                {active && <motion.span layoutId="nav-active" className="nav-active" />}
              </Link>
            );
          })}
        </nav>

        <div className="nav-status" aria-label="Amsterdam time">
          <span>AMS</span>
          <strong>{time}</strong>
        </div>
      </motion.header>
    </>
  );
}

