import Navbar from "./components/Navbar"
import VisitorTracker from "./components/VisitorTracker"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen bg-[#1b1d1f]">
      <VisitorTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
