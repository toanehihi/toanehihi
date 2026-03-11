"use client";

import { useInView } from "@/hooks/useInView";

/* ────────────────────────── Data ────────────────────────── */

interface ServiceNode {
  name: string;
  tech: string;
  lang: "java" | "go" | "python" | "ts";
  desc: string;
}

const LANG_COLORS: Record<string, string> = {
  java: "#ED8B00",
  go: "#00ADD8",
  python: "#3776AB",
  ts: "#3178C6",
};

/* ────────────────────── Sub-components ────────────────────── */

function ServiceBox({ node }: { node: ServiceNode }) {
  return (
    <div className="arch-node rounded-lg px-4 py-3 flex flex-col gap-1.5 min-w-0">
      <div className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: LANG_COLORS[node.lang] }}
        />
        <span className="text-sm font-semibold text-[var(--text-primary)] truncate">
          {node.name}
        </span>
      </div>
      <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
        {node.tech}
      </span>
      <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
        {node.desc}
      </span>
    </div>
  );
}

function InfraTag({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border)] text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider">
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

function MetricCard({
  label,
  before,
  after,
  unit,
  improvement,
}: {
  label: string;
  before: string;
  after: string;
  unit: string;
  improvement: string;
}) {
  return (
    <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)]">
      <p className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-bold text-[var(--text-primary)] font-mono">
          {after}
        </span>
        <span className="text-xs text-[var(--text-tertiary)]">{unit}</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[10px] text-[var(--text-tertiary)] line-through">
          {before}
        </span>
        <span className="text-[10px] font-mono text-emerald-400 font-medium">
          {improvement}
        </span>
      </div>
    </div>
  );
}

function ConnectorDown() {
  return (
    <div className="flex justify-center py-2">
      <div className="w-px h-6 bg-[var(--border)]" />
    </div>
  );
}

/* ────────────────────── Architecture 1: BotCV ────────────────────── */

function BotCVArchitecture() {
  const services: ServiceNode[] = [
    {
      name: "Job API",
      tech: "Spring Boot 3.5 · JPA · Flyway",
      lang: "java",
      desc: "Core REST API — job postings, employers, candidates",
    },
    {
      name: "Auth Service",
      tech: "Echo v4 · JWT · RSA · Kafka",
      lang: "go",
      desc: "OAuth2, RSA JWT tokens, refresh rotation",
    },
    {
      name: "User Service",
      tech: "Echo v4 · pgx",
      lang: "go",
      desc: "Profile management, preferences",
    },
    {
      name: "Resource Service",
      tech: "Echo v4 · Cloudinary",
      lang: "go",
      desc: "CV upload, file storage, NER extraction",
    },
  ];

  const aiService: ServiceNode = {
    name: "Search & Recommendation",
    tech: "Flask · PyMilvus · BGE-M3 · ALS",
    lang: "python",
    desc: "Hybrid search (dense + sparse vectors) and 2-stage recommendation engine",
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <h4 className="font-[family-name:var(--font-sora)] text-lg sm:text-xl font-bold text-[var(--text-primary)]">
          BotCV — Job Recruitment Platform
        </h4>
        <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--accent-dim)] text-[var(--accent-bright)] tracking-wider">
          5 SERVICES
        </span>
      </div>
      <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-2xl leading-relaxed">
        Polyglot microservice architecture spanning 3 languages. AI-powered
        recommendations via collaborative filtering + content-based vector
        similarity. Event-driven sync via Kafka.
      </p>

      {/* Architecture diagram */}
      <div className="p-4 sm:p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]">
        {/* Service layer label */}
        <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-3">
          Service Layer
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s) => (
            <ServiceBox key={s.name} node={s} />
          ))}
        </div>

        <ConnectorDown />

        {/* AI/ML Layer */}
        <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-3">
          AI / ML Layer
        </div>
        <div className="max-w-md">
          <ServiceBox node={aiService} />
        </div>

        <ConnectorDown />

        {/* Infrastructure layer */}
        <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-3">
          Infrastructure
        </div>
        <div className="flex flex-wrap gap-2">
          <InfraTag label="PostgreSQL 18" color="#4169E1" />
          <InfraTag label="Redis 7.4" color="#DC382D" />
          <InfraTag label="Milvus 2.4" color="#00A1EA" />
          <InfraTag label="Kafka" color="#E8E8E8" />
          <InfraTag label="Docker Compose" color="#2496ED" />
        </div>

        {/* Features */}
        <div className="mt-5 pt-4 border-t border-[var(--border)]">
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-[var(--text-tertiary)]">
            <span>
              <span className="text-[var(--accent)]">&#9654;</span> Hybrid
              vector search (dense + BM25 sparse)
            </span>
            <span>
              <span className="text-[var(--accent)]">&#9654;</span> ALS
              collaborative filtering + cold-start fallback
            </span>
            <span>
              <span className="text-[var(--accent)]">&#9654;</span> Event-driven
              embedding sync via Kafka
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Architecture 2: DTLN ────────────────────── */

