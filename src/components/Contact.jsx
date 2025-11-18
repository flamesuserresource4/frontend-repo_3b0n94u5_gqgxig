import { useInView } from './useInView'
import { Mail } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView()
  return (
    <section id="contact" ref={ref} className={`max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-[#E0E0E0] bg-[#F5F5F5] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h2 className="text-[36px] font-bold text-[#0A0A0A] tracking-tight mb-4">Let’s collaborate</h2>
      <p className="text-[#333] leading-[1.6] max-w-2xl">Open to select freelance projects and full‑time opportunities. I enjoy working with teams who value craft, clarity, and thoughtful systems.</p>
      <a href="mailto:alex@example.com" className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-[#E0E0E0] rounded-md text-sm text-[#333] hover:bg-white">
        <Mail className="w-4 h-4"/> Email me
      </a>
    </section>
  )
}
