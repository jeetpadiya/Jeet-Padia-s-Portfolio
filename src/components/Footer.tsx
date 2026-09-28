import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="relative mt-24 border-t border-zinc-800/80 bg-[#08090a]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 font-mono text-xs font-semibold text-zinc-300">
                JP
              </div>
              <span className="text-sm font-semibold tracking-tight text-zinc-200">Jeet Padia</span>
            </div>
            <p className="text-xs leading-5 text-zinc-400">
              Full-stack engineer specializing in Next.js, Node.js, multi-tenant SaaS, and RAG/AI pipelines with LangChain.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Index</p>
            <ul className="mt-3 space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => {
                    navigate("/")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/projects")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Projects & AI Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/about")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  About & Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/contact")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Stack */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Stack</p>
            <ul className="mt-3 space-y-1.5 text-xs text-zinc-400 font-mono">
              <li>Next.js & React 19</li>
              <li>LangChain & RAG</li>
              <li>Vector DBs & Embeddings</li>
              <li>Node.js & Express</li>
              <li>TanStack Query & TS</li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Network</p>
            <div className="flex gap-2">
              <a
                href="https://github.com/jeetpadiya"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.38c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.08-.73.08-.72.08-.72 1.2.08 1.83 1.2 1.83 1.2 1.05 1.8 2.76 1.28 3.43.98.1-.75.42-1.27.75-1.56-2.67-.3-5.47-1.3-5.47-5.9 0-1.3.47-2.37 1.22-3.2-.12-.3-.53-1.52.12-3.16 0 0 1-.31 3.3 1.22a11.76 11.76 0 0 1 6 0c2.3-1.53 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.76.83 1.22 1.9 1.22 3.2 0 4.61-2.8 5.6-5.48 5.9.43.37.81 1.08.81 2.2v3.26c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jeet-padia-719557274/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3Zm15.19 9.87c0-3.46-1.85-5.07-4.32-5.07a3.75 3.75 0 0 0-3.37 1.86V8.5H9.38V20h3.37v-6.2c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.3V20h3.34v-7.13Z" />
                </svg>
              </a>
              <a
                href="mailto:jeetpadiya4@gmail.com"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                aria-label="Email"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <a
              href="/Jeet_padia_full_stack_developer.pdf"
              download="Jeet_padia_full_stack_developer.pdf"
              className="inline-block text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              ↓ download resume.pdf
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-800/80 pt-6 sm:flex-row text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Jeet Padia. All rights reserved.</p>
          <p>Designed with craft & simplicity</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
