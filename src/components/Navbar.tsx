import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
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
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#08090a]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <button
          className="group flex cursor-pointer items-center gap-3 text-left transition"
          onClick={() => handleNavClick("/")}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/90 font-mono text-xs font-semibold text-zinc-300 transition-colors group-hover:border-zinc-700 group-hover:text-white">
            JP
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
              Jeet Padia
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-2 py-0.5 text-[11px] font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
              available
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/40 p-1 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-zinc-800 text-white shadow-sm border border-zinc-700/60 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                }`}
              >
                {item.name}
              </button>
            )
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/Jeet_padia_full_stack_developer.pdf"
            download="Jeet_padia_full_stack_developer.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#08090a]/95 px-4 pt-2 pb-4 backdrop-blur-2xl">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${
                    isActive
                      ? "bg-zinc-800 text-white font-semibold"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />}
                </button>
              )
            })}
            <a
              href="/Jeet_padia_full_stack_developer.pdf"
              download="Jeet_padia_full_stack_developer.pdf"
              className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 py-2 text-xs font-medium text-zinc-300"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
