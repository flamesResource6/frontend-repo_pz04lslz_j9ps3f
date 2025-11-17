import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441987060455-2e0ea582c5b5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop'
]

export default function GalleryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Project Gallery</h2>
          <p className="mt-3 text-slate-600">A snapshot of recent work across residential, commercial and infrastructure projects.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
            >
              <img src={src} alt="Project" className="h-60 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
