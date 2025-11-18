import { useInView } from './useInView'

export default function Hero() {
  const { ref, inView } = useInView()
  return (
    <section id="home" ref={ref} className={`max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <p className="text-sm uppercase tracking-[0.2em] text-[#666] mb-4">Portfolio</p>
      <h1 className="text-[40px] md:text-[56px] font-extrabold leading-[1.1] text-[#0A0A0A] -tracking-tight">
        Building minimalist, performant products with care.
      </h1>
      <p className="mt-5 max-w-2xl text-[16px] leading-[1.6] text-[#333]">
        I craft delightful experiences in the browser. I focus on design systems, accessibility, and shipping fast without compromising quality.
      </p>
    </section>
  )
}
