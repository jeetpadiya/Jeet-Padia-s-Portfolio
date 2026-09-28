import Tilt3DCard from "../components/3d/Tilt3DCard"

const contactItems = [
  {
    label: "Email",
    value: "jeetpadiya4@gmail.com",
    href: "mailto:jeetpadiya4@gmail.com",
    note: "Primary channel for professional correspondence",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jeet-padia",
    href: "https://www.linkedin.com/in/jeet-padia-719557274/",
    note: "Professional background and network",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3Zm15.19 9.87c0-3.46-1.85-5.07-4.32-5.07a3.75 3.75 0 0 0-3.37 1.86V8.5H9.38V20h3.37v-6.2c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.3V20h3.34v-7.13Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/jeetpadiya",
    href: "https://github.com/jeetpadiya",
    note: "Open-source projects, contributions and repositories",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 .5a12 12 0 0 0-3.8 23.38c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.08-.73.08-.72.08-.72 1.2.08 1.83 1.2 1.83 1.2 1.05 1.8 2.76 1.28 3.43.98.1-.75.42-1.27.75-1.56-2.67-.3-5.47-1.3-5.47-5.9 0-1.3.47-2.37 1.22-3.2-.12-.3-.53-1.52.12-3.16 0 0 1-.31 3.3 1.22a11.76 11.76 0 0 1 6 0c2.3-1.53 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.76.83 1.22 1.9 1.22 3.2 0 4.61-2.8 5.6-5.48 5.9.43.37.81 1.08.81 2.2v3.26c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 7863855656",
    href: "tel:+917863855656",
    note: "Voice call or WhatsApp",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.8.62 2.66a2 2 0 0 1-.45 2.11L8 9.77a16 16 0 0 0 6.23 6.23l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.66.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
]

const Contact = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Left Column: Context */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800/80 bg-[#0c0d0f] p-6 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-[11px] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
              <span>Available for Work</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl leading-tight">
              Get in Touch
            </h1>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              I am open to full-time engineering positions, contract development, and technical collaborations. If you have an inquiry, please reach out via any of the channels listed.
            </p>

            <div className="mt-8 border-t border-zinc-800/60 pt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Resume & Documents</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="/Jeet_padia_full_stack_developer.pdf"
                  download="Jeet_padia_full_stack_developer.pdf"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-white"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
                  </svg>
                  Download Resume (PDF)
                </a>

                <a
                  href="mailto:jeetpadiya4@gmail.com"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-white"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-[#0c0d0f] p-6 text-xs text-zinc-400 space-y-3 font-mono">
            <p className="text-zinc-500 uppercase tracking-wider text-[10px]">Operations & Location</p>
            <p>• Location: Gujarat, India (IST / UTC+5:30)</p>
            <p>• Availability: Full-Time / Contract</p>
            <p>• Response Time: Typically within 24 hours</p>
          </div>
        </div>

        {/* Right Column: Contact Cards */}
        <div className="space-y-3.5">
          {contactItems.map((item) => (
            <Tilt3DCard key={item.label} intensity={4} glare={true} className="rounded-xl">
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group block rounded-xl border border-zinc-800/80 bg-[#0c0d0f] p-4 sm:p-5 transition hover:border-zinc-700 hover:bg-[#101114]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition group-hover:text-zinc-200 group-hover:border-zinc-700">
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors truncate">
                      {item.value}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">{item.note}</p>
                  </div>

                  <div className="text-zinc-600 group-hover:text-zinc-300 transition-colors">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
