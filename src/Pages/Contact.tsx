const contactItems = [
  {
    label: "Email",
    value: "jeetpadiya4@gmail.com",
    href: "mailto:jeetpadiya4@gmail.com",
    helper: "Best for project discussions and job opportunities",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "jeet-padia",
    href: "https://www.linkedin.com/in/jeet-padia-719557274/",
    helper: "Connect with me professionally and view my profile",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3Zm15.19 9.87c0-3.46-1.85-5.07-4.32-5.07a3.75 3.75 0 0 0-3.37 1.86V8.5H9.38V20h3.37v-6.2c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.3V20h3.34v-7.13Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "jeetpadiya",
    href: "https://github.com/jeetpadiya",
    helper: "Explore my repositories and coding projects",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 .5a12 12 0 0 0-3.8 23.38c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.08-.73.08-.72.08-.72 1.2.08 1.83 1.2 1.83 1.2 1.05 1.8 2.76 1.28 3.43.98.1-.75.42-1.27.75-1.56-2.67-.3-5.47-1.3-5.47-5.9 0-1.3.47-2.37 1.22-3.2-.12-.3-.53-1.52.12-3.16 0 0 1-.31 3.3 1.22a11.76 11.76 0 0 1 6 0c2.3-1.53 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.76.83 1.22 1.9 1.22 3.2 0 4.61-2.8 5.6-5.48 5.9.43.37.81 1.08.81 2.2v3.26c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "Phone Number",
    value: "+91 7863855656",
    href: "tel:+917863855656",
    helper: "Reach out directly for quick communication",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.8.62 2.66a2 2 0 0 1-.45 2.11L8 9.77a16 16 0 0 0 6.23 6.23l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.66.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
]

const collaborationPoints = [
  "Frontend development with React.js and modern JavaScript",
  "Responsive UI implementation and component-based architecture",
  "REST API integration and full-stack collaboration",
]

const Contact = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <img
                src="/jeet-portrait.png"
                alt="Jeet Padia portrait"
                className="h-20 w-20 rounded-2xl border border-white/10 object-cover"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Profile</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Jeet Padia</h2>
                <p className="text-sm text-white/65">Frontend Developer | MERN Stack Developer</p>
              </div>
            </div>

            <p className="mt-5 text-base leading-7 text-white/70">
              Currently open to frontend, React.js, and MERN stack opportunities where I can build responsive products,
              collaborate with teams, and contribute to real-world applications.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
              Contact
            </span>
            <h1 className="text-3xl font-black text-white sm:text-4xl">Let’s build something useful together.</h1>
            <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
              I’m open to internships, freelance opportunities, frontend roles, and collaborative project work. If you
              have an idea, role, or opportunity in mind, feel free to reach out.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-blue-500/10 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white">What you can contact me for</h2>
            <div className="mt-6 space-y-3">
              {collaborationPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-6 text-white/75">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Quick Info</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm text-white/55">Response Preference</p>
                <p className="mt-2 text-lg font-semibold text-white">Email or Whatsapp.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm text-white/55">Availability</p>
                <p className="mt-2 text-lg font-semibold text-white">Open to opportunities</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm text-white/55">Location</p>
                <p className="mt-2 text-lg font-semibold text-white">Gujarat, India</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm text-white/55">Expected Reply Time</p>
                <p className="mt-2 text-lg font-semibold text-white">Usually within 24 hours</p>
              </div>
            </div>

            <a
              href="/jeet4resume.pdf"
              download="Jeet_Padia_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
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
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid gap-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">{item.label}</p>
                  <p className="mt-1 break-words text-base font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-5 text-white/60">{item.helper}</p>
                </div>

                <div className="pt-1 text-cyan-200 transition group-hover:translate-x-1">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
