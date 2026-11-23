import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="relative mt-20 border-t border-zinc-800 bg-[#07080a] font-mono">
      {/* Telemetry Strip */}
      <div className="border-b border-zinc-850 bg-[#090a0d] px-4 py-2 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: NOMINAL
            </span>
            <span className="text-zinc-700">|</span>
            <span>NODE: IN-WEST (AHMEDABAD)</span>
            <span className="text-zinc-700">|</span>
            <span>TIMEZONE: IST (UTC+05:30)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">STACK: REACT 19 / TS / NODE</span>
            <span className="text-zinc-700">|</span>
            <span className="text-amber-400">BUILD: v2.4.0</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-xs font-semibold text-amber-400">
                JP
              </div>
              <span className="text-sm font-semibold text-zinc-200">JEET PADIA</span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400 font-sans">
              Full-stack software engineer specializing in multi-tenant SaaS architecture, legal RAG pipelines, and high-performance web applications.
            </p>
            <div className="text-[11px] text-emerald-400">
              ● OPEN FOR FULL-TIME ROLES
            </div>
          </div>

          {/* Column 2: Index */}
          <div>
            <p className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-3">
              [INDEX // ROUTES]
            </p>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => {
                    navigate("/")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="cursor-pointer hover:text-amber-400 transition"
                >
                  [01] // OVERVIEW
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/projects")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="cursor-pointer hover:text-amber-400 transition"
                >
                  [02] // PROJECT_DOSSIERS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/about")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="cursor-pointer hover:text-amber-400 transition"
                >
                  [03] // CAREER_CHANGELOG
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/contact")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="cursor-pointer hover:text-amber-400 transition"
                >
                  [04] // DIRECT_UPLINK
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Architecture Layers */}
          <div>
            <p className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-3">
              [SYSTEM_LAYERS]
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>L1: LangChain &amp; RAG Pipelines</li>
              <li>L2: Next.js &amp; TanStack Query</li>
              <li>L3: Multi-Tenant RBAC &amp; Node</li>
              <li>L4: MongoDB &amp; PostgreSQL</li>
              <li>L5: Docker &amp; Linux Environments</li>
            </ul>
          </div>

          {/* Column 4: Uplink & Resume */}
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
              [NETWORK // CHANNELS]
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/jeetpadiya"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900/60 px-2.5 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                aria-label="GitHub Profile"
              >
                <span>GH</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jeet-padia-719557274/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900/60 px-2.5 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <span>IN</span>
              </a>
              <a
                href="mailto:jeetpadiya4@gmail.com"
                className="flex h-8 items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900/60 px-2.5 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                aria-label="Email Jeet Padia"
              >
                <span>MAIL</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="/Jeet_padia_full_stack_developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline"
              >
                <span>↓ GET CV_SPEC.PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-800/80 pt-6 sm:flex-row text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} JEET PADIA. ALL SYSTEMS RECORDED.</p>
          <div className="flex items-center gap-3">
            <span>ENGINEERED WITH REACT 19 &amp; TAILWIND</span>
            <span>•</span>
            <span className="text-zinc-400">NO AI SLOP // PURE SPEC</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
