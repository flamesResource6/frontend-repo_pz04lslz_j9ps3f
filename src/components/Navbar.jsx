import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Building2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkBase = 'text-sm font-medium transition-colors'
  const linkActive = 'text-red-600'
  const linkInactive = 'text-slate-700 hover:text-red-600'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-red-600 text-white grid place-items-center shadow-md">
              <Building2 size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">RedGrid Construction</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`${linkBase} ${location.pathname === '/' ? linkActive : linkInactive}`}>Home</Link>
            <Link to="/gallery" className={`${linkBase} ${location.pathname === '/gallery' ? linkActive : linkInactive}`}>Gallery</Link>
            <a href="#contact" className={`${linkBase} ${linkInactive}`}>Contact</a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-white/50" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2">
            <div className="grid gap-2 bg-white/80 rounded-md p-3 shadow-sm">
              <Link to="/" className={`${linkBase} ${location.pathname === '/' ? linkActive : linkInactive}`}>Home</Link>
              <Link to="/gallery" className={`${linkBase} ${location.pathname === '/gallery' ? linkActive : linkInactive}`}>Gallery</Link>
              <a href="#contact" className={`${linkBase} ${linkInactive}`}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
