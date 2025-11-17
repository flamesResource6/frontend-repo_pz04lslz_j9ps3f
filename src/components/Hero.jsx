import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            Building with precision since 1998
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            We craft durable, modern spaces
          </h1>
          <p className="mt-4 text-slate-700 text-lg">From residential to large-scale commercial builds, we deliver quality that stands the test of time.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="rounded-md bg-red-600 text-white px-5 py-3 font-medium shadow hover:bg-red-700 transition">Our Services</a>
            <a href="/gallery" className="rounded-md bg-white text-slate-900 px-5 py-3 font-medium shadow hover:bg-slate-50 transition">View Gallery</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white" />
    </section>
  )
}
