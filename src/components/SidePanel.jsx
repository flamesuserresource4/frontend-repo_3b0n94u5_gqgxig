import { Linkedin, Github, Twitter, Mail, Phone, Download } from 'lucide-react'

export default function SidePanel() {
  return (
    <aside className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-[28%] xl:w-[26%] bg-[#1A1A1A] text-white px-8 py-10 border-r border-[#2a2a2a]/80">
      <div className="flex flex-col gap-8 w-full opacity-0 animate-[fadeIn_800ms_ease-out_forwards]">
        <div>
          <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-white/10 shadow-xl mb-6 grayscale">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240" alt="Profile" className="w-full h-full object-cover"/>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight leading-tight">Alex Johnson</h1>
          <p className="text-sm text-[#999] mt-1">Product Designer & Frontend Engineer</p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="h-px bg-white/10"/>
          <div className="flex items-center gap-3 text-[#ccc] hover:text-white transition-colors">
            <Mail className="w-4 h-4"/>
            <a href="mailto:alex@example.com" className="underline-offset-4 hover:underline">alex@example.com</a>
          </div>
          <div className="flex items-center gap-3 text-[#ccc] hover:text-white transition-colors">
            <Phone className="w-4 h-4"/>
            <a href="tel:+1234567890" className="underline-offset-4 hover:underline">+1 (234) 567-890</a>
          </div>
          <div className="h-px bg-white/10"/>
        </div>

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
            <a key={item.href} href={item.href} className="hover:text-white hover:underline underline-offset-4 transition-colors">{item.label}</a>
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
        </div>

        <div>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-md text-sm text-white hover:bg-white/5 transition-colors">
            <Download className="w-4 h-4"/> Download Resume
          </a>
        </div>

        <div className="mt-auto text-xs text-[#777]">
          © {new Date().getFullYear()} Alex Johnson
        </div>
      </div>
    </aside>
  )
}
