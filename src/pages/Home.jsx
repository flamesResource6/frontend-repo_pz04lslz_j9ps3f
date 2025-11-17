import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">© 2025 RedGrid Construction. All rights reserved.</footer>
    </div>
  )
}
