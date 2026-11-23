import Navbar from "./components/Navbar"
import VisitorTracker from "./components/VisitorTracker"
import KeyboardShortcuts from "./components/KeyboardShortcuts"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="relative min-h-screen bg-[#07080a] text-zinc-100 selection:bg-amber-400 selection:text-black flex flex-col justify-between">
      {/* Precision Blueprint Grid Background with subtle radial fade */}
      <div className="pointer-events-none fixed inset-0 z-0 technical-grid opacity-60" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(217,119,6,0.06),transparent_70%)]" />

      {/* Visitor analytics engine */}
      <VisitorTracker />

      {/* Unix global hotkey listener & toast notification */}
      <KeyboardShortcuts />

      {/* Navigation Command Bar */}
      <Navbar />

      {/* Main Workbench Viewport */}
      <main className="relative z-10 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Telemetry & System Footer */}
      <Footer />
    </div>
  )
}

export default App
