// src/components/sections/PortofolioSection.tsx

import { forwardRef, useState, useMemo } from "react";
import { Globe, Gamepad2, Monitor } from "lucide-react"; // Ikon untuk filter

// --- DATA PROYEK ---
const PROJECTS_DATA = [
  {
    year: "2024",
    title: "Merva Dashboard",
    imageSrc: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=800",
    url: "https://example.com",
    description:
      "Modern data analytics dashboard with real-time visualization and advanced reporting.",
    details: [
      "Real-time data visualization",
      "Advanced analytics reporting",
      "Custom dashboard layouts",
    ],
    tags: ["React", "TypeScript", "TailwindCSS", "Recharts"],
    category: "Web Apps",
  },
  {
    year: "2023",
    title: "Ultraformula",
    imageSrc: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80",
    url: "https://example.com",
    description:
      "High-performance math formula editor and solver with LaTeX support.",
    details: [
      "LaTeX formula rendering",
      "Step-by-step problem solving",
      "Interactive formula editor",
    ],
    tags: ["Next.js", "KaTeX", "MathJax", "TypeScript"],
    category: "Desktop",
  },
  {
    year: "2024",
    title: "Hafari Indonesia",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    url: "https://example.com",
    description: "Platform for Indonesian Islamic community.",
    details: null,
    tags: ["Next.js", "Firebase", "TailwindCSS"],
    category: "Web Apps",
  },
  {
    year: "2025",
    title: "DakonClash",
    imageSrc: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80",
    url: "https://example.com",
    description:
      "Modern take on traditional Dakon game with online multiplayer.",
    details: null,
    tags: ["React", "Socket.IO", "Node.js", "Express"],
    category: "Games",
  },
];

const CATEGORIES = [
  { name: "All Work", icon: null },
  { name: "Web Apps", icon: Globe },
  { name: "Games", icon: Gamepad2 },
  { name: "Desktop", icon: Monitor },
];

// --- KOMPONEN ---

const PortofolioSection = forwardRef<HTMLElement>((props, ref) => {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Work") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portofolio" ref={ref} className="scroll-mt-24">

      {/* Filter Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveFilter(category.name)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
              ${
                activeFilter === category.name
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
              }`}
          >
            {category.icon && <category.icon className="h-4 w-4" />}
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-slate-800/50 rounded-lg overflow-hidden transition-all duration-300 hover:bg-slate-800/80 hover:shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={project.imageSrc}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-slate-300">{project.year}</p>
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-slate-400 flex-grow">
                {project.description}
              </p>
              {project.details && (
                <ul className="mt-2 list-disc list-inside text-sm text-slate-400">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
              {/* Tags */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tag}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
});

PortofolioSection.displayName = "PortofolioSection";
export default PortofolioSection;
