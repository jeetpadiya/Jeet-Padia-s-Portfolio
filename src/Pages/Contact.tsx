import { useState } from "react"

const connectionChannels = [
  {
    protocol: "SMTP // EMAIL",
    label: "Direct Email",
    value: "jeetpadiya4@gmail.com",
    href: "mailto:jeetpadiya4@gmail.com",
    description: "Primary channel for professional opportunities, interview scheduling, and technical inquiries.",
    actionText: "OPEN_MAILER ↗",
    copyable: true,
  },
  {
    protocol: "NET // LINKEDIN",
    label: "LinkedIn Network",
    value: "linkedin.com/in/jeet-padia-719557274",
    href: "https://www.linkedin.com/in/jeet-padia-719557274/",
    description: "Professional background, peer recommendations, and industry connection network.",
    actionText: "CONNECT_LINKEDIN ↗",
    copyable: false,
  },
  {
    protocol: "GIT // GITHUB",
    label: "GitHub Repositories",
    value: "github.com/jeetpadiya",
    href: "https://github.com/jeetpadiya",
    description: "Open source repositories, source code for full-stack platforms, and ongoing RAG development.",
    actionText: "INSPECT_REPOS ↗",
    copyable: false,
  },
  {
    protocol: "TEL // MOBILE_WHATSAPP",
    label: "Voice & WhatsApp",
    value: "+91 7863855656",
    href: "tel:+917863855656",
    description: "Available for voice calls, technical discussions, or instant WhatsApp messaging.",
    actionText: "INITIALIZE_CALL ↗",
    copyable: true,
  },
]

const Contact = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 font-mono">
      {/* Header */}
      <div className="mb-10 border-b border-zinc-800 pb-6 text-left">
        <div className="flex items-center gap-2 text-xs text-amber-400 mb-2">
          <span>{">"}</span>
          <span>COMMUNICATION_UPLINK // PING_OPERATOR</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl font-sans">
          Initialize Direct Uplink
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400 font-sans">
          Available for full-time engineering roles, high-impact contract systems, and technical consultations. All communication channels are actively monitored.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] text-left">
        {/* Left Column: Direct Connection Endpoints */}
        <div className="space-y-4">
          <div className="mb-3 flex items-center justify-between text-xs text-zinc-500 border-b border-zinc-800/80 pb-2">
            <span>CONNECTION_ENDPOINTS // 4 CHANNELS</span>
            <span>ENCRYPTION: TLS / HTTPS</span>
          </div>

          {connectionChannels.map((channel) => (
            <div
              key={channel.protocol}
              className="rounded-lg border border-zinc-800 bg-[#090a0d] p-5 transition hover:border-zinc-700"
            >
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-3 text-xs">
                <span className="text-amber-400 font-semibold">{channel.protocol}</span>
                <span className="text-zinc-500 text-[11px]">{channel.label}</span>
              </div>

              <div className="mb-3">
                <div className="text-sm font-semibold text-zinc-200 select-all">
                  {channel.value}
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-sans leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-400 hover:text-amber-300 transition"
                >
                  {channel.actionText}
                </a>

                {channel.copyable && (
                  <button
                    onClick={() => handleCopy(channel.value, channel.protocol)}
                    className="cursor-pointer text-zinc-500 hover:text-zinc-300 transition"
                  >
                    {copiedKey === channel.protocol ? "✓ COPIED TO CLIPBOARD" : "[COPY]"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Telemetry & Terminal Simulation */}
        <div className="space-y-6">
          {/* Node Availability Spec */}
          <div className="rounded-lg border border-zinc-800 bg-[#090a0d] p-5">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4 text-xs">
              <span className="text-emerald-400 font-semibold">● NODE_STATUS // ACTIVE</span>
              <span className="text-zinc-500 text-[11px]">TELEMETRY</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-zinc-850 pb-2">
                <span className="text-zinc-500">OPERATOR:</span>
                <span className="text-zinc-200">Jeet Padia</span>
              </div>
              <div className="flex justify-between border-b border-zinc-850 pb-2">
                <span className="text-zinc-500">PRIMARY ROLE:</span>
                <span className="text-zinc-200">Full-Stack / AI Systems Engineer</span>
              </div>
              <div className="flex justify-between border-b border-zinc-850 pb-2">
                <span className="text-zinc-500">TIMEZONE:</span>
                <span className="text-zinc-200">IST (UTC+05:30)</span>
              </div>
              <div className="flex justify-between border-b border-zinc-850 pb-2">
                <span className="text-zinc-500">BASE LOCATION:</span>
                <span className="text-zinc-200">Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex justify-between border-b border-zinc-850 pb-2">
                <span className="text-zinc-500">WORK PREFERENCE:</span>
                <span className="text-emerald-400 font-medium">Remote / Hybrid / On-site</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">EXPECTED LATENCY:</span>
                <span className="text-zinc-200">&lt; 24h Response Window</span>
              </div>
            </div>
          </div>

          {/* Terminal Command Spec */}
          <div className="rounded-lg border border-zinc-800 bg-black/60 p-5 font-mono">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-3 text-xs text-zinc-500">
              <span>UNIX_CLI // QUICK_COMMAND</span>
              <span>SHELL</span>
            </div>

            <p className="text-[11px] text-zinc-400 mb-2">
              Reach out directly from your command line:
            </p>

            <div className="rounded bg-zinc-950 border border-zinc-850 p-3 text-xs text-amber-400 select-all overflow-x-auto">
              <code>echo &quot;Hello Jeet, discussing engineering roles&quot; | mail -s &quot;Opportunity&quot; jeetpadiya4@gmail.com</code>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
              <span>OR PING ON WHATSAPP:</span>
              <a
                href="https://wa.me/917863855656"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                +91 7863855656 ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
