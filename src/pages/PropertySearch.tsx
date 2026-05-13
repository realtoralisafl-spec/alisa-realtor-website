import { useEffect, useState, useMemo } from 'react'
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Home,
  X,
  Phone,
} from 'lucide-react'
import { properties, cities, propertyTypes, priceRanges, bedOptions } from '../data/properties'
import Button from '../components/ui/Button'

export default function PropertySearch() {
  useEffect(() => {
    document.title = 'Homes for Sale in Ocala FL | Property Search | Alisa Realtor'
  }, [])

  const [city, setCity] = useState('All')
  const [type, setType] = useState('All')
  const [priceRange, setPriceRange] = useState(0)
  const [beds, setBeds] = useState('Any')
  const [searchText, setSearchText] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (city !== 'All' && p.city !== city) return false
      if (type !== 'All' && p.type !== type) return false
      const range = priceRanges[priceRange]
      if (p.price < range.min || p.price > range.max) return false
      if (beds !== 'Any') {
        const minBeds = parseInt(beds)
        if (p.beds < minBeds) return false
      }
      if (searchText) {
        const q = searchText.toLowerCase()
        if (
          !p.title.toLowerCase().includes(q) &&
          !p.address.toLowerCase().includes(q) &&
          !p.city.toLowerCase().includes(q) &&
          !p.description.toLowerCase().includes(q)
        )
          return false
      }
      return true
    })
  }, [city, type, priceRange, beds, searchText])

  const clearFilters = () => {
    setCity('All')
    setType('All')
    setPriceRange(0)
    setBeds('Any')
    setSearchText('')
  }

  const selectClass =
    'bg-white border border-medium-gray rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none cursor-pointer w-full'

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 bg-warm-white">
        <div className="container-custom px-4 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-text mb-3">
              Find Your <span className="italic text-primary">Next Home</span>
            </h1>
            <p className="text-text-light">
              Browse available properties in Ocala and the surrounding communities.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search by location, address, or keyword..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full bg-white border border-medium-gray rounded-xl pl-12 pr-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              {searchText && (
                <button
                  onClick={() => setSearchText('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Toggle (Mobile) */}
          <div className="flex justify-center md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-primary font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-4">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={selectClass}
              >
                <option value="All">All Cities</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={selectClass}
              >
                <option value="All">All Types</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className={selectClass}
              >
                {priceRanges.map((r, i) => (
                  <option key={r.label} value={i}>{r.label}</option>
                ))}
              </select>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className={selectClass}
              >
                {bedOptions.map((b) => (
                  <option key={b} value={b}>{b === 'Any' ? 'Any Beds' : `${b} Beds`}</option>
                ))}
              </select>
            </div>
            {(city !== 'All' || type !== 'All' || priceRange !== 0 || beds !== 'Any') && (
              <div className="text-center">
                <button
                  onClick={clearFilters}
                  className="text-xs text-text-muted hover:text-primary transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-light-gray pt-8">
        <div className="container-custom px-4 lg:px-8">
          <p className="text-sm text-text-muted mb-6">
            {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl">
              <Home className="w-16 h-16 text-text-muted mx-auto mb-4 opacity-30" />
              <h3 className="font-serif text-xl text-text mb-2">No Properties Found</h3>
              <p className="text-text-light text-sm mb-6">
                Try adjusting your filters or search term.
              </p>
              <button onClick={clearFilters} className="text-primary text-sm font-medium">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property) => (
                <div
                  key={property.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                      <Home className="w-12 h-12 opacity-20" />
                    </div>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {property.status}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-text text-xs font-medium px-3 py-1 rounded-full">
                        {property.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-2xl font-bold text-text mb-1">
                      ${property.price.toLocaleString()}
                    </p>
                    <h3 className="font-sans text-sm font-semibold text-text mb-1 line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-text-muted text-xs mb-3 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {property.address}, {property.city} FL
                    </p>
                    <p className="text-text-light text-xs leading-relaxed mb-4 line-clamp-2">
                      {property.description}
                    </p>
                    <div className="flex gap-4 text-xs text-text-light border-t border-light-gray pt-3">
                      {property.beds > 0 && (
                        <span className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5" /> {property.beds} Beds
                        </span>
                      )}
                      {property.baths > 0 && (
                        <span className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5" /> {property.baths} Baths
                        </span>
                      )}
                      {property.sqft > 0 && (
                        <span className="flex items-center gap-1">
                          <Maximize className="w-3.5 h-3.5" /> {property.sqft.toLocaleString()} sqft
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA at bottom */}
          <div className="mt-12 bg-white rounded-2xl p-8 text-center shadow-soft">
            <h3 className="font-serif text-xl font-semibold text-text mb-3">
              Don't See What You're Looking For?
            </h3>
            <p className="text-text-light text-sm mb-6 max-w-lg mx-auto">
              I have access to the full MLS and can set up custom alerts for new listings 
              that match your criteria. Let me do the searching for you.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:3522304020"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all no-underline text-sm"
              >
                <Phone className="w-4 h-4" /> Call (352) 230-4020
              </a>
              <Button to="/contact" variant="outline" size="md">
                Send Me Your Wishlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
