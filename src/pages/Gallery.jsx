import Navbar from '../components/Navbar'
import GalleryGrid from '../components/GalleryGrid'

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Gallery</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Browse highlights from our portfolio. Each project is delivered with enduring quality and attention to detail.</p>
        </div>
        <GalleryGrid />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">© 2025 RedGrid Construction. All rights reserved.</footer>
    </div>
  )
}
