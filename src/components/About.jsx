import { useInView } from './useInView'

export default function About() {
  const { ref, inView } = useInView()
  return (
    <section id="about" ref={ref} className={`max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-[#E0E0E0] bg-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h2 className="text-[36px] font-bold text-[#0A0A0A] tracking-tight mb-4">About Me</h2>
      <p className="text-[#333] leading-[1.6]">
        I’m a multidisciplinary designer and frontend engineer with a passion for creating usable, beautiful interfaces. My work blends thoughtful typography, clean layout, and robust engineering.
      </p>
    </section>
  )
}
