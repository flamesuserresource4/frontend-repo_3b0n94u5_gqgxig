import { useInView } from './useInView'

const items = [
  { quote: 'Alex blends taste with technical rigor. Our product feels faster and looks better.', name: 'Sarah M.', role: 'PM, Acme Inc.' },
  { quote: 'A rare mix of designer and engineer — highly recommend.', name: 'Jonathan K.', role: 'Founder, Pixel Labs' },
  { quote: 'Dependable, thoughtful, and detail‑oriented.', name: 'Priya R.', role: 'Design Lead, Studio X' },
]

export default function Testimonials() {
  const { ref, inView } = useInView()
  return (
    <section id="testimonials" ref={ref} className={`max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-[#E0E0E0] bg-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h2 className="text-[36px] font-bold text-[#0A0A0A] tracking-tight mb-8">Testimonials</h2>
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-[carousel_18s_linear_infinite] hover:[animation-play-state:paused]">
          {items.concat(items).map((t, i) => (
            <figure key={i} className="min-w-[80%] sm:min-w-[50%] md:min-w-[33%] bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl p-6">
              <div className="text-6xl leading-none text-[#E0E0E0] -mt-4">“</div>
              <blockquote className="-mt-4 text-[#333] leading-[1.6]">{t.quote}</blockquote>
              <figcaption className="mt-4 text-sm text-[#666]">{t.name} • {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
