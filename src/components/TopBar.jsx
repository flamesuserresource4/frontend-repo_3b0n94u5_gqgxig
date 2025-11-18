import { Menu, Linkedin, Github, Twitter, Download } from 'lucide-react'
import { useState } from 'react'

export default function TopBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="lg:hidden sticky top-0 z-40 bg-[#1A1A1A] text-white px-4 py-3 border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden grayscale ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120" alt="Profile" className="w-full h-full object-cover"/>
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">Alex Johnson</p>
            <p className="text-[11px] text-[#999]">Product Designer & Frontend Engineer</p>
          </div>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="p-2 rounded-md hover:bg-white/10">
          <Menu className="w-5 h-5"/>
        </button>
      </div>
      {open && (
        <div className="mt-3 space-y-3 border-t border-white/10 pt-3">
          <nav className="flex flex-wrap gap-3 text-sm text-[#bbb]">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#expertise', label: 'Expertise' },
              { href: '#projects', label: 'Projects' },
              { href: '#experience', label: 'Experience' },
              { href: '#testimonials', label: 'Testimonials' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="hover:text-white hover:underline underline-offset-4 transition-colors">{item.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors transform hover:scale-110">
              <Linkedin className="w-5 h-5 text-white"/>
            </a>
            <a aria-label="GitHub" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors transform hover:scale-110">
              <Github className="w-5 h-5 text-white"/>
            </a>
            <a aria-label="Twitter" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors transform hover:scale-110">
              <Twitter className="w-5 h-5 text-white"/>
            </a>
            <a href="#" className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-md text-xs text-white hover:bg-white/5 transition-colors">
              <Download className="w-4 h-4"/> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
