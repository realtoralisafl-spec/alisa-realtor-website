import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Home as HomeIcon,
  DollarSign,
  Building2,
  TreePine,
  Shield,
  Heart,
  MapPin,
  ArrowRight,
  Star,
  Phone,
} from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import CTABanner from '../components/sections/CTABanner'
import { communities } from '../data/communities'
import { properties } from '../data/properties'

export default function Home() {
  useEffect(() => {
    document.title = 'Alisa | Ocala FL Realtor — Homes for Sale in Marion County'
  }, [])

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3)
  const featuredCommunities = communities.filter((c) => c.type === 'city').slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-home.jpg')" }}
        />

        {/* Content */}
        <div className="relative z-20 container-custom px-4 lg:px-8 text-center pt-20">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in">
              Your Trusted Ocala Real Estate Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up leading-tight">
              Find Your Perfect
              <br />
              <span className="italic font-normal">Florida Home</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
              I'm here to help guide you through every step — whether you're buying your first home, 
              selling, or exploring the Ocala area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button to="/properties" variant="white" size="lg">
                <Search className="w-4 h-4 mr-2" /> Search Properties
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="border-white text-white bg-black/20 backdrop-blur-sm hover:bg-white hover:text-text">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up delay-400">
            {[
              { label: 'Years Experience', value: '10+' },
              { label: 'Homes Sold', value: '200+' },
              { label: 'Areas Served', value: '6+' },
              { label: 'Happy Clients', value: '300+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="How I Can Help You"
            subtitle="Real estate should feel exciting, not overwhelming. Here's how I make the process simple and enjoyable."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              icon={<HomeIcon className="w-6 h-6" />}
              title="Buy a Home"
              description="From finding the right neighborhood to closing day, I'll guide you through every step of the home buying process."
              to="/buyers"
            />
            <Card
              icon={<DollarSign className="w-6 h-6" />}
              title="Sell Your Home"
              description="Strategic pricing, professional marketing, and skilled negotiation to get you the best return on your investment."
              to="/sellers"
            />
            <Card
              icon={<Building2 className="w-6 h-6" />}
              title="New Construction"
              description="Navigate builder contracts, compare upgrades, and understand incentives with an agent who's on your side."
              to="/new-construction"
            />
            <Card
              icon={<TreePine className="w-6 h-6" />}
              title="Land & Lots"
              description="Interested in building custom? I help with land purchases, zoning, financing, and everything in between."
              to="/buyers"
            />
          </div>
        </div>
      </section>

      {/* Why Alisa Section */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder for Alisa's portrait */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-white/50 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-serif text-primary">A</span>
                  </div>
                  <p className="text-text-light text-sm">Portrait photo coming soon</p>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                title="Why Work With Me"
                subtitle="I believe real estate is about people, not transactions."
                centered={false}
              />
              <div className="space-y-5">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Local Market Expert',
                    desc: 'I know Ocala and the surrounding communities inside and out — from horse country to 55+ living.',
                  },
                  {
                    icon: <Heart className="w-5 h-5" />,
                    title: 'Genuinely Caring',
                    desc: "Your goals are my priority. I listen first, then create a strategy that fits your timeline and budget.",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: 'Honest Guidance',
                    desc: "I'll always give you my honest opinion — even if it means steering you away from a property that isn't right.",
                  },
                  {
                    icon: <Star className="w-5 h-5" />,
                    title: 'Modern Marketing',
                    desc: 'Professional photography, social media, video tours, and targeted digital campaigns to maximize exposure.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-text mb-1">{item.title}</h4>
                      <p className="text-text-light text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/about" variant="primary">
                  More About Me <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Featured Properties"
            subtitle="Hand-picked homes in the Ocala area that I think you'll love."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                    <HomeIcon className="w-12 h-12 opacity-30" />
                  </div>
                  <div className="absolute top-3 left-3 bg-primary-dark shadow-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {property.status}
                  </div>
                  {property.type === 'New Construction' && (
                    <div className="absolute top-3 right-3 bg-accent-dark shadow-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      New Build
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-2xl font-bold text-text mb-1">
                    ${property.price.toLocaleString()}
                  </p>
                  <h3 className="font-sans text-sm font-semibold text-text mb-1">{property.title}</h3>
                  <p className="text-text-muted text-xs mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {property.address}, {property.city} FL
                  </p>
                  <div className="flex gap-4 text-xs text-text-light border-t border-light-gray pt-3">
                    {property.beds > 0 && <span>{property.beds} Beds</span>}
                    {property.baths > 0 && <span>{property.baths} Baths</span>}
                    {property.sqft > 0 && <span>{property.sqft.toLocaleString()} Sqft</span>}
                    {property.type === 'Land' && <span>Build Ready</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/properties" variant="outline">
              View All Properties <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Communities Preview */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <SectionHeading
            title="Explore the Ocala Area"
            subtitle="Discover the communities that make Central Florida such a special place to live."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCommunities.map((community) => (
              <Link
                key={community.id}
                to="/communities"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft no-underline"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-semibold text-white mb-1">
                    {community.name}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">
                    {community.description.substring(0, 100)}...
                  </p>
                  <span className="inline-flex items-center gap-1 text-white text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/communities" variant="outline">
              View All Communities <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              title="Let's Talk Real Estate"
              subtitle="Whether you're ready to make a move or just have questions, I'm here to help."
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3522304020"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all no-underline"
              >
                <Phone className="w-4 h-4" /> Call (352) 230-4020
              </a>
              <Button to="/contact" variant="outline">
                Send a Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Find Your Dream Home?"
        subtitle="Let's find the right home for your lifestyle and budget."
        buttonText="Get Started Today"
        buttonTo="/contact"
      />
    </>
  )
}
