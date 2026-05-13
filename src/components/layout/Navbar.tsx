import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Home } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/buyers', label: 'Buy' },
  { to: '/sellers', label: 'Sell' },
  { to: '/properties', label: 'Properties' },
  { to: '/communities', label: 'Communities' },
  { to: '/new-construction', label: 'New Construction' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <Home className="w-6 h-6 text-primary" />
          <div>
            <span className="font-serif text-2xl font-bold text-text tracking-tight">
              Alisa
            </span>
            <span className="hidden sm:inline text-xs text-text-light ml-2 tracking-widest uppercase">
              Realtor
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                location.pathname === link.to
                  ? 'text-primary bg-primary/10'
                  : 'text-text-light hover:text-text hover:bg-light-gray'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:3522304020"
            className="flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors no-underline"
          >
            <Phone className="w-4 h-4" />
            (352) 230-4020
          </a>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg no-underline"
          >
            Contact Alisa
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-light-gray transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all no-underline ${
                location.pathname === link.to
                  ? 'text-primary bg-primary/10'
                  : 'text-text-light hover:text-text hover:bg-light-gray'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-light-gray mt-4">
            <a
              href="tel:3522304020"
              className="flex items-center gap-2 px-4 py-3 text-text-light no-underline"
            >
              <Phone className="w-4 h-4" />
              (352) 230-4020
            </a>
            <Link
              to="/contact"
              className="block text-center bg-primary text-white px-4 py-3 rounded-lg font-semibold mt-2 no-underline"
            >
              Contact Alisa
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
