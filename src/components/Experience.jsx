import { useInView } from './useInView'

const items = [
  { role: 'Senior Frontend Engineer', company: 'Acme Inc.', period: '2022 — Present', desc: 'Leading the design system and performance initiatives.' },
  { role: 'Product Designer', company: 'Pixel Labs', period: '2020 — 2022', desc: 'Shipped cross‑platform design solutions.' },
  { role: 'UI Engineer', company: 'Studio X', period: '2018 — 2020', desc: 'Built component libraries and prototypes.' },
]

export default function Experience() {
  const { ref, inView } = useInView()
  return (
    <section id="experience" ref={ref} className={`max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-[#E0E0E0] bg-[#F5F5F5] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h2 className="text-[36px] font-bold text-[#0A0A0A] tracking-tight mb-10">Experience</h2>
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#E0E0E0]"/>
        <div className="space-y-10">
          {items.map((it, i) => (
            <div key={i} className="md:grid md:grid-cols-2 md:gap-10">
              <div className={`md:text-right ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <h3 className="text-[20px] font-semibold text-[#0A0A0A] tracking-tight">{it.role}</h3>
                <p className="text-sm text-[#666]">{it.company}</p>
              </div>
              <div className={`relative md:pl-10 ${i % 2 === 1 ? 'md:order-1 md:pr-10 md:pl-0 md:text-right' : ''}`}>
                <span className="hidden md:block absolute -left-4 top-2 w-3 h-3 rounded-full bg-[#333]"></span>
                <p className="text-sm text-[#999]">{it.period}</p>
                <p className="text-[#333] leading-[1.6] mt-1">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
