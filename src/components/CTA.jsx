import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-slate-900 text-white p-10 md:p-14 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-red-600/30 blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to build together?</h2>
              <p className="mt-3 text-slate-300">Tell us about your project and we’ll get back within one business day.</p>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="grid gap-3"
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch.'); }}
            >
              <input required placeholder="Your name" className="h-11 rounded-md px-3 bg-white text-slate-900 placeholder:text-slate-400" />
              <input required type="email" placeholder="Email" className="h-11 rounded-md px-3 bg-white text-slate-900 placeholder:text-slate-400" />
              <textarea required placeholder="Tell us about your project" rows="3" className="rounded-md px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400" />
              <button className="h-11 rounded-md bg-red-600 hover:bg-red-700 transition font-medium">Send Message</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
