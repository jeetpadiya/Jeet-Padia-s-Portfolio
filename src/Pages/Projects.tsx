import { useState } from "react"

interface ProjectDossier {
  id: string
  title: string
  category: "ai" | "saas" | "utility"
  categoryLabel: string
  status: string
  statusColor: string
  description: string
  architectureHighlight: string
  stack: string[]
  liveUrl?: string
  sourceUrl?: string
  image?: string
  notice?: string
}

const dossiers: ProjectDossier[] = [
  {
    id: "DOSSIER_01",
    title: "JuriDesk — Legal RAG Assistant",
    category: "ai",
    categoryLabel: "AI & RAG PIPELINE",
    status: "IN_DEVELOPMENT",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    description:
      "A Retrieval-Augmented Generation (RAG) assistant specifically engineered for Indian Labour Law. Utilizes LangChain and vector embeddings to perform low-latency semantic search over statutory legal documents.",
    architectureHighlight:
      "Engineered recursive chunking algorithms (500 tokens / 50 overlap) with cosine similarity ranking to inject verified statutory context into the LLM, eliminating hallucination risks.",
    stack: ["LangChain", "RAG Architecture", "Vector Embeddings", "Node.js", "TypeScript"],
    sourceUrl: "https://github.com/jeetpadiya",
  },
  {
    id: "DOSSIER_02",
    title: "Talent Node — Multi-Tenant ATS",
    category: "saas",
    categoryLabel: "ENTERPRISE SAAS",
    status: "LIVE_PRODUCTION",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    description:
      "A multi-tenant Applicant Tracking System engineered to automate end-to-end hiring lifecycles. Manages tenant organization partitions, public job boards, applicant profile ingestion, and multi-stage interview workflows with dedicated access tiers for Admins, Hiring Managers, and Candidates.",
    architectureHighlight:
      "Engineered tenant data isolation in MongoDB with role-based authorization (RBAC) middleware. Implemented client-side caching and optimistic updates via TanStack Query, eliminating redundant API polling by 35% across high-frequency candidate stage transitions.",
    stack: ["Next.js", "React", "TanStack Query", "MongoDB", "RBAC Auth", "REST APIs", "Cloudinary"],
    liveUrl: "https://talent-node.vercel.app/",
    sourceUrl: "https://github.com/jeetpadiya",
  },
  {
    id: "DOSSIER_03",
    title: "Resume Analyzer & ATS Scorer",
    category: "ai",
    categoryLabel: "AI & TEXT PROCESSING",
    status: "LIVE_PRODUCTION",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    description:
      "Automated ATS resume evaluator parsing PDF and DOCX files to benchmark candidate profiles against job descriptions across skills, keywords, and domain requirements.",
    architectureHighlight:
      "Extracts structured token streams from binary document formats, executes keyword-density and requirement-matching algorithms, and outputs granular skill-gap analytics.",
    stack: ["React", "Text Extraction", "ATS Scoring Engine", "JWT Auth", "Node.js"],
    liveUrl: "https://resume-analyzer-seven-gamma.vercel.app/",
    sourceUrl: "https://github.com/jeetpadiya",
    image: "/projects/resume-analyzer.png",
  },
  {
    id: "DOSSIER_04",
    title: "BG Remover — Client Canvas Utility",
    category: "utility",
    categoryLabel: "CLIENT PROCESSING",
    status: "VERIFIED_TOOL",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    description:
      "Fast client-side background removal tool featuring instantaneous transparent canvas previewing and high-resolution image rendering.",
    architectureHighlight:
      "Processes pixel data on the client side using HTML5 Canvas API and Web Workers, avoiding server latency and bandwidth overhead.",
    stack: ["React", "HTML5 Canvas API", "Image Processing", "Tailwind CSS"],
    liveUrl: "https://bg-remover-one-gules.vercel.app/",
    sourceUrl: "https://github.com/jeetpadiya",
    image: "/projects/bg-remover.png",
  },
  {
    id: "DOSSIER_05",
    title: "Q A Master — Assessment Engine",
    category: "utility",
    categoryLabel: "INTERACTIVE ENGINE",
    status: "VERIFIED_TOOL",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    description:
      "Interactive assessment and quiz platform with dynamic topic filtering, real-time score tracking, and structured assessment analytics.",
    architectureHighlight:
      "Deterministic state engine managing question flow, instant response evaluation, and randomized topic-based assessment banks.",
    stack: ["React", "State Management", "Tailwind CSS", "Vite"],
    liveUrl: "https://q-a-master.vercel.app/",
    sourceUrl: "https://github.com/jeetpadiya",
    image: "/projects/qa-master.png",
  },
  {
    id: "DOSSIER_06",
    title: "Social Media Platform & Dashboard",
    category: "saas",
    categoryLabel: "FULL-STACK DASHBOARD",
    status: "LIVE_PRODUCTION",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    description:
      "Social communication dashboard featuring profile customization, user feeds, media uploads, and structured feed architecture.",
    architectureHighlight:
      "Modular dashboard components with real-time state updates, media optimization, and relational user interaction tracking.",
    stack: ["React", "Dashboard UI", "Feed Architecture", "REST APIs"],
    liveUrl: "https://social-media-app-zuno.vercel.app/",
    sourceUrl: "https://github.com/jeetpadiya",
    image: "/projects/social-media-app.png",
  },
]

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "ai" | "saas" | "utility">("all")

  const filtered = dossiers.filter((d) => (filter === "all" ? true : d.category === filter))

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 font-mono">
      {/* Page Header */}
      <div className="mb-8 border-b border-zinc-800 pb-6 text-left">
        <div className="flex items-center gap-2 text-xs text-amber-400 mb-2">
          <span>{">"}</span>
          <span>SYSTEM_DOSSIERS // INDEX</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl font-sans">
          Engineering Project Dossiers
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400 font-sans">
          Detailed technical specifications of live systems, RAG retrieval pipelines, enterprise multi-tenant architectures, and client-side utilities.
        </p>

        {/* Filter Navigation */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setFilter("all")}
            className={`cursor-pointer rounded border px-3 py-1.5 transition ${
              filter === "all"
                ? "border-amber-400 bg-amber-400/10 text-amber-400 font-semibold"
                : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            ALL_DOSSIERS [{dossiers.length}]
          </button>
          <button
            onClick={() => setFilter("ai")}
            className={`cursor-pointer rounded border px-3 py-1.5 transition ${
              filter === "ai"
                ? "border-amber-400 bg-amber-400/10 text-amber-400 font-semibold"
                : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            AI_&_RAG [{dossiers.filter((d) => d.category === "ai").length}]
          </button>
          <button
            onClick={() => setFilter("saas")}
            className={`cursor-pointer rounded border px-3 py-1.5 transition ${
              filter === "saas"
                ? "border-amber-400 bg-amber-400/10 text-amber-400 font-semibold"
                : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            ENTERPRISE_SAAS [{dossiers.filter((d) => d.category === "saas").length}]
          </button>
          <button
            onClick={() => setFilter("utility")}
            className={`cursor-pointer rounded border px-3 py-1.5 transition ${
              filter === "utility"
                ? "border-amber-400 bg-amber-400/10 text-amber-400 font-semibold"
                : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            UTILITIES [{dossiers.filter((d) => d.category === "utility").length}]
          </button>
        </div>
      </div>

      {/* Dossier Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((dossier) => (
          <div
            key={dossier.id}
            className="flex flex-col justify-between rounded-lg border border-zinc-800 bg-[#090a0d] p-5 transition hover:border-zinc-700 text-left"
          >
            <div>
              {/* Card Dossier Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-amber-400">{dossier.id}</span>
                  <span className="text-zinc-600">//</span>
                  <span className="text-[11px] text-zinc-400">{dossier.categoryLabel}</span>
                </div>
                <span className={`rounded border px-1.5 py-0.5 text-[10px] font-semibold ${dossier.statusColor}`}>
                  {dossier.status}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-zinc-100 font-sans mb-3">
                {dossier.title}
              </h2>

              {/* Screenshot Preview (only rendered if image exists) */}
              {dossier.image && (
                <div className="mb-4 overflow-hidden rounded border border-zinc-800 bg-black/40">
                  <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-950 px-3 py-1.5 text-[10px] text-zinc-500">
                    <span>VIEWPORT // PRODUCTION_PREVIEW</span>
                    <span className="text-zinc-600">RENDER: CLIENT_VIEW</span>
                  </div>
                  <img
                    src={dossier.image}
                    alt={`${dossier.title} interface preview`}
                    className="h-44 w-full object-cover object-top opacity-85 transition hover:opacity-100"
                  />
                </div>
              )}

              {/* Proprietary / Under Deployment Notice if applicable */}
              {dossier.notice && (
                <div className="mb-4 rounded border border-amber-500/25 bg-amber-500/5 p-3 text-[11px] text-amber-300/90">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-400 mb-1">
                    <span>🔒</span>
                    <span>RESTRICTED ACCESS // DEPLOYMENT IN PROGRESS</span>
                  </div>
                  <p className="font-sans leading-relaxed text-zinc-300">
                    {dossier.notice}
                  </p>
                </div>
              )}

              {/* System Overview */}
              <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
                {dossier.description}
              </p>

              {/* Architecture Highlight Spec */}
              <div className="mb-4 rounded border border-zinc-850 bg-zinc-950/60 p-3 text-[11px]">
                <div className="text-[10px] uppercase tracking-wider text-amber-400/80 mb-1">
                  Architecture &amp; Engineering Highlight:
                </div>
                <p className="text-zinc-300 font-sans leading-relaxed">
                  {dossier.architectureHighlight}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-5 flex flex-wrap gap-1.5 text-[10px]">
                {dossier.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between border-t border-zinc-800/80 pt-3 text-xs">
              <div className="flex items-center gap-3">
                {dossier.liveUrl && (
                  <a
                    href={dossier.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 transition"
                  >
                    <span>LAUNCH_SYSTEM</span>
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {dossier.sourceUrl && (
                  <a
                    href={dossier.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition"
                  >
                    <span>SOURCE_REPO</span>
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
                {!dossier.liveUrl && !dossier.sourceUrl && (
                  <span className="text-[11px] text-zinc-500 font-mono">
                    [CONFIDENTIAL // ACCESS RESTRICTED]
                  </span>
                )}
              </div>
              <span className="text-[10px] text-zinc-600">ID: {dossier.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
