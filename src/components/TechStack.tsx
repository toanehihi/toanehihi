"use client";

import { useInView } from "@/hooks/useInView";

interface TechItem {
  name: string;
  color: string;
  icon?: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const TECH_STACK: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Java", color: "#007396", icon: "java" },
      { name: "Go", color: "#00ADD8", icon: "go" },
      { name: "Python", color: "#3776AB", icon: "python" },
      { name: "TypeScript", color: "#3178C6", icon: "typescript-icon" },
      { name: "C++", color: "#00599C", icon: "c-plusplus" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", color: "#6DB33F", icon: "spring-icon" },
      { name: "Spring Cloud", color: "#6DB33F", icon: "spring-icon" },
      { name: "Echo (Go)", color: "#00ADD8", icon: "go" },
      { name: "Flask", color: "#61DAFB", icon: "flask" },
      { name: "Next.js", color: "#ffffff", icon: "nextjs-icon" },
      { name: "Node.js", color: "#339933", icon: "nodejs-icon" },
    ],
  },
  {
    title: "Data & ML",
    items: [
      { name: "PostgreSQL", color: "#4169E1", icon: "postgresql" },
      { name: "MySQL", color: "#4479A1", icon: "mysql" },
      { name: "Redis", color: "#DC382D", icon: "redis" },
      { name: "Milvus", color: "#00A1EA", icon: "milvus" },
      { name: "TensorFlow", color: "#FF6F00", icon: "tensorflow" },
      { name: "HuggingFace", color: "#FFD21E", icon: "huggingface" },
      { name: "ONNX", color: "#005CED", icon: "onnx" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Docker", color: "#2496ED", icon: "docker-icon" },
      { name: "Kafka", color: "#231F20", icon: "kafka" },
      { name: "Cloudflare", color: "#F38020", icon: "cloudflare" },
      { name: "AWS", color: "#FF9900", icon: "aws" },
      { name: "Nginx", color: "#009639", icon: "nginx" },
      { name: "Git", color: "#F05032", icon: "git-icon" },
    ],
  },
];

export default function TechStack() {
  const { ref, inView } = useInView();

  return (
    <section id="stack" ref={ref} className="relative py-28 sm:py-36">
      {/* Subtle background accent */}
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase">
              02
            </span>
            <div className="section-line flex-1" />
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            Technologies I use to design, build, and deploy systems — from
            low-level concurrency to cloud-native infrastructure.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {TECH_STACK.map((category, ci) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + ci * 100}ms` }}
            >
              <h3 className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="tech-pill inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[var(--bg-card)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] border border-transparent transition-all cursor-default"
                  >
                    {tech.icon ? (
                      <img
                        src={
                          tech.icon === "milvus" || tech.icon === "huggingface" || tech.icon === "onnx"
                            ? `https://cdn.simpleicons.org/${tech.icon === "milvus" ? "milvus" : tech.icon === "huggingface" ? "huggingface" : "onnx"}/${tech.color.replace("#", "")}`
                            : `https://api.iconify.design/logos:${tech.icon}.svg`
                        }
                        alt={tech.name}
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: tech.color }}
                      />
                    )}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
