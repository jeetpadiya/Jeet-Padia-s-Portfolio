import Tilt3DCard from "../components/3d/Tilt3DCard"

const projects = [
  {
    title: "JuriDesk — Legal RAG Assistant",
    category: "AI & LLM Pipeline",
    badge: "In Progress",
    description: "A Retrieval-Augmented Generation (RAG) assistant for Indian Labour Law using LangChain and vector embeddings. Developing high-precision document parsing and vector search pipelines in Node.js for low-latency legal context retrieval.",
    link: "https://github.com/jeetpadiya",
    stack: "LangChain • RAG • Vector Embeddings • Node.js",
    image: null,
    isAi: true,
  },
  {
    title: "Talent Node — Multi-Tenant ATS",
    category: "Enterprise SaaS",
    badge: "Featured",
    description: "Architected a multi-tenant Applicant Tracking System supporting public job postings, candidate applications, and end-to-end pipeline management with role-based access control (RBAC), Cloudinary uploads, and TanStack Query caching.",
    link: "https://atsflowemployer.vercel.app",
    stack: "Next.js • React • RBAC • TanStack Query • MongoDB",
    image: "/projects/ats-flow-employer.png",
    isAi: false,
  },
  {
    title: "Resume Analyzer",
    category: "Document Parsing & AI Matcher",
    badge: "Live Product",
    description: "An ATS resume evaluator parsing PDF/DOCX files to calculate match scores against job descriptions across skills and keywords. Generates structured feedback, missing skill alerts, and JWT-authenticated resume history tracking.",
    link: "https://resume-analyzer-seven-gamma.vercel.app/",
    stack: "React • Text Extraction • ATS Scoring • JWT",
    image: "/projects/resume-analyzer.png",
    isAi: true,
  },
  {
    title: "BG Remover",
    category: "Image Processing Utility",
    badge: "Live Tool",
    description: "A fast background-removal utility built around quick client-side image processing, instant transparent canvas previewing, and high-resolution downloads.",
    link: "https://bg-remover-one-gules.vercel.app/",
    stack: "React • Image Processing • Canvas API",
    image: "/projects/bg-remover.png",
    isAi: false,
  },
  {
    title: "Q A Master",
    category: "Assessment Engine",
    badge: "Interactive",
    description: "An interactive assessment platform with dynamic topic filters, real-time score tracking, and clean question-flow mechanics.",
    link: "https://q-a-master.vercel.app/",
    stack: "React • Quiz Engine • State Management",
    image: "/projects/qa-master.png",
    isAi: false,
  },
  {
    title: "Social Media App",
    category: "Full-Stack Dashboard",
    badge: "Full Stack",
    description: "A modern social media dashboard featuring profile customization, real-time user feeds, media uploads, and structured layouts.",
    link: "https://social-media-app-zuno.vercel.app/",
    stack: "React • Dashboard UI • Feed Architecture",
    image: "/projects/social-media-app.png",
    isAi: false,
  },
]

const Projects = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 max-w-2xl text-left">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-[11px] text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          <span>SaaS, RAG Pipelines & Applications</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Featured Projects & AI Systems
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
          Production SaaS applications, Retrieval-Augmented Generation (RAG) tools, and full-stack platforms built with modern technology.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Tilt3DCard
            key={project.title}
            intensity={6}
            glare={true}
            className="h-full rounded-xl"
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800/80 bg-[#0c0d0f] transition-all duration-200 hover:border-zinc-700 hover:bg-[#101114]">
              {/* Thumbnail / AI Banner */}
              {project.image ? (
                <div className="aspect-[16/10] overflow-hidden border-b border-zinc-800/80 bg-zinc-950">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] flex-col justify-between border-b border-zinc-800/80 bg-gradient-to-br from-zinc-900 via-[#0e1014] to-zinc-950 p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] text-amber-300">
                      RAG Pipeline • LangChain
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">Vector Search</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Retrieval Augmented Generation</p>
                    <h3 className="mt-1 text-xl font-semibold text-zinc-100">{project.title}</h3>
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      {project.category}
                    </span>
                    <h2 className="mt-0.5 text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                    aria-label={`Open ${project.title}`}
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <p className="mt-3 text-xs leading-5 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-500 truncate max-w-[190px]">
                    {project.stack}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {project.badge === "In Progress" ? "GitHub ↗" : "Live Demo ↗"}
                  </a>
                </div>
              </div>
            </article>
          </Tilt3DCard>
        ))}
      </div>
    </section>
  )
}

export default Projects
