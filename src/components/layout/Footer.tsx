import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Home } from 'lucide-react'

const quickLinks = [
  { to: '/buyers', label: 'Buy a Home' },
  { to: '/sellers', label: 'Sell Your Home' },
  { to: '/properties', label: 'Search Properties' },
  { to: '/communities', label: 'Communities' },
  { to: '/new-construction', label: 'New Construction' },
  { to: '/contact', label: 'Contact' },
]

const communityLinks = [
  { to: '/communities', label: 'Ocala' },
  { to: '/communities', label: 'Summerfield' },
  { to: '/communities', label: 'Belleview' },
  { to: '/communities', label: 'Dunnellon' },
  { to: '/communities', label: 'Beverly Hills' },
]

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      {/* Main Footer */}
      <div className="container-custom px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 no-underline mb-4">
              <Home className="w-6 h-6 text-primary-light" />
              <div>
                <span className="font-serif text-2xl font-bold text-white block leading-none">Alisa</span>
                <span className="text-xs text-primary-light tracking-widest uppercase font-bold mt-0.5 block">Realtor</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted guide to Ocala and Central Florida real estate. 
              Helping buyers, sellers, and families find their perfect home.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/AlisaBurnsRealtor" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-xs font-semibold group" 
                aria-label="Facebook"
              >
                <span className="group-hover:scale-110 transition-transform">FB</span>
              </a>
              <a 
                href="https://www.instagram.com/realtoralisafl/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-xs font-semibold group" 
                aria-label="Instagram"
              >
                <span className="group-hover:scale-110 transition-transform">IG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white text-sm transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Areas Served
            </h4>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white text-sm transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:3522304020" className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors no-underline">
                  <Phone className="w-4 h-4 text-primary-light flex-shrink-0" />
                  (352) 230-4020
                </a>
              </li>
              <li>
                <a href="mailto:Realtoralisafl@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors no-underline">
                  <Mail className="w-4 h-4 text-primary-light flex-shrink-0" />
                  Realtoralisafl@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-primary-light flex-shrink-0 mt-0.5" />
                  Serving Ocala, Marion County & Central Florida
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Alisa — Licensed Real Estate Agent, Florida. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  )
}
