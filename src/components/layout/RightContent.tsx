"use client";

import { AnimatePresence, motion } from "framer-motion";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import SkillsSection from "../sections/SkillsSection";
import PortofolioSection from "../sections/PortofolioSection";
import SectionHeader from "../../../components/ui/SectionHeader";

type SectionName = "about" | "experience" | "skills" | "portofolio" | "projects";

interface RightContentProps {
  activeSection: SectionName;
}

export default function RightContent({ activeSection }: RightContentProps) {
  return (
    <div
      id="right-content"
      className="w-full lg:w-1/2 lg:py-24 lg:h-screen lg:overflow-y-auto"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection} // supaya animasi transisi antar section tetap aktif
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-10"
        >
          {activeSection === "about" && (
            <section id="about" className="min-h-screen">
              <SectionHeader title="About" />
              <AboutSection />
            </section>
          )}

          {activeSection === "experience" && (
            <section id="experience" className="min-h-screen">
              <SectionHeader title="Experience" />
              <ExperienceSection />
            </section>
          )}

          {activeSection === "skills" && (
            <section id="skills" className="min-h-screen">
              <SectionHeader title="Skills" />
              <SkillsSection />
            </section>
          )}

          {activeSection === "portofolio" && (
            <section id="portofolio" className="min-h-screen">
              <SectionHeader title="Portofolio" />
              <PortofolioSection />
            </section>
          )}

          {activeSection === "projects" && (
            <section id="projects" className="min-h-screen">
              <SectionHeader title="Projects" />
              <ProjectsSection />
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
