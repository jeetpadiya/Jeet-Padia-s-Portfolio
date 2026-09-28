import Navbar from "./components/Navbar"
import VisitorTracker from "./components/VisitorTracker"
import StarfieldBackground from "./components/3d/StarfieldBackground"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0b0e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      <StarfieldBackground />
      <VisitorTracker />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
