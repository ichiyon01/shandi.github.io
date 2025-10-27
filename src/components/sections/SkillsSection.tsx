// src/components/sections/SkillsSection.tsx

import { forwardRef, useState, useMemo } from "react";
import {
  SiReact, SiTypescript, SiNodedotjs, SiGraphql, SiAmazon,
  SiDocker, SiPostgresql, SiRedis, SiTailwindcss, SiNextdotjs,
  SiPython, SiKubernetes
} from "react-icons/si";

// --- DATA ---
// Anda bisa mengedit atau menambahkan data keahlian Anda di sini
const SKILLS_DATA = [
  { name: "React", icon: SiReact, category: "Frontend", experience: "7+ yrs", level: "Expert" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages", experience: "6+ yrs", level: "Expert" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", experience: "8+ yrs", level: "Expert" },
  { name: "GraphQL", icon: SiGraphql, category: "APIs", experience: "5+ yrs", level: "Expert" },
  { name: "AWS", icon: SiAmazon, category: "Cloud", experience: "6+ yrs", level: "Expert" },
  { name: "Docker", icon: SiDocker, category: "DevOps", experience: "7+ yrs", level: "Expert" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Databases", experience: "8+ yrs", level: "Expert" },
  { name: "Redis", icon: SiRedis, category: "Databases", experience: "7+ yrs", level: "Expert" },
  { name: "TailwindCSS", icon: SiTailwindcss, category: "Frontend", experience: "6+ yrs", level: "Expert" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", experience: "6+ yrs", level: "Expert" },
  { name: "Python", icon: SiPython, category: "Languages", experience: "8+ yrs", level: "Expert" },
  { name: "Kubernetes", icon: SiKubernetes, category: "DevOps", experience: "6+ yrs", level: "Expert" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Languages", "DevOps", "Databases", "APIs", "Cloud"];


// --- KOMPONEN ---

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") {
      return SKILLS_DATA;
    }
    return SKILLS_DATA.filter(skill => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="skills" ref={ref} className="scroll-mt-24">
      {/* Filter Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
              ${activeFilter === category
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {filteredSkills.map(skill => (
          <div key={skill.name} className="flex items-center gap-4">
            <skill.icon className="h-10 w-10 text-slate-400" />
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold text-slate-200">{skill.name}</h3>
                <p className="text-sm text-slate-500">{skill.experience}</p>
              </div>
              <p className="text-sm text-slate-500">
                {skill.category} • {skill.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";
export default SkillsSection;