import Tilt3DCard from "../components/3d/Tilt3DCard"

const skillsCategories = [
  {
    category: "AI & LLM Frameworks",
    items: ["LangChain", "RAG (Retrieval-Augmented Gen)", "Vector Databases & Embeddings", "LLM API Integration"],
  },
  {
    category: "Frontend Engineering",
    items: ["Next.js", "React.js", "TypeScript", "TanStack Query", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express.js", "MongoDB", "SQL (PostgreSQL / MySQL)", "REST APIs", "Role-Based Access (RBAC)"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git / GitHub", "Vercel", "Linux", "VS Code"],
  },
]

const workExperience = [
  {
    role: "Full-Stack Developer Intern",
    company: "Hemens Business Solution",
    period: "Jul 2026 – Present",
    location: "Ahmedabad, India",
    points: [
      "Engineered a multi-tenant global logistics platform (Soldrift) using Next.js, Node.js, Express, and MongoDB, supporting role-based portals for Admins, Support, and Customers.",
      "Developed customer modules for shipment booking, financial tracking, and real-time order visibility to streamline freight operations.",
      "Built an integrated real-time chat application for active shipment communication and optimized client-side state fetching using TanStack Query.",
    ],
  },
  {
    role: "React.js Developer Intern",
    company: "Potenz Technology",
    period: "Jan 2026 – Jun 2026",
    location: "Ahmedabad, India",
    points: [
      "Engineered 15+ responsive UI components in React.js for a live Applicant Tracking System (ATS), accelerating feature delivery velocity by 20%.",
      "Improved API handling using TanStack Query, cutting unnecessary network requests by 35% and boosting overall page responsiveness.",
    ],
  },
]

const educationList = [
  {
    degree: "Master of Science in Information Technology (M.Sc. IT)",
    institution: "Saurashtra University",
    location: "Rajkot, India",
    period: "2025 – 2027",
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Saurashtra University",
    location: "Jetpur, India",
    period: "2022 – 2025",
    grade: "72%",
  },
]

const About = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Bio Header */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-zinc-800/80 bg-[#0c0d0f] p-6 sm:p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-[11px] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
            <span>Full-Stack & AI Systems Engineer</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl leading-snug">
            Building multi-tenant SaaS and low-latency AI / RAG pipelines.
          </h1>

          <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-400 sm:text-base">
            <p>
              I am <strong className="text-zinc-200">Jeet Padia</strong>, a full-stack developer specializing in Next.js, React, Node.js, and AI-driven architectures.
            </p>
            <p>
              My hands-on experience ranges from building multi-tenant SaaS logistics platforms (Soldrift) with role-based access control (RBAC) to engineering Retrieval-Augmented Generation (RAG) assistants for legal document context retrieval using LangChain and vector embeddings.
            </p>
            <p>
              I emphasize API efficiency, intelligent client-side caching with TanStack Query, and maintainable, scalable software design.
            </p>
          </div>
        </div>

        {/* Education Card */}
        <div className="rounded-2xl border border-zinc-800/80 bg-[#0c0d0f] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Education</p>
            <div className="mt-5 space-y-4">
              {educationList.map((edu) => (
                <div key={edu.degree} className="border-b border-zinc-800/60 pb-3.5 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-zinc-200">{edu.degree}</h3>
                    <span className="font-mono text-[11px] text-zinc-500 shrink-0">{edu.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">{edu.institution} • {edu.location}</p>
                  {edu.grade && (
                    <span className="inline-block mt-1 font-mono text-[10px] text-amber-400/90 rounded border border-amber-400/20 bg-amber-400/10 px-1.5 py-0.5">
                      Score: {edu.grade}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-zinc-800/60 pt-4">
            <p className="font-mono text-[11px] text-zinc-500">
              Location: Rajkot / Ahmedabad, Gujarat • Open to Remote & Relocation
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills & AI Tooling */}
      <div className="mt-10 rounded-2xl border border-zinc-800/80 bg-[#0c0d0f] p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Technical Competencies</p>
        <h2 className="mt-1 text-2xl font-semibold text-zinc-100">Skills & AI Frameworks</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillsCategories.map((cat) => (
            <div key={cat.category} className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
              <h3 className="font-mono text-xs font-semibold text-amber-400/90 tracking-wide uppercase">
                {cat.category}
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs text-zinc-300 font-mono">
                {cat.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-1.5">
                    <span className="text-zinc-600">›</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-10 rounded-2xl border border-zinc-800/80 bg-[#0c0d0f] p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Track Record</p>
        <h2 className="mt-1 text-2xl font-semibold text-zinc-100">Professional Experience</h2>

        <div className="mt-6 space-y-6">
          {workExperience.map((exp) => (
            <div key={exp.company} className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {exp.company} • {exp.location}
                  </p>
                </div>

                <span className="font-mono text-xs text-amber-300/90 rounded-md border border-amber-500/20 bg-amber-500/10 px-3 py-1 w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm leading-6 text-zinc-400">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-zinc-600 mt-1">▪</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Deliverable Showcase with 3D Tilt */}
        <div className="mt-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-zinc-500">
            Featured Enterprise Deliverable
          </p>
          <Tilt3DCard intensity={5} glare={true} className="rounded-xl">
            <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-[#08090a]">
              <div className="aspect-[16/8] overflow-hidden border-b border-zinc-800/80 bg-zinc-950">
                <img
                  src="/projects/ats-flow-employer.png"
                  alt="ATS Flow Employer dashboard"
                  className="h-full w-full object-cover object-top opacity-90 transition duration-300 hover:opacity-100"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-mono text-[10px] text-amber-400/90 uppercase tracking-wider">
                    Enterprise SaaS • ATS Flow Employer
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-100 mt-0.5">Multi-Tenant Candidate Pipeline</h4>
                  <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                    High-performance hiring workflow dashboard with role-based access, candidate pipelines, and TanStack Query state caching.
                  </p>
                </div>

                <a
                  href="https://atsflowemployer.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                >
                  Live Deployment ↗
                </a>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  )
}

export default About
