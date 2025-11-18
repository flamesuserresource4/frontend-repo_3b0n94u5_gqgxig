import { Code2, PenTool, Layout, Rocket } from 'lucide-react'
import { useInView } from './useInView'

const items = [
  { icon: Code2, title: 'Frontend Engineering', desc: 'Accessible, performant UIs with React.' },
  { icon: Layout, title: 'Design Systems', desc: 'Scalable, consistent component libraries.' },
  { icon: PenTool, title: 'Product Design', desc: 'Wireframes to hi-fi prototypes, end-to-end.' },
  { icon: Rocket, title: 'Optimization', desc: 'Bundle, render, and UX optimizations.' },
]

export default function Expertise() {
  const { ref, inView } = useInView()
  return (
    <section id="expertise" ref={ref} className={`max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-[#E0E0E0] bg-[#F5F5F5] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h2 className="text-[36px] font-bold text-[#0A0A0A] tracking-tight mb-8">Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group bg-white border border-[#E0E0E0] rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
            <Icon className="w-6 h-6 text-[#333] mb-4"/>
            <h3 className="text-[20px] font-semibold text-[#0A0A0A] mb-1 tracking-tight">{title}</h3>
            <p className="text-[14px] text-[#666] leading-6">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
