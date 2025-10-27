"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from "react-icons/fa";

type SectionId = "about" | "experience" | "skills" | "portofolio" | "projects";

interface LeftSidebarProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
}

const navItems: { name: string; sectionId: SectionId }[] = [
  { name: "About", sectionId: "about" },
  { name: "Experience", sectionId: "experience" },
  { name: "Skills", sectionId: "skills" },
  { name: "Portofolio", sectionId: "portofolio" },
  { name: "Projects", sectionId: "projects" },
];

const SOCIALS = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/ichiyon14" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/shandidev" },
  { name: "CodePen", icon: FaCodepen, url: "https://codepen.io/shandiadhitya" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/shanditarou" },
];

const ROLES = [
  "Network Engineer",
  "AI Engineer",
  "Fullstack Developer",
  "Data Scientist",
];

export default function LeftSidebar({
  activeSection,
  setActiveSection,
}: LeftSidebarProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ deteksi scroll (untuk mobile & desktop)
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("right-content");
      if (container) {
        setScrollY(container.scrollTop);
      } else {
        setScrollY(window.scrollY);
      }
    };
    const container = document.getElementById("right-content");
    (container || window).addEventListener("scroll", handleScroll);
    return () => (container || window).removeEventListener("scroll", handleScroll);
  }, []);

  // Efek zoom out kalau scroll > 50px dan bukan di section About
  const isZoomOut = scrollY > 50 || activeSection !== "about";

  return (
    <motion.header
      layout
      animate={{
        scale: isZoomOut ? 0.85 : 1,
        opacity: isZoomOut ? 0.8 : 1,
        y: isZoomOut ? -50 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="top-0 flex h-auto flex-col justify-between p-8 lg:sticky lg:h-screen lg:w-1/3 lg:px-12 lg:py-32 lg:pl-32"
      style={{ transformOrigin: "top center" }}
    >
      {/* 🔹 Info Pribadi */}
      <motion.div
        layout
        animate={{
          y: isZoomOut ? -20 : 0,
          opacity: isZoomOut ? 0.9 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Shandi Adhitya Suwondo</a>
        </h1>

        {/* 🔁 Role berganti otomatis */}
        <motion.h2
          key={roleIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
        >
          {ROLES[roleIndex]}
        </motion.h2>

        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {roleIndex === 0 && "Mengelola jaringan dan infrastruktur IT secara efisien."}
          {roleIndex === 1 && "Mengembangkan model AI untuk pemrosesan data cerdas."}
          {roleIndex === 2 && "Membangun aplikasi web end-to-end yang skalabel."}
          {roleIndex === 3 && "Menganalisis data untuk menghasilkan insight strategis."}
        </p>
      </motion.div>

      {/* 🔹 Navigasi */}
      <nav className="mt-16 hidden lg:block" aria-label="Navigasi halaman">
        <ul className="w-max">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <li key={item.sectionId}>
                <button
                  onClick={() => setActiveSection(item.sectionId)}
                  className="group flex items-center py-3 focus:outline-none"
                >
                  <span
                    className={`mr-4 h-px transition-all duration-300 ${
                      isActive
                        ? "w-16 bg-slate-200"
                        : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                    }`}
                  ></span>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-slate-200"
                        : "text-slate-500 group-hover:text-slate-200"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 🔹 Social media hanya saat zoom in */}
      <motion.div
        layout
        animate={{
          opacity: !isZoomOut ? 1 : 0,
          y: !isZoomOut ? 0 : 30,
          pointerEvents: !isZoomOut ? "auto" : "none",
        }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex flex-col gap-3 text-slate-400"
      >
        <div className="flex items-center gap-5 mt-8">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-xl text-slate-400 hover:text-white transition-colors"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.header>
  );
}
