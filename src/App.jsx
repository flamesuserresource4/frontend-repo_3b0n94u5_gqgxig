import SidePanel from './components/SidePanel'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      {/* Left panel (desktop) */}
      <SidePanel />

      {/* Top bar (mobile) */}
      <TopBar />

      {/* Main content */}
      <main className="lg:ml-[28%] xl:ml-[26%]">
        <div className="bg-white">
          <Hero />
          <About />
          <Expertise />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <footer className="border-t border-[#E0E0E0] py-10 text-center text-sm text-[#666] bg-white">
            Crafted in monochrome. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
