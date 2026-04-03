const highlights = [
  "Frontend and full-stack projects built with React and the MERN stack",
  "Responsive UI design focused on clarity, speed, and usability",
  "Experience turning ideas into deployed web applications",
]

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
            About Me
          </span>
          <h1 className="text-3xl font-black text-white sm:text-4xl">I enjoy building web experiences that people actually like using.</h1>
          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            I am Jeet Padia, a developer focused on creating modern, responsive, and user-friendly applications. I enjoy
            working across the frontend and backend to build products that look clean, solve real problems, and feel smooth
            in everyday use.
          </p>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
            My work includes practical tools, social-style platforms, and polished product interfaces. I like learning by
            building, shipping projects, and improving them through better design and cleaner code.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-blue-500/10 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white">What I focus on</h2>
          <div className="mt-6 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/10 p-4 text-sm leading-6 text-white/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
          Experience
        </span>
        <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-black/10 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] p-3">
              <img src="/potenz-logo.png" alt="Potenz Technology logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">React.js Developer Intern</h2>
              <p className="text-sm font-medium text-cyan-200">Potenz Technology</p>
            </div>
          </div>

          <div className="w-fit rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
            Aug 2025 - Feb 2026
          </div>
        </div>

        <div className="mt-6 space-y-4 text-base leading-7 text-white/70 sm:text-lg">
          <p>
            During my internship at Potenz Technology, I worked as a React.js developer where I contributed to building
            and improving a real-world Application Tracking System (ATS).
          </p>
          <p>
            I was responsible for developing responsive user interfaces using React.js, integrating RESTful APIs, and
            ensuring smooth data flow between the frontend and backend. I also worked with modern JavaScript (ES6+),
            handled state management, and focused on writing clean, maintainable code.
          </p>
          <p>
            Beyond implementation, I actively participated in debugging issues, optimizing performance, and improving
            user experience across the application. This experience strengthened my understanding of the MERN stack,
            collaborative development workflows, and real-world project structure.
          </p>
          <p>
            It also improved my ability to write scalable frontend code and work effectively in a team environment.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black/10">
          <div className="aspect-[16/9] overflow-hidden border-b border-white/10 bg-white">
            <img
              src="/projects/ats-flow-employer.png"
              alt="ATS Flow Employer dashboard preview"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Internship Project</p>
                <h3 className="mt-2 text-2xl font-bold text-white">ATS Flow Employer</h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
                  A real-world employer-side ATS dashboard built to manage candidates, review applications, coordinate
                  interview steps, and support structured hiring workflows.
                </p>
              </div>

              <a
                href="https://atsflowemployer.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
