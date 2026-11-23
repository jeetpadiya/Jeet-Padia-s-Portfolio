import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const technicalDomains = [
  {
    layer: "L01 // AI & RETRIEVAL",
    items: ["LangChain", "RAG Pipelines", "Vector Databases", "Embeddings & Chunking", "Semantic Search"],
  },
  {
    layer: "L02 // APP ARCHITECTURE",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "TanStack Query", "State Machines"],
  },
  {
    layer: "L03 // BACKEND & DATA",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Multi-Tenant RBAC", "REST APIs"],
  },
  {
    layer: "L04 // INFRA & SYSTEMS",
    items: ["Docker", "Linux Shell", "Git Workflows", "Vercel Deployments", "API Gateways"],
  },
]

const Home = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<"rag" | "multitenant" | "telemetry">("rag")
  const [istTime, setIstTime] = useState<string>("")
  const [simulatedQueryStep, setSimulatedQueryStep] = useState<number>(0)
  const [isSimulating, setIsSimulating] = useState<boolean>(false)

  // Real-time IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now)
      setIstTime(`${formatted} IST`)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const runSimulation = () => {
    if (isSimulating) return
    setIsSimulating(true)
    setSimulatedQueryStep(1)
    setTimeout(() => setSimulatedQueryStep(2), 500)
    setTimeout(() => setSimulatedQueryStep(3), 1100)
    setTimeout(() => setSimulatedQueryStep(4), 1700)
    setTimeout(() => {
      setSimulatedQueryStep(5)
      setIsSimulating(false)
    }, 2400)
  }

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* System Status Banner */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4 font-mono text-xs text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          </span>
          <span className="text-zinc-300">NODE: AHMEDABAD_IN // WEST</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">CLOCK: {istTime || "SYNCING..."}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-amber-400">
            SYSTEM_ROLE: FULL_STACK & AI_ENGINEER
          </span>
        </div>
      </div>

      {/* Main Grid: Left Spec & Right Workbench */}
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 items-start">
        {/* Left Column: Technical Dossier Header */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400/90">
              <span>{">"}</span>
              <span className="tracking-wide uppercase">Jeet Padia // Systems & AI Engineer</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl leading-[1.15]">
              Architecting multi-tenant SaaS platforms & high-precision RAG pipelines.
            </h1>
          </div>

          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            I build scalable web software and applied AI systems. Currently developing{" "}
            <span className="text-zinc-200 font-medium">JuriDesk</span> (legal RAG context retrieval) and architecting multi-tenant portals for freight and logistics operations. Focused on low-latency data access, strict tenant isolation, and predictable state synchronization.
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
            <button
              onClick={() => navigate("/projects")}
              className="cursor-pointer inline-flex items-center gap-2 rounded border border-amber-500/80 bg-amber-500/10 px-4 py-2 font-semibold text-amber-400 transition hover:bg-amber-500/20 shadow-sm"
            >
              <span>[RUN] VIEW_DOSSIERS</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button
              onClick={() => navigate("/about")}
              className="cursor-pointer inline-flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-zinc-300 transition hover:border-zinc-700 hover:text-white"
            >
              <span>[CAT] CHANGELOG_EXP</span>
            </button>

            <a
              href="/JeetPadia_Full_Stack_Developer.pdf"
              download="JeetPadia_Full_Stack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-zinc-300 transition hover:border-zinc-700 hover:text-white"
            >
              <span>[GET] CV_SPEC.PDF</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Technical Capability Matrix (Structured Layers instead of icon clutter) */}
          <div className="pt-4">
            <div className="mb-3 flex items-center justify-between border-b border-zinc-800/80 pb-2 font-mono text-[11px] text-zinc-500">
              <span>SYSTEM_CAPABILITIES // MATRIX</span>
              <span>INDEX: 4 LAYERS</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {technicalDomains.map((domain) => (
                <div
                  key={domain.layer}
                  className="rounded border border-zinc-800/80 bg-[#0b0c0f]/80 p-3 font-mono transition hover:border-zinc-700"
                >
                  <p className="text-[10px] font-semibold tracking-wider text-amber-400/90 mb-1.5">
                    {domain.layer}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.items.map((item) => (
                      <span
                        key={item}
                        className="rounded bg-zinc-900/90 border border-zinc-800 px-1.5 py-0.5 text-[11px] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Systems Architecture Inspector (No 3D Slop) */}
        <div className="w-full">
          <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#090a0d] shadow-xl">
            {/* Inspector Top Bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-[#0c0d12] px-4 py-2.5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="font-semibold text-zinc-200">SYSTEM_INSPECTOR</span>
              </div>
              <span className="text-[10px] text-zinc-500">INTERACTIVE CONSOLE</span>
            </div>

            {/* Inspector Navigation Tabs */}
            <div className="flex border-b border-zinc-800 bg-[#07080a] font-mono text-xs">
              <button
                onClick={() => setActiveTab("rag")}
                className={`flex-1 cursor-pointer py-2 px-3 text-center transition ${
                  activeTab === "rag"
                    ? "border-b-2 border-amber-400 bg-zinc-900/40 text-amber-400 font-semibold"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                [01] RAG Pipeline
              </button>
              <button
                onClick={() => setActiveTab("multitenant")}
                className={`flex-1 cursor-pointer py-2 px-3 text-center transition ${
                  activeTab === "multitenant"
                    ? "border-b-2 border-amber-400 bg-zinc-900/40 text-amber-400 font-semibold"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                [02] Multi-Tenancy
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`flex-1 cursor-pointer py-2 px-3 text-center transition ${
                  activeTab === "telemetry"
                    ? "border-b-2 border-amber-400 bg-zinc-900/40 text-amber-400 font-semibold"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                [03] Telemetry
              </button>
            </div>

            {/* Inspector Body Content */}
            <div className="p-4 sm:p-5 font-mono">
              {/* Tab 1: RAG Architecture */}
              {activeTab === "rag" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-zinc-300 font-medium">JURIDESK // RAG RETRIEVAL ENGINE</span>
                    <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      OPTIMIZED
                    </span>
                  </div>

                  <p className="text-[11px] leading-relaxed text-zinc-400">
                    Precision pipeline engineered for Indian Labour Law context retrieval. Parses legal statutes, generates embeddings, and injects verified context into the LLM context window.
                  </p>

                  {/* Flow Steps */}
                  <div className="space-y-2 text-xs">
                    <div
                      className={`rounded border p-2.5 transition ${
                        simulatedQueryStep === 1
                          ? "border-amber-400 bg-amber-500/10 text-white"
                          : "border-zinc-800 bg-zinc-900/50 text-zinc-400"
                      }`}
                    >
                      <div className="flex justify-between text-[11px]">
                        <span>01. CORPUS INGESTION</span>
                        <span className="text-zinc-500">Labour Law Acts / PDFs</span>
                      </div>
                      <div className="mt-1 text-[10px] text-zinc-500">
                        Recursive character chunking (500 tokens, 50 token overlap)
                      </div>
                    </div>

                    <div
                      className={`rounded border p-2.5 transition ${
                        simulatedQueryStep === 2
                          ? "border-amber-400 bg-amber-500/10 text-white"
                          : "border-zinc-800 bg-zinc-900/50 text-zinc-400"
                      }`}
                    >
                      <div className="flex justify-between text-[11px]">
                        <span>02. VECTOR EMBEDDINGS</span>
                        <span className="text-zinc-500">Cosine Similarity Index</span>
                      </div>
                      <div className="mt-1 text-[10px] text-zinc-500">
                        High-dimensional semantic vector space indexing
                      </div>
                    </div>

                    <div
                      className={`rounded border p-2.5 transition ${
                        simulatedQueryStep === 3
                          ? "border-amber-400 bg-amber-500/10 text-white"
                          : "border-zinc-800 bg-zinc-900/50 text-zinc-400"
                      }`}
                    >
                      <div className="flex justify-between text-[11px]">
                        <span>03. CONTEXT RETRIEVAL</span>
                        <span className="text-emerald-400 text-[10px]">p95 &lt; 85ms</span>
                      </div>
                      <div className="mt-1 text-[10px] text-zinc-500">
                        Top-K relevant legal statute sections matched against query
                      </div>
                    </div>

                    <div
                      className={`rounded border p-2.5 transition ${
                        simulatedQueryStep >= 4
                          ? "border-amber-400 bg-amber-500/10 text-white"
                          : "border-zinc-800 bg-zinc-900/50 text-zinc-400"
                      }`}
                    >
                      <div className="flex justify-between text-[11px]">
                        <span>04. GUARDRAILED SYNTHESIS</span>
                        <span className="text-zinc-500">LangChain + LLM</span>
                      </div>
                      <div className="mt-1 text-[10px] text-zinc-500">
                        Prompt-constrained generation strictly bounded to retrieved context
                      </div>
                    </div>
                  </div>

                  {/* Interactive Simulation Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={runSimulation}
                      disabled={isSimulating}
                      className="cursor-pointer inline-flex items-center gap-1.5 rounded border border-amber-400/50 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-400 hover:bg-amber-400/20 transition disabled:opacity-50"
                    >
                      <span>{isSimulating ? "EXECUTING TRACE..." : "TRACE PIPELINE QUERY ❯"}</span>
                    </button>
                    <span className="text-[10px] text-zinc-500">
                      {simulatedQueryStep === 5 ? "SUCCESS: 200 OK" : isSimulating ? "STEP " + simulatedQueryStep + " / 4" : "READY"}
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 2: Multi-Tenancy Architecture */}
              {activeTab === "multitenant" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-zinc-300 font-medium">SOLDRIFT // MULTI-TENANT ARCHITECTURE</span>
                    <span className="text-cyan-400 text-[10px] bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                      PRODUCTION
                    </span>
                  </div>

                  <p className="text-[11px] leading-relaxed text-zinc-400">
                    Enterprise architecture engineered at Hemens Business Solution for global freight logistics. Ensures strict tenant separation, role-based workflows, and responsive state caching.
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2.5">
                      <div className="flex justify-between text-[11px] text-zinc-300">
                        <span>TENANT CONTEXT RESOLUTION</span>
                        <span className="text-zinc-500">Subdomain / Org Header</span>
                      </div>
                      <p className="mt-1 text-[10px] text-zinc-500">
                        Dynamic routing matches requests to customer database partition
                      </p>
                    </div>

                    <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2.5">
                      <div className="flex justify-between text-[11px] text-zinc-300">
                        <span>ROLE-BASED ACCESS CONTROL (RBAC)</span>
                        <span className="text-amber-400 text-[10px]">3 Distinct Portals</span>
                      </div>
                      <p className="mt-1 text-[10px] text-zinc-500">
                        Admins (System), Ops (Freight booking), Customers (Shipment tracking)
                      </p>
                    </div>

                    <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2.5">
                      <div className="flex justify-between text-[11px] text-zinc-300">
                        <span>CLIENT-SIDE QUERY CACHING</span>
                        <span className="text-emerald-400 text-[10px]">-35% Network Calls</span>
                      </div>
                      <p className="mt-1 text-[10px] text-zinc-500">
                        TanStack Query deduplication with optimistic cache updates for chat & order tracking
                      </p>
                    </div>
                  </div>

                  <div className="rounded border border-zinc-800 bg-[#07080a] p-2.5 text-[10px] text-zinc-500 flex items-center justify-between">
                    <span>SECURITY: ISO 27001 ISOLATION COMPLIANT</span>
                    <span className="text-zinc-400">MONGODB + NODE.JS</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Telemetry */}
              {activeTab === "telemetry" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-zinc-300 font-medium">SYSTEM DIAGNOSTICS & TELEMETRY</span>
                    <span className="text-emerald-400 text-[10px]">ALL SYSTEMS NOMINAL</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2">
                      <span className="text-zinc-500 text-[10px]">TARGET ROLES</span>
                      <p className="text-zinc-200 mt-0.5">Full-Stack / AI Systems</p>
                    </div>
                    <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2">
                      <span className="text-zinc-500 text-[10px]">OPERATING REGION</span>
                      <p className="text-zinc-200 mt-0.5">India (Open to Remote)</p>
                    </div>
                    <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2">
                      <span className="text-zinc-500 text-[10px]">CURRENT EDUCATION</span>
                      <p className="text-zinc-200 mt-0.5">M.Sc. IT (2025–2027)</p>
                    </div>
                    <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2">
                      <span className="text-zinc-500 text-[10px]">PAST DEGREE</span>
                      <p className="text-zinc-200 mt-0.5">B.C.A. (Grade: 72%)</p>
                    </div>
                  </div>

                  <div className="rounded border border-zinc-800 bg-[#07080a] p-3 text-[11px] space-y-1 text-zinc-400">
                    <div className="text-zinc-500 text-[10px]">SYSTEM TELEMETRY SUMMARY</div>
                    <div className="flex justify-between">
                      <span>Visitor Logging:</span>
                      <span className="text-emerald-400">MongoDB Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Core Frontend:</span>
                      <span className="text-zinc-200">React 19 + TypeScript + Vite</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Styling Engine:</span>
                      <span className="text-zinc-200">Tailwind CSS (V4)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Status Footer */}
            <div className="border-t border-zinc-800 bg-[#07080a] px-4 py-2 font-mono text-[10px] text-zinc-500 flex items-center justify-between">
              <span>BUFFER: STABLE</span>
              <span className="text-amber-400">JEET_PADIA_CORE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Production Dossiers Teaser */}
      <div className="mt-16 border-t border-zinc-800/80 pt-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-amber-400 font-semibold">[INDEX: FEATURED_PROJECTS]</span>
            <p className="text-zinc-400 text-xs mt-1">High-impact applications and retrieval engines.</p>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="cursor-pointer text-amber-400 hover:text-amber-300 transition"
          >
            VIEW ALL 6 DOSSIERS ❯
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Dossier 01: JuriDesk */}
          <div className="rounded-lg border border-zinc-800 bg-[#090a0d] p-5 font-mono transition hover:border-zinc-700">
            <div className="flex items-center justify-between text-xs text-zinc-500 pb-3 border-b border-zinc-800/80 mb-3">
              <span className="text-amber-400 font-semibold">DOSSIER_01 // JURIDESK</span>
              <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-400 border border-amber-500/20">
                AI &amp; RAG PIPELINE
              </span>
            </div>
            <h3 className="text-base font-semibold text-zinc-100 font-sans mb-2">
              Legal Retrieval-Augmented Generation Assistant
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
              High-precision document parsing and vector search pipeline in Node.js for low-latency Indian Labour Law context retrieval.
            </p>
            <div className="text-[11px] text-zinc-500 mb-3 flex flex-wrap gap-1.5">
              <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300">LangChain</span>
              <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300">Vector DB</span>
              <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300">Node.js</span>
              <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300">RAG</span>
            </div>
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="text-emerald-400 text-[11px]">STATUS: IN_DEVELOPMENT</span>
              <a
                href="https://github.com/jeetpadiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                GITHUB_SOURCE ↗
              </a>
            </div>
          </div>

          {/* Dossier 02: Talent Node */}
          <div className="rounded-lg border border-zinc-800 bg-[#090a0d] p-5 font-mono transition hover:border-zinc-700">
            <div className="flex items-center justify-between text-xs text-zinc-500 pb-3 border-b border-zinc-800/80 mb-3">
              <span className="text-cyan-400 font-semibold">DOSSIER_02 // ENTERPRISE ATS</span>
              <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-400 border border-amber-500/20">
                ENTERPRISE SAAS
              </span>
            </div>
            <h3 className="text-base font-semibold text-zinc-100 font-sans mb-2">
              Multi-Tenant Applicant Tracking System
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-3">
              Commercial recruitment platform with role-based access control (RBAC), multi-stage candidate pipeline tracking, and TanStack Query state caching.
            </p>
            <div className="mb-4 rounded border border-amber-500/20 bg-amber-500/5 p-2.5 text-[10px] text-amber-300/90">
              🔒 Proprietary company platform currently under active deployment. Public URL and source repository restricted.
            </div>
            <div className="text-[11px] text-zinc-500 mb-3 flex flex-wrap gap-1.5">
              <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300">Next.js</span>
              <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300">TanStack Query</span>
              <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300">MongoDB</span>
              <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-300">RBAC</span>
            </div>
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="text-amber-400 text-[11px]">STATUS: UNDER_DEPLOYMENT</span>
              <button
                onClick={() => navigate("/projects")}
                className="cursor-pointer text-amber-400 hover:text-amber-300 transition"
              >
                VIEW_SPECS ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
