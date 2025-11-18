import { useState } from 'react'
import { useInView } from './useInView'

const filters = ['All', 'Web', 'Design', 'UI', 'App']

const projects = [
  { id: 1, title: 'Minimal E‑commerce', tag: 'Web', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200' },
  { id: 2, title: 'Dashboard System', tag: 'UI', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200' },
  { id: 3, title: 'Styleguide', tag: 'Design', img: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200' },
  { id: 4, title: 'Portfolio App', tag: 'App', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200' },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const [modal, setModal] = useState(null)
  const { ref, inView } = useInView()

  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active)

  return (
    <section id="projects" ref={ref} className={`max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-[#E0E0E0] bg-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[36px] font-bold text-[#0A0A0A] tracking-tight">Projects</h2>
        <div className="hidden sm:flex items-center gap-4">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} className={`text-sm text-[#666] pb-1 border-b-2 transition-colors ${active === f ? 'border-[#333] text-[#0A0A0A]' : 'border-transparent hover:text-[#0A0A0A]'}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="sm:hidden flex items-center gap-3 mb-6 overflow-x-auto">
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)} className={`text-sm text-[#666] pb-1 border-b-2 whitespace-nowrap ${active === f ? 'border-[#333] text-[#0A0A0A]' : 'border-transparent'}`}>{f}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="group relative bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#E0E0E0] cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl" onClick={() => setModal(p)}>
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-4">
              <h3 className="text-[20px] font-semibold text-[#0A0A0A] tracking-tight">{p.title}</h3>
              <p className="text-sm text-[#666]">{p.tag}</p>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6" onClick={() => setModal(null)}>
          <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={modal.img} alt={modal.title} className="w-full h-full object-cover grayscale"/>
            </div>
            <div className="p-6">
              <h3 className="text-[24px] font-bold text-[#0A0A0A] tracking-tight mb-2">{modal.title}</h3>
              <p className="text-[#333] leading-[1.6]">Detailed description about the project, goals, and outcomes. This modal keeps the monochrome style and focuses on clarity.</p>
              <div className="mt-4 text-right">
                <button onClick={() => setModal(null)} className="px-4 py-2 border border-[#E0E0E0] rounded-md text-sm text-[#333] hover:bg-[#F5F5F5]">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
