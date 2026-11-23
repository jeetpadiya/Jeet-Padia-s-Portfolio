import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const navItems = [
  { id: "01", name: "OVERVIEW", path: "/" },
  { id: "02", name: "DOSSIERS", path: "/projects" },
  { id: "03", name: "CHANGELOG", path: "/about" },
  { id: "04", name: "UPLINK", path: "/contact" },
]

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (path: string) => {
    navigate(path)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#07080a]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / System Node ID */}
        <button
          className="group flex cursor-pointer items-center gap-3 text-left transition"
          onClick={() => handleNavClick("/")}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded border border-zinc-800 bg-zinc-900/90 font-mono text-xs font-semibold text-amber-400 transition-colors group-hover:border-amber-400/50">
            JP
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold tracking-wider text-zinc-200 group-hover:text-white transition-colors">
              JEET_PADIA<span className="text-zinc-600">.SYS</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links (Command Tabs) */}
        <nav className="hidden md:flex items-center gap-1 rounded border border-zinc-800/80 bg-zinc-900/50 p-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`cursor-pointer rounded px-3 py-1 font-mono text-xs transition-all duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-zinc-800 text-amber-400 shadow-sm border border-zinc-700 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                <span className="text-[10px] opacity-60">[{item.id}]</span>
                <span>{item.name}</span>
              </button>
            )
          })}
        </nav>

        {/* Action Controls & Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/jeetpadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900/40 px-2.5 py-1 font-mono text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition"
          >
            <span className="text-zinc-500">gh/</span>jeetpadiya
          </a>

          <a
            href="/JeetPadia_Full_Stack_Developer.pdf"
            download="JeetPadia_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-400 hover:bg-amber-500/20 transition"
          >
            <span>CV_SPEC.PDF</span>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-8 w-8 items-center justify-center rounded border border-zinc-800 bg-zinc-900 font-mono text-xs text-zinc-400 md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-800/80 bg-[#07080a] p-4 md:hidden font-mono">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center justify-between rounded px-3 py-2 text-xs text-left transition ${
                    isActive ? "bg-zinc-800 text-amber-400 border border-zinc-700" : "text-zinc-400 hover:bg-zinc-900"
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-zinc-600">[{item.id}]</span>
                </button>
              )
            })}
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
              <a
                href="/JeetPadia_Full_Stack_Developer.pdf"
                download="JeetPadia_Full_Stack_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 py-1"
              >
                DOWNLOAD CV_SPEC.PDF ↗
              </a>
              <span className="text-[11px] text-zinc-500">v2.4.0</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
