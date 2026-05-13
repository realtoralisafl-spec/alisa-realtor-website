import { useEffect } from 'react'
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Shield,
  Paintbrush,
  FileText,
  DollarSign,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'

export default function NewConstruction() {
  useEffect(() => {
    document.title = 'New Construction Homes Ocala FL | Alisa Realtor'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent/5 via-warm-white to-primary/5">
        <div className="container-custom px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-text mb-6">
              New Construction
              <br />
              <span className="italic font-normal text-primary">Homes in Ocala</span>
            </h1>
            <p className="text-lg text-text-light leading-relaxed mb-8">
              There's something special about being the first to live in a brand-new home. 
              But the process is different from buying resale — and that's where having an 
              experienced agent on your side really matters.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Let's Talk New Construction
            </Button>
          </div>
        </div>
      </section>

      {/* Why New Construction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Consider New Construction?"
            subtitle="Building new offers unique advantages — here's what you can expect."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Paintbrush className="w-6 h-6" />,
                title: 'Choose Your Finishes',
                desc: 'Pick your flooring, countertops, cabinets, and paint colors. Many builders let you personalize your home to match your style.',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Builder Warranties',
                desc: "New homes come with warranties covering structural issues, systems, and sometimes even appliances — giving you peace of mind from day one.",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: 'Builder Incentives',
                desc: "Builders often offer closing cost assistance, rate buydowns, or free upgrades — especially when you work with an agent who knows how to ask.",
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: 'Energy Efficient',
                desc: 'Modern building codes and materials mean better insulation, newer HVAC systems, and lower utility bills compared to older homes.',
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'Community Amenities',
                desc: 'Many new construction communities include pools, fitness centers, walking trails, playgrounds, and clubhouses.',
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: 'Modern Floor Plans',
                desc: 'Open layouts, flex rooms, larger closets, and smart home features designed for the way people live today.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-warm-white rounded-2xl p-6 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-sans text-base font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <SectionHeading
            title="New vs. Existing — An Honest Look"
            subtitle="I want you to make an informed decision, so here's the full picture."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h3 className="font-sans text-lg font-semibold text-text">Pros of Building New</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Everything is brand new — no surprises',
                  'Customize finishes and features',
                  'Energy-efficient construction',
                  'Builder warranties included',
                  'Community amenities from day one',
                  'Potential builder incentives',
                  'Low maintenance for years',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-accent" />
                <h3 className="font-sans text-lg font-semibold text-text">Things to Consider</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Longer build timeline (3-12 months)',
                  'Upgrades can add up quickly',
                  'Builder contracts favor the builder',
                  'Construction delays are possible',
                  'Landscaping is often minimal at first',
                  'Less negotiation flexibility on price',
                  'HOA fees in planned communities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text">
                    <AlertTriangle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need Representation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Why You Need Your Own Agent"
              subtitle="The model home sales agent works for the builder — not for you."
            />
            <div className="bg-primary/5 rounded-2xl p-8 md:p-10 border border-primary/10">
              <p className="text-text-light leading-relaxed mb-6">
                When you visit a builder's sales office, the agent there represents the builder's 
                interests. Having your own buyer's agent (like me!) costs you nothing extra — the 
                builder pays my commission — but it gives you:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Someone reviewing contracts for you',
                  'Guidance on which upgrades add real value',
                  'Help comparing builders objectively',
                  'Negotiation on your behalf',
                  'Independent inspection coordination',
                  'Construction progress monitoring',
                  'Knowledge of builder reputation',
                  'Protection if issues arise',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-text">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-light italic mb-6">
                "A lot of buyers don't realize they can bring their own agent to a new construction purchase. 
                It's free for you, and it means you have someone in your corner throughout the entire build process."
              </p>
              <p className="text-sm font-medium text-primary">— Alisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Areas */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <SectionHeading
            title="Where New Construction Is Growing"
            subtitle="SW Ocala and surrounding areas are seeing significant new development."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { area: 'SW Ocala', desc: 'The fastest-growing corridor with multiple builder communities and new commercial development.' },
              { area: 'SE Ocala', desc: 'New communities popping up near retail centers with easy highway access to I-75.' },
              { area: 'Belleview', desc: 'Affordable new construction options for families and first-time buyers.' },
              { area: 'NW Ocala', desc: 'Premium communities near horse country and the World Equestrian Center.' },
              { area: 'Summerfield', desc: 'New builds catering to active adults and proximity to The Villages.' },
              { area: 'Marion County', desc: 'Scattered custom home lots and smaller builder projects throughout the county.' },
            ].map((item) => (
              <div key={item.area} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-sans font-semibold text-text mb-2">{item.area}</h4>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/properties" variant="primary">
              View New Construction Listings <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in Building New?"
        subtitle="I'll walk you through the process from lot selection to closing day."
        buttonText="Schedule a Consultation"
        buttonTo="/contact"
      />
    </>
  )
}