function DTLNArchitecture() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <h4 className="font-[family-name:var(--font-sora)] text-lg sm:text-xl font-bold text-[var(--text-primary)]">
          DTLN — Real-Time Speech Enhancement
        </h4>
        <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--accent-dim)] text-[var(--accent-bright)] tracking-wider">
          ~2M PARAMS
        </span>
      </div>
      <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-2xl leading-relaxed">
        Dual-Signal Transformation LSTM Network for noise suppression, trained
        on Vietnamese speech. Deployed as a real-time WebSocket microservice for
        IoT audio processing (&lt;50ms latency).
      </p>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Pipeline diagram */}
        <div className="lg:col-span-3 p-4 sm:p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]">
          <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-4">
            Dual-Core Pipeline
          </div>

          {/* Core 1 */}
          <div className="arch-node rounded-lg p-4 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-dim)] text-[var(--accent-bright)] text-[10px] font-bold font-mono">
                1
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                STFT Domain
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-mono">
              Noisy audio → STFT → magnitude → 2×LSTM(128) → sigmoid mask →
              masked magnitude → iFFT
            </p>
          </div>

          <div className="flex justify-center py-1">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.5"
            >
              <line x1="8" y1="0" x2="8" y2="16" />
              <path d="M4 12l4 6 4-6" />
            </svg>
          </div>

          {/* Core 2 */}
          <div className="arch-node rounded-lg p-4 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-dim)] text-[var(--accent-bright)] text-[10px] font-bold font-mono">
                2
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                Learned Transform Domain
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-mono">
              Conv1D encoder → InstantLayerNorm → 2×LSTM(128) → sigmoid mask →
              Conv1D decoder → overlap-add
            </p>
          </div>

          <div className="flex justify-center py-1">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.5"
            >
              <line x1="8" y1="0" x2="8" y2="16" />
              <path d="M4 12l4 6 4-6" />
            </svg>
          </div>

          {/* Output */}
          <div className="rounded-lg p-3 border border-emerald-500/30 bg-emerald-500/5 text-center">
            <span className="text-xs font-mono text-emerald-400 font-medium">
              Clean Audio Output → WebSocket Stream
            </span>
          </div>

          {/* Params */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[10px] font-mono text-[var(--text-tertiary)]">
            <span>16kHz sample rate</span>
            <span>512 block / 128 hop</span>
            <span>Neg-SNR loss</span>
            <span>Adam + clip(3.0)</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="lg:col-span-2 space-y-3">
          <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-1">
            Evaluation Metrics
          </div>
          <MetricCard
            label="Signal-to-Noise Ratio"
            before="10.08 dB"
            after="14.57"
            unit="dB"
            improvement="+4.49 dB"
          />
          <MetricCard
            label="SI-SDR"
            before="9.81 dB"
            after="14.77"
            unit="dB"
            improvement="+4.97 dB"
          />
          <MetricCard
            label="PESQ"
            before="1.48"
            after="2.01"
            unit=""
            improvement="+0.53"
          />
          <MetricCard
            label="STOI"
            before="0.854"
            after="0.898"
            unit=""
            improvement="+0.044"
          />
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Main Section ────────────────────── */

export default function Experience() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: botcvRef, inView: botcvInView } = useInView(0.05);
  const { ref: dtlnRef, inView: dtlnInView } = useInView(0.05);

  return (
    <section id="systems" className="relative py-28 sm:py-36">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase">
              03
            </span>
            <div className="section-line flex-1" />
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold tracking-tight">
            Systems & Architecture
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base max-w-2xl">
            What I&apos;ve designed and built — distributed backends,
            ML pipelines, cloud infrastructure, and security systems.
          </p>
        </div>

        {/* Architectures */}
        <div className="space-y-20">
          <div
            ref={botcvRef}
            className={`transition-all duration-700 ${
              botcvInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <BotCVArchitecture />
          </div>

          <div className="section-line-accent" />

          <div
            ref={dtlnRef}
            className={`transition-all duration-700 ${
              dtlnInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <DTLNArchitecture />
          </div>
        </div>
      </div>
    </section>
  );
}
