"use client";

import { useInView } from "@/hooks/useInView";

const FACTS = [
  { label: "Education", value: "PTIT \u00B7 4th Year", icon: "\u{1F393}" },
  { label: "Focus", value: "Software Engineering", icon: "\u{1F4BB}" },
  { label: "Exploring", value: "Microservices & DevOps", icon: "\u{1F680}" },
  { label: "Location", value: "Ho Chi Minh City, VN", icon: "\u{1F4CD}" },
];

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Hero() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] px-6"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.1]" />

      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Core Identity */}
          <div className={`space-y-10 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <span className="text-[10px] font-mono text-[var(--accent)] border border-[var(--accent)]/30 px-3 py-1 rounded bg-[var(--accent)]/5 tracking-[0.2em] uppercase font-bold">
                SOFTWARE ENGINEER & SYSTEMS ARCHITECT
              </span>
              <h1 className="font-[family-name:var(--font-sora)] text-7xl md:text-8xl font-bold text-[var(--text-primary)] mt-8 leading-[0.85] tracking-tighter">
                Ho Cong Toan
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mt-6 font-light leading-relaxed max-w-lg">
                Full-stack developer building <span className="text-[var(--text-primary)] font-medium">high-performance backends</span> and intelligent automation systems.
              </p>
            </div>

            <div className={`flex items-center gap-6 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="flex gap-3">
                {[
                  { icon: <GitHubIcon />, href: "https://github.com/toanehihi", label: "GitHub" },
                  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/hotoan2904/", label: "LinkedIn" },
                  { icon: <MailIcon />, href: "mailto:hctoan.dev@gmail.com", label: "Email" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <div className="h-px flex-1 bg-[var(--border)] max-w-[100px]" />
            </div>

            <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-md font-light">
              Software Engineering student at PTIT. 
              Building scalable infrastructure and optimized distributed systems.
            </p>
          </div>

          {/* Right Column: Visual & Data */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            {/* Avatar - Proportionally sized */}
            <div className="relative w-full max-w-sm aspect-[4/5] mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-[var(--border)] group">
              <img
                src="https://avatars.githubusercontent.com/u/134390104?v=4"
                alt="Ho Cong Toan"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/20 to-transparent" />
            </div>

            {/* Quote integrated under avatar */}
            <div className="max-w-sm mx-auto lg:ml-auto text-center lg:text-right px-4">
              <p className="text-[10px] font-mono italic text-[var(--accent)]/80 leading-relaxed uppercase tracking-widest">
                &ldquo;Simplicity is the soul of efficiency.&rdquo;
              </p>
              <p className="text-[9px] font-mono text-[var(--text-tertiary)] mt-1 tracking-widest uppercase">
                &mdash; Austin Freeman
              </p>
            </div>

            {/* Fact Grid - Balanced and Integrated */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:ml-auto">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="group relative p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/40 hover:border-[var(--accent)] transition-all duration-500 overflow-hidden"
                >
                  <div className="relative z-10">
                    <p className="text-[9px] uppercase tracking-widest text-[var(--text-tertiary)] font-mono font-bold">
                      {fact.label}
                    </p>
                    <p className="text-sm text-[var(--text-primary)] font-semibold mt-1">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
