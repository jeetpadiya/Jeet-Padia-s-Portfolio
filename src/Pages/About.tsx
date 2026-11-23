const workLogs = [
  {
    period: "2026.07 — PRESENT",
    role: "Full-Stack Developer",
    company: "Hemens Business Solution",
    location: "Ahmedabad, India",
    system: "Soldrift — Multi-Tenant Logistics Platform",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "TanStack Query", "REST APIs"],
    metrics: ["Multi-tenant isolation", "Real-time shipment chat", "Optimized state cache"],
    details: [
      "Engineered multi-tenant architecture for global freight logistics (Soldrift), supporting dedicated role-based portals for System Administrators, Operations Personnel, and Enterprise Customers.",
      "Developed high-throughput customer portals for instant shipment booking, commercial documentation, financial ledgers, and live milestone tracking.",
      "Implemented an integrated real-time shipment messaging module and optimized client-side server state using TanStack Query to synchronize tracking updates smoothly.",
    ],
  },
  {
    period: "2026.01 — 2026.06",
    role: "React.js Developer Intern",
    company: "Potenz Technology",
    location: "Ahmedabad, India",
    system: "Enterprise Applicant Tracking System (ATS)",
    stack: ["React.js", "JavaScript", "TanStack Query", "Tailwind CSS", "REST APIs"],
    metrics: ["15+ production components", "-35% redundant network calls", "+20% velocity"],
    details: [
      "Engineered 15+ reusable, accessible UI modules for a commercial Applicant Tracking System, accelerating core product feature velocity by 20%.",
      "Redesigned data-fetching workflows using TanStack Query caching and request deduplication, reducing redundant API round-trips by 35% and improving overall dashboard responsiveness.",
      "Collaborated with backend engineers to standardize JSON API contracts and ensure predictable client-side error handling.",
    ],
  },
]

const educationLogs = [
  {
    period: "2025 — 2027",
    degree: "Master of Science in Information Technology (M.Sc. IT)",
    institution: "Saurashtra University",
    location: "Rajkot, Gujarat, India",
    focus: "Advanced Software Engineering, Distributed Systems & Database Architecture",
    status: "CURRENTLY_ENROLLED",
  },
  {
    period: "2022 — 2025",
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Saurashtra University",
    location: "Jetpur, Gujarat, India",
    focus: "Core Computer Science, Algorithms, Web Development & Database Management",
    status: "COMPLETED",
    grade: "72% Aggregate",
  },
]

const systemCompetencies = [
  {
    layer: "L1: AI & RETRIEVAL SYSTEMS",
    skills: [
      { name: "LangChain", level: "Active Development", note: "Chains, prompt templates & agentic flows" },
      { name: "RAG Architectures", level: "Production", note: "Chunking, vector embeddings & context bounds" },
      { name: "Vector Databases", level: "Active Development", note: "Cosine similarity search & indexing" },
      { name: "Document Parsers", level: "Production", note: "PDF / DOCX text extraction pipelines" },
    ],
  },
  {
    layer: "L2: APPLICATION & CLIENT SYSTEMS",
    skills: [
      { name: "Next.js (App Router)", level: "Production", note: "Server components, routing & SSR/SSG" },
      { name: "React 19 & TypeScript", level: "Production", note: "Type-safe component design & hooks" },
      { name: "TanStack Query", level: "Advanced", note: "Optimistic updates, cache invalidation" },
      { name: "Tailwind CSS", level: "Advanced", note: "Design systems & responsive layout engines" },
    ],
  },
  {
    layer: "L3: BACKEND & DATA ARCHITECTURE",
    skills: [
      { name: "Node.js & Express", level: "Production", note: "RESTful microservices & middleware" },
      { name: "MongoDB", level: "Production", note: "Schema design, aggregation & index tuning" },
      { name: "SQL (Postgres/MySQL)", level: "Working Knowledge", note: "Relational modeling & transactions" },
      { name: "Authentication / RBAC", level: "Production", note: "JWT, session lifecycle, role policies" },
    ],
  },
  {
    layer: "L4: TOOLING & INFRASTRUCTURE",
    skills: [
      { name: "Docker", level: "Working Knowledge", note: "Containerized dev & deployment specs" },
      { name: "Linux / POSIX Shell", level: "Working Knowledge", note: "CLI automation & system navigation" },
      { name: "Git / GitHub", level: "Advanced", note: "Branch workflows, code reviews & PRs" },
      { name: "Vercel / Cloudinary", level: "Production", note: "Edge hosting & dynamic media pipelines" },
    ],
  },
]

