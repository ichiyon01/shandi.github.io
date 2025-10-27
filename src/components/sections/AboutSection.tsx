import { forwardRef } from "react";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="about" ref={ref} className="p-4 md:p-4">
      <p className="mt-6 leading-relaxed text-slate-400">
        Hello! My name is <span className="text-white font-semibold">Shandi Adhitya</span>, and I am an{" "}
        <span className="text-white">AI Engineer</span>,{" "}
        <span className="text-white">Fullstack Data Scientist</span>, and{" "}
        <span className="text-white">Network Engineer</span>. I’m passionate about creating intelligent,
        data-driven systems that are powerful, scalable, and reliable — blending AI innovation with strong
        system architecture.
      </p>

      <p className="mt-4 leading-relaxed text-slate-400">
        My journey began in network engineering, where I developed a solid understanding of infrastructure
        stability, performance, and security. Over time, my curiosity about automation and data optimization
        led me into the field of data science and artificial intelligence, bridging the gap between technical
        networks and intelligent decision-making systems.
      </p>

      <p className="mt-4 leading-relaxed text-slate-400">
        I specialize in building end-to-end AI solutions — from data preprocessing and model training to
        deployment and integration into fullstack web applications. My core expertise includes{" "}
        <strong>Machine Learning</strong> (Python, TensorFlow, PyTorch),{" "}
        <strong>Data Engineering</strong> (Pandas, SQL, API integration),{" "}
        <strong>Fullstack Development</strong> (Next.js, Node.js, React, TypeScript), and{" "}
        <strong>Network Infrastructure</strong> (MikroTik, Cisco, NOC Operations).
      </p>

      <p className="mt-4 leading-relaxed text-slate-400">
        I believe technology’s true strength lies in integration — connecting networks, data, and intelligent
        systems to create seamless and secure ecosystems. I’m driven by continuous learning, collaboration,
        and curiosity to craft solutions that are not only smart and efficient, but also impactful and
        sustainable.
      </p>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
