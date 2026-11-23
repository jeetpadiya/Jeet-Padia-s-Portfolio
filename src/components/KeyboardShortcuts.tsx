import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function KeyboardShortcuts() {
  const navigate = useNavigate()
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    const timer = setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev))
    }, 2500)
    return () => clearTimeout(timer)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing in an input or textarea
      const target = e.target as HTMLElement
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return
      }

      // Do not intercept if browser modifier keys are active
      if (e.ctrlKey || e.metaKey || e.altKey) {
        return
      }

      switch (e.key) {
        case "1":
          e.preventDefault()
          navigate("/")
          showToast("[KEY: 1] -> NAVIGATING TO OVERVIEW")
          break
        case "2":
          e.preventDefault()
          navigate("/projects")
          showToast("[KEY: 2] -> NAVIGATING TO DOSSIERS")
          break
        case "3":
          e.preventDefault()
          navigate("/about")
          showToast("[KEY: 3] -> NAVIGATING TO CHANGELOG")
          break
        case "4":
          e.preventDefault()
          navigate("/contact")
          showToast("[KEY: 4] -> NAVIGATING TO UPLINK")
          break
        case "c":
        case "C":
          e.preventDefault()
          void navigator.clipboard.writeText("jeetpadiya4@gmail.com")
          showToast("[KEY: C] -> COPIED EMAIL TO CLIPBOARD")
          break
        case "?":
        case "h":
        case "H":
          e.preventDefault()
          setModalOpen((prev) => !prev)
          break
        case "Escape":
          setModalOpen(false)
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navigate])

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 animate-bounce transition-all">
          <div className="rounded border border-amber-400/80 bg-zinc-950 px-4 py-2 font-mono text-xs font-semibold text-amber-400 shadow-2xl flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Persistent Bottom-Right Hotkey Hint Pill */}
      <div className="fixed bottom-4 right-4 z-40 hidden sm:block">
        <button
          onClick={() => setModalOpen(true)}
          className="cursor-pointer group flex items-center gap-2 rounded border border-zinc-800 bg-[#090a0d]/90 px-2.5 py-1 font-mono text-[11px] text-zinc-500 backdrop-blur-md transition hover:border-zinc-700 hover:text-zinc-300 shadow-lg"
          title="View Keyboard Hotkeys (?)"
        >
          <span className="text-zinc-400 font-semibold group-hover:text-amber-400 transition">
            HOTKEYS:
          </span>
          <span className="rounded bg-zinc-900 border border-zinc-800 px-1 py-0.2 text-[10px] text-zinc-300">
            [1-4]
          </span>
          <span className="rounded bg-zinc-900 border border-zinc-800 px-1 py-0.2 text-[10px] text-zinc-300">
            [C]
          </span>
          <span className="rounded bg-zinc-900 border border-zinc-800 px-1 py-0.2 text-[10px] text-amber-400">
            [?]
          </span>
        </button>
      </div>

      {/* Keyboard Shortcuts Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 font-mono">
          <div className="relative w-full max-w-md rounded-lg border border-zinc-800 bg-[#090a0d] p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="font-semibold text-zinc-200">
                  SYSTEM_HOTKEYS // COMMAND_PALETTE
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="cursor-pointer text-zinc-500 hover:text-zinc-300 transition"
              >
                [ESC / ✕]
              </button>
            </div>

            <p className="text-[11px] text-zinc-400 mb-4 font-sans leading-relaxed">
              Global terminal hotkeys for fast keyboard navigation across the dossier.
            </p>

            {/* Hotkeys Table */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between rounded border border-zinc-850 bg-zinc-950/60 p-2">
                <span className="text-zinc-400">Jump to Overview (Home)</span>
                <kbd className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-bold text-amber-400">
                  1
                </kbd>
              </div>

              <div className="flex items-center justify-between rounded border border-zinc-850 bg-zinc-950/60 p-2">
                <span className="text-zinc-400">Jump to Project Dossiers</span>
                <kbd className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-bold text-amber-400">
                  2
                </kbd>
              </div>

              <div className="flex items-center justify-between rounded border border-zinc-850 bg-zinc-950/60 p-2">
                <span className="text-zinc-400">Jump to Career Changelog</span>
                <kbd className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-bold text-amber-400">
                  3
                </kbd>
              </div>

              <div className="flex items-center justify-between rounded border border-zinc-850 bg-zinc-950/60 p-2">
                <span className="text-zinc-400">Jump to Direct Uplink (Contact)</span>
                <kbd className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-bold text-amber-400">
                  4
                </kbd>
              </div>

              <div className="flex items-center justify-between rounded border border-zinc-850 bg-zinc-950/60 p-2">
                <span className="text-zinc-400">Quick-copy Email Address</span>
                <kbd className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-bold text-amber-400">
                  C
                </kbd>
              </div>

              <div className="flex items-center justify-between rounded border border-zinc-850 bg-zinc-950/60 p-2">
                <span className="text-zinc-400">Toggle Command Help</span>
                <kbd className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-bold text-amber-400">
                  ? / H
                </kbd>
              </div>

              <div className="flex items-center justify-between rounded border border-zinc-850 bg-zinc-950/60 p-2">
                <span className="text-zinc-400">Dismiss Modal / Back</span>
                <kbd className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-bold text-zinc-400">
                  ESC
                </kbd>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
              <span>ACTIVE LISTENER: GLOBAL</span>
              <button
                onClick={() => setModalOpen(false)}
                className="cursor-pointer text-amber-400 hover:underline"
              >
                DISMISS [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