const About = () => {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 font-mono">
      {/* Header */}
      <div className="mb-10 border-b border-zinc-800 pb-6 text-left">
        <div className="flex items-center gap-2 text-xs text-amber-400 mb-2">
          <span>{">"}</span>
          <span>OPERATOR_DOSSIER // BACKGROUND &amp; CAPABILITIES</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl font-sans">
          Engineering Background &amp; Changelog
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400 font-sans">
          A verifiable record of industry experience, platform architectures, engineering competencies, and academic credentials.
        </p>
      </div>

      {/* Operator Profile Overview */}
      <div className="mb-12 rounded-lg border border-zinc-800 bg-[#090a0d] p-6 text-left">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-3 mb-4 text-xs">
          <span className="text-amber-400 font-semibold">PROFILE // JEET PADIA</span>
          <span className="text-zinc-500 text-[11px]">ROLE: FULL-STACK &amp; AI SYSTEMS ENGINEER</span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-300 font-sans">
          I am a software engineer focused on building robust full-stack applications and precision AI retrieval workflows. My experience spans building multi-tenant SaaS logistics systems at Hemens Business Solution, component-driven UI for ATS software at Potenz Technology, and self-directed RAG architectures like JuriDesk. I prioritize deterministic state, low network latency, clean API contracts, and predictable software behavior over superficial visual gimmicks.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 pt-2 border-t border-zinc-800/60 text-xs">
          <div>
            <span className="text-zinc-500">LOCATION: </span>
            <span className="text-zinc-300">Ahmedabad, Gujarat, India</span>
          </div>
          <span className="text-zinc-750">|</span>
          <div>
            <span className="text-zinc-500">STATUS: </span>
            <span className="text-emerald-400">Available for Full-time Roles / Projects</span>
          </div>
          <span className="text-zinc-750">|</span>
          <div>
            <span className="text-zinc-500">PRIMARY STACK: </span>
            <span className="text-zinc-300">Next.js / Node.js / LangChain / MongoDB</span>
          </div>
        </div>
      </div>

      {/* Section 1: Professional Experience Logs */}
      <div className="mb-12 text-left">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-2 text-xs">
          <span className="text-amber-400 font-semibold">[01] PRODUCTION_LOGS // INDUSTRY EXPERIENCE</span>
          <span className="text-zinc-500">2 POSITIONS RECORDED</span>
        </div>

        <div className="space-y-6">
          {workLogs.map((log, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-zinc-800 bg-[#090a0d] p-5 sm:p-6 transition hover:border-zinc-700"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-amber-400 font-semibold">
                    {log.period}
                  </span>
                  <span className="text-zinc-500">//</span>
                  <span className="font-semibold text-zinc-200">{log.company}</span>
                </div>
                <span className="text-zinc-500 text-[11px]">{log.location}</span>
              </div>

              <div className="mb-3">
                <h2 className="text-base font-semibold text-zinc-100 font-sans">
                  {log.role}
                </h2>
                <p className="text-xs text-amber-400/80 mt-0.5">{log.system}</p>
              </div>

              {/* Metric Highlights */}
              <div className="mb-4 flex flex-wrap gap-2 text-[10px]">
                {log.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-emerald-300"
                  >
                    ✦ {m}
                  </span>
                ))}
              </div>

              {/* Detailed Points */}
              <ul className="space-y-2 text-xs text-zinc-400 font-sans leading-relaxed mb-4 list-disc list-inside">
                {log.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5 text-[10px]">
                <span className="text-zinc-500 py-0.5 mr-1">STACK:</span>
                {log.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Technical Competencies Matrix */}
      <div className="mb-12 text-left">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-2 text-xs">
          <span className="text-amber-400 font-semibold">[02] CAPABILITY_SPEC // SYSTEM COMPETENCIES</span>
          <span className="text-zinc-500">4 LAYERS</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {systemCompetencies.map((comp) => (
            <div
              key={comp.layer}
              className="rounded-lg border border-zinc-800 bg-[#090a0d] p-5 transition hover:border-zinc-700"
            >
              <div className="border-b border-zinc-800/80 pb-2 mb-3 text-xs font-semibold text-amber-400">
                {comp.layer}
              </div>

              <div className="space-y-3">
                {comp.skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded border border-zinc-850 bg-zinc-950/50 p-2.5 text-xs"
                  >
                    <div>
                      <span className="text-zinc-200 font-semibold">{s.name}</span>
                      <p className="text-[10px] text-zinc-500 font-sans">{s.note}</p>
                    </div>
                    <span className="rounded bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400 self-start sm:self-auto">
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Academic Credentials */}
      <div className="mb-12 text-left">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-2 text-xs">
          <span className="text-amber-400 font-semibold">[03] ACADEMIC_CREDENTIALS // EDUCATION</span>
          <span className="text-zinc-500">SAURASHTRA UNIVERSITY</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {educationLogs.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-zinc-800 bg-[#090a0d] p-5 transition hover:border-zinc-700"
            >
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-3 text-xs">
                <span className="text-amber-400">{edu.period}</span>
                <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                  {edu.status}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-zinc-100 font-sans mb-1">
                {edu.degree}
              </h3>
              <p className="text-xs text-zinc-400">{edu.institution} • {edu.location}</p>
              <p className="mt-2 text-[11px] text-zinc-500 font-sans">{edu.focus}</p>
              {edu.grade && (
                <div className="mt-3 pt-2 border-t border-zinc-800/80 text-xs text-emerald-400">
                  ACADEMIC SCORE: {edu.grade}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Download Bar */}
      <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div>
          <h4 className="text-sm font-semibold text-zinc-100 font-sans">
            Need a standard one-page engineering résumé?
          </h4>
          <p className="text-xs text-zinc-400 font-sans mt-0.5">
            Download the official PDF document formatted for ATS and recruiter screening.
          </p>
        </div>
        <a
          href="/JeetPadia_Full_Stack_Developer.pdf"
          download="JeetPadia_Full_Stack_Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-flex items-center gap-2 rounded border border-amber-500/80 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-400 hover:bg-amber-500/20 transition whitespace-nowrap"
        >
          <span>GET CV_SPEC.PDF</span>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default About
