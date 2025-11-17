import { Hammer, ShieldCheck, Clock, Ruler } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { icon: Hammer, title: 'Expert Craftsmanship', desc: 'Skilled teams delivering precision on every project.' },
  { icon: ShieldCheck, title: 'Safety First', desc: 'We uphold strict safety standards across all sites.' },
  { icon: Clock, title: 'On-time Delivery', desc: 'Structured planning ensures deadlines are met.' },
  { icon: Ruler, title: 'Custom Solutions', desc: 'Tailored builds that fit your vision and budget.' },
]

export default function Features() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">A full-service construction partner for residential, commercial and industrial projects.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-slate-200 p-6 hover:shadow-lg bg-white"
            >
              <div className="h-11 w-11 rounded-lg bg-red-50 text-red-600 grid place-items-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
