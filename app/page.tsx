"use client";

import { useState, useEffect, useRef } from "react";
import LeftSidebar from "@/src/components/layout/LeftSidebar";
import AboutSection from "@/src/components/sections/AboutSection";
import ProjectsSection from "@/src/components/sections/ProjectsSection";
import ExperienceSection from "@/src/components/sections/ExperienceSection";
import SkillsSection from "@/src/components/sections/SkillsSection";
import PortofolioSection from "@/src/components/sections/PortofolioSection";
import SectionHeader from "../components/ui/SectionHeader";

export type SectionId =
  | "about"
  | "experience"
  | "skills"
  | "portofolio"
  | "projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [manualActive, setManualActive] = useState(false);

  // Refs untuk setiap section
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const portofolioRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  // Handler klik menu sidebar
  const handleMenuClick = (section: SectionId) => {
    setManualActive(true);
    setActiveSection(section);

    const sectionRef = {
      about: aboutRef,
      experience: experienceRef,
      skills: skillsRef,
      portofolio: portofolioRef,
      projects: projectsRef,
    }[section];

    const container = document.getElementById("right-content");
    const isMobile = window.innerWidth < 1024; // breakpoint lg

    if (sectionRef.current) {
      const element = sectionRef.current;

      if (isMobile) {
        // 🔹 Scroll pakai window di mobile
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (container) {
        // 🔹 Scroll pakai container di desktop
        const elementTop =
          element.getBoundingClientRect().top -
          container.getBoundingClientRect().top +
          container.scrollTop;
        const offset = container.clientHeight * 0.1;
        container.scrollTo({
          top: elementTop - offset,
          behavior: "smooth",
        });
      }
    }

    // 🔹 Tunda agar observer tidak langsung override manual
    setTimeout(() => setManualActive(false), 1200);
  };

  // Observer untuk mendeteksi section aktif
  useEffect(() => {
    const sectionRefs = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "skills", ref: skillsRef },
      { id: "portofolio", ref: portofolioRef },
      { id: "projects", ref: projectsRef },
    ];

    const isMobile = window.innerWidth < 1024;
    const container = document.getElementById("right-content");

    const observer = new IntersectionObserver(
      (entries) => {
        if (manualActive) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const id = visible.target.id as SectionId;
          if (id !== activeSection) setActiveSection(id);
        }
      },
      {
        root: isMobile ? null : container,
        threshold: [0.3, 0.6, 0.9],
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      observer.disconnect();
    };
  }, [manualActive, activeSection]);

  return (
    <main className="relative flex min-h-screen flex-col bg-slate-900 lg:flex-row">
      {/* Sidebar */}
      <LeftSidebar
        activeSection={activeSection}
        setActiveSection={handleMenuClick}
      />

      {/* Konten kanan */}
      <div
        id="right-content"
        className="w-full pt-24 lg:w-2/3 lg:py-24 lg:pr-24 lg:h-screen lg:overflow-y-auto"
      >
        <div id="content" className="flex flex-col gap-20 px-8 md:px-32">
          <section ref={aboutRef} id="about" className="py-8 md:py-8 scroll-mt-24">
            <SectionHeader title="About" />
            <AboutSection />
          </section>

          <section ref={experienceRef} id="experience" className="py-8 md:py-8 scroll-mt-24">
            <SectionHeader title="Experience" />
            <ExperienceSection />
          </section>

          <section ref={skillsRef} id="skills" className="py-8 md:py-8 scroll-mt-24">
            <SectionHeader title="Skills" />
            <SkillsSection />
          </section>

          <section ref={portofolioRef} id="portofolio" className="py-8 md:py-8 scroll-mt-24">
            <SectionHeader title="Portofolio" />
            <PortofolioSection />
          </section>

          <section ref={projectsRef} id="projects" className="py-8 md:py-8 scroll-mt-24">
            <SectionHeader title="Projects" />
            <ProjectsSection />
          </section>
        </div>
      </div>
    </main>
  );
}
