import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#161717]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button
          className="w-fit text-left text-xl font-bold tracking-wide text-white"
          onClick={() => navigate("/")}
        >
          Jeet Padia
        </button>

        <nav>
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/75 sm:gap-6 sm:text-base">
            <li>
              <button className="cursor-pointer transition hover:text-white" onClick={() => navigate("/")}>
                Home
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer transition hover:text-white"
                onClick={() => navigate("/projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button className="cursor-pointer transition hover:text-white" onClick={() => navigate("/about")}>
                About Me
              </button>
            </li>
            <li>
              <button className="cursor-pointer transition hover:text-white" onClick={() => navigate("/contact")}>
                Contact
              </button>
            </li>
            <li>
              <a
                href="/jeet4resume.pdf"
                download="Jeet_Padia_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
