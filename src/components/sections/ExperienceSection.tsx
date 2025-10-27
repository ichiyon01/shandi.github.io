import { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

// --- DATA ---
// You can move this to a separate file, e.g., src/lib/data.ts
const EXPERIENCE_DATA = [
  {
    date: "APR 2025 - PRESENT",
    role: "Senior Frontend Developer",
    company: "Qlola Cash Management - BRI",
    url: "https://example.com", // Link to the company or project
    description: "Led comprehensive optimization and performance initiatives—enhancing Module Federation, reducing bundle size, and improving user experience. Achieved up to 20× faster development and runtime performance for a trilingual web application.",
    tags: ["TypeScript", "React", "Module Federation", "Next.js 13"],
  },
  {
    date: "SEPT 2024 - MAR 2025",
    role: "Middle Frontend Developer",
    company: "MyPertamina",
    url: "https://example.com",
    description: "Leading frontend development initiatives for energy subsidiary information platform. Architecting scalable frontend solutions for enterprise-level energy management systems while implementing best practices for code quality and performance optimization.",
    tags: ["TypeScript", "React", "NextJS", "Micro-frontends", "Clean Architecture"],
  },
  {
    date: "JUL 2023 - SEPT 2024",
    role: "Middle Frontend Developer",
    company: "Logee",
    url: "https://example.com",
    description: "Architected and implemented a modular SaaS platform using Micro Frontend architecture, resulting in 40% improved development efficiency. Designed and developed a flexible data table system with dynamic schemas, reducing code duplication by 30%.",
    tags: ["TypeScript", "React", "Module Federation", "Webpack 5", "DDD"],
  },
];

// --- COMPONENT ---

const ExperienceSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="experience" ref={ref} className="scroll-mt-24">
      {/* <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200">
        Experience
      </h2> */}
      
      <div className="mt-8 flex flex-col gap-12">
        {EXPERIENCE_DATA.map((exp, index) => (
          <a
            key={index}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid transition-all sm:grid-cols-8 sm:gap-8 lg:gap-16 hover:!opacity-100 lg:hover:bg-slate-800/50 p-4 rounded-md"
          >
            {/* LEFT - DATE */}
            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {exp.date}
              </p>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="sm:col-span-6">
              <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-300">
                {exp.role} · {exp.company}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {exp.description}
              </p>
              
              {/* TAGS */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>
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

ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;