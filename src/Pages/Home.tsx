import { useNavigate } from "react-router-dom"
import Hero3DCore from "../components/3d/Hero3DCore"

const techStack = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "LangChain & RAG", icon: "https://cdn.simpleicons.org/langchain/FFFFFF" },
  { name: "Vector DBs", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "TanStack Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col-reverse items-center justify-center gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
      {/* Left Column: Bio & Core Info */}
      <div className="w-full max-w-xl text-left">
        {/* Status Pill */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-[11px] text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          <span>Full-Stack & AI Systems Developer</span>
        </div>

        {/* Clear, Human Headline */}
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-5xl leading-[1.15]">
          Building multi-tenant SaaS platforms & AI-driven applications.
        </h1>

        <p className="mb-8 text-base leading-7 text-zinc-400 sm:text-lg">
          I’m Jeet Padia. I specialize in Next.js, React, Node.js, and Retrieval-Augmented Generation (RAG) pipelines with LangChain and vector embeddings.
        </p>

        {/* Minimalist Tech Badges */}
        <div className="mb-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
            Stack & AI Tooling
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <span
                key={item.name}
                className="group inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/40 px-2.5 py-1 text-xs text-zinc-300 transition-all duration-150 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-3 w-3 object-contain opacity-70 transition-opacity group-hover:opacity-100"
                />
                <span className="font-mono text-[11px]">{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Clean Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 transition hover:bg-white shadow-sm"
            onClick={() => navigate("/projects")}
          >
            Explore Projects & AI Tools
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            onClick={() => navigate("/about")}
          >
            Experience & Education
          </button>
        </div>
      </div>

      {/* Right Column: Refined 3D Geometry Showcase */}
      <div className="flex w-full justify-center lg:justify-end">
        <div className="relative w-full max-w-md">
          {/* Card Frame */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0c0d0f]/90 p-5 shadow-2xl backdrop-blur-xl">
            {/* Header Status Bar */}
            <div className="mb-2 flex items-center justify-between border-b border-zinc-800/80 pb-3 font-mono text-[11px] text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span className="uppercase tracking-wider">Artifact 01</span>
              </div>
              <span className="text-zinc-600">3D Studio Mesh</span>
            </div>

            {/* 3D Viewport */}
            <div className="relative flex flex-col items-center justify-center">
              <Hero3DCore />
            </div>

            {/* Subtle Spec Footer */}
            <div className="mt-3 flex items-center justify-between border-t border-zinc-800/80 pt-3 font-mono text-[11px] text-zinc-500">
              <span>SaaS • RAG / AI • Next.js</span>
              <span className="text-zinc-600">Interaction: Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
