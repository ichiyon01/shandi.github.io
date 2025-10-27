// src/components/sections/ProjectsSection.tsx

import { forwardRef, useState, useMemo } from "react";
import { ArrowUpRight, Rocket, Mountain, AppWindow } from "lucide-react";

// --- DATA PROYEK (Tetap sama) ---
const PROJECTS_DATA = [
  {
    status: "Maintained",
    title: "MERVA",
    logo: Mountain,
    url: "https://example.com",
    description: "A modular ecosystem for building and deploying full-stack applications with ease. Features micro-frontend architecture and integrated development tools.",
    details: ["Micro-frontend architecture", "Integrated development tools", "Comprehensive documentation"],
    tags: ["React", "Mantine", "Vercel", "Module Federation"],
    category: "Web",
  },
  {
    status: "Completed",
    title: "Makesense.ai",
    logo: AppWindow,
    url: "https://example.com",
    description: "An advanced image annotation tool for machine learning datasets, featuring real-time collaboration and automated labeling assistance.",
    details: ["AI-powered annotation", "Real-time collaboration", "Export to multiple formats"],
    tags: ["React", "Node.js", "TensorFlow.js"],
    category: "Apps",
  },
];

const CATEGORIES = ["All", "Web", "Apps", "Libs"];

// --- KOMPONEN ---

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" ref={ref} className="scroll-mt-24">

      {/* Filter Buttons (Tetap sama) */}
      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeFilter === category ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'}`}
          >
            {category === "All" && <Rocket className="h-4 w-4" />}
            {category}
          </button>
        ))}
      </div>

      {/* --- Projects List (BAGIAN YANG DIPERBARUI) --- */}
      <div className="mt-12 flex flex-col gap-8">
        {filteredProjects.map(project => (
          // Pembungkus <a> untuk membuat seluruh kartu bisa diklik
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg p-6 transition-all duration-300 lg:hover:bg-slate-800/50 lg:hover:shadow-lg lg:hover:-translate-y-1"
          >
            {/* Status Badge */}
            <p className={`w-max px-3 py-1 text-xs font-bold rounded-full ${project.status === 'Maintained' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-slate-400/10 text-slate-400'}`}>
              {project.status.toUpperCase()}
            </p>

            {/* Title and Logo */}
            <div className="mt-4 flex justify-between items-start">
              {/* Judul tidak lagi memiliki tag <a> sendiri */}
              <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-300">
                {project.title}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </h3>
              <project.logo className="h-10 w-10 text-slate-500" />
            </div>

            {/* Description and Details */}
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
            {project.details && (
              <ul className="mt-2 list-disc list-inside text-sm text-slate-400 space-y-1">
                {project.details.map(detail => <li key={detail}>{detail}</li>)}
              </ul>
            )}

            {/* Tags */}
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <li key={tag}>
                  <div className="flex items-center rounded-full bg-slate-400/10 px-3 py-1 text-xs font-medium leading-5 text-slate-300">
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;