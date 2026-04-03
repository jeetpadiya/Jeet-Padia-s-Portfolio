import { useNavigate } from "react-router-dom"

const techStack = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col-reverse items-center justify-center gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-16">
      <div className="w-full max-w-xl text-center lg:text-left">
        <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
          MERN Stack Developer
        </span>
        <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Building responsive web apps that feel fast and polished.
        </h1>
        <p className="mb-8 text-base leading-7 text-white/70 sm:text-lg">
          I create modern full-stack applications with clean UI, practical features, and a strong focus on user
          experience. Explore some of the projects I have built and deployed.
        </p>
        <div className="mb-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {techStack.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
              >
                <img src={item.icon} alt={`${item.name} icon`} className="h-4 w-4 object-contain" />
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <button
            className="w-full rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
            onClick={() => navigate("/about")}
          >
            View My Experience
          </button>
          <button
            className="w-full rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
            onClick={() => navigate("/projects")}
          >
            See Live Projects
          </button>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/30 sm:p-6">
          <div className="absolute inset-0 -z-10 rounded-4xl bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20 blur-2xl" />
          <img
            src="/jeet-portrait.png"
            alt="Jeet Padia portrait"
            className="mx-auto max-h-[560px] w-full rounded-[2rem] object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
