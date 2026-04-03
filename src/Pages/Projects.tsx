const projects = [
  {
    title: "Resume Analyzer",
    description: "A dark-themed ATS resume analyzer where users can upload a resume, paste a job description, and review compatibility in a focused workflow.",
    link: "https://resume-analyzer-seven-gamma.vercel.app/",
    stack: "React, Resume Upload, ATS Workflow",
    image: "/projects/resume-analyzer.png",
  },
  {
    title: "BG Remover",
    description: "A background-removal tool with a strong landing page, bold headline, and upload-first flow built around quick image processing.",
    link: "https://bg-remover-one-gules.vercel.app/",
    stack: "React, Image Processing, UI Flow",
    image: "/projects/bg-remover.png",
  },
  {
    title: "Q A Master",
    description: "An interactive quiz platform with topic filters, player-focused messaging, and a bold hero section built to make learning feel engaging.",
    link: "https://q-a-master.vercel.app/",
    stack: "React, Quiz App, Interactive UI",
    image: "/projects/qa-master.png",
  },
  {
    title: "Social Media App",
    description: "A social media dashboard with profile management, post creation, and uploaded media presented inside a structured app layout.",
    link: "https://social-media-app-zuno.vercel.app/",
    stack: "React, Dashboard UI, Social Features",
    image: "/projects/social-media-app.png",
  },
  {
    title: "Weather App",
    description: "A weather dashboard with city search, current conditions, location-based updates, and forecast panels for daily and hourly weather tracking.",
    link: "https://weather-app-roan-tau-63.vercel.app/",
    stack: "React, Weather API, Forecast UI",
    image: "/projects/weather-app.png",
  },
  {
    title: "KindCart",
    description: "A polished e-commerce style product interface with clean navigation, product cards, and a structured browsing experience.",
    link: "https://potenz-app.vercel.app/",
    stack: "React, Product UI, E-commerce Layout",
    image: "/projects/potenz-app.png",
  },
]

const Projects = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-10 max-w-2xl">
        <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
          Featured Work
        </span>
        <h2 className="text-3xl font-black text-white sm:text-4xl">Projects I have built and deployed</h2>
        <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
          These projects reflect different problem spaces, from utilities and AI-inspired tools to product interfaces
          and social experiences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            {project.image ? (
              <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/20">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ) : (
              <div className="flex aspect-[16/10] items-end border-b border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-blue-500/20 p-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-200">Preview Coming Soon</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            )}

            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-lg font-bold text-cyan-200">
                {project.title
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{project.description}</p>
              <p className="mt-5 text-sm font-medium text-cyan-200">{project.stack}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Visit Live Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
