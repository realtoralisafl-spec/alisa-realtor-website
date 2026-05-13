import { useEffect } from 'react'
import {
  Search,
  FileCheck,
  Banknote,
  ClipboardCheck,
  Key,
  Home,
  Building2,
  HelpCircle,
  ArrowRight,
} from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'

const steps = [
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: 'Initial Consultation',
    desc: "We'll sit down (or hop on a call) to discuss your goals, budget, timeline, and what you're looking for in a home.",
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    title: 'Get Pre-Approved',
    desc: "I'll connect you with trusted lenders to get pre-approved, so you know exactly what you can afford and sellers take you seriously.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Search & Tour Homes',
    desc: "Based on your criteria, I'll curate listings and schedule showings. I'll point out details you might miss and help you compare options.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Make an Offer',
    desc: "Found the one? I'll help you craft a competitive offer, negotiate on your behalf, and navigate any counteroffers.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Inspections & Due Diligence',
    desc: "I'll coordinate inspections, review results with you, and negotiate any repairs or credits needed before closing.",
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: 'Close & Get Your Keys',
    desc: "We'll do a final walkthrough, go through closing paperwork, and then — you get the keys to your new home!",
  },
]

export default function Buyers() {
  useEffect(() => {
    document.title = 'Buy a Home in Ocala FL | Alisa Realtor'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-warm-white to-accent/5">
        <div className="container-custom px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-text mb-6">
              Buying a Home
              <br />
              <span className="italic font-normal text-primary">Should Feel Exciting</span>
            </h1>
            <p className="text-lg text-text-light leading-relaxed mb-8">
              Not overwhelming. Whether this is your first home or your fifth, I'm here to make the 
              process clear, comfortable, and even enjoyable. Let's find the right home for your 
              lifestyle and budget.
            </p>
            <div className="flex gap-4 justify-center">
              <Button to="/properties" variant="primary" size="lg">
                <Search className="w-4 h-4 mr-2" /> Browse Properties
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="The Home Buying Process"
            subtitle="Here's a simple overview of how we'll work together to find and close on your new home."
          />
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/15 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Step {index + 1}
                    </span>
                    <h3 className="font-sans text-lg font-semibold text-text">{step.title}</h3>
                  </div>
                  <p className="text-text-light text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First-Time Buyers */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="First-Time Homebuyer?"
                subtitle="Don't worry — everyone starts somewhere, and I love working with first-time buyers."
                centered={false}
              />
              <div className="space-y-4 mb-8">
                <p className="text-text-light leading-relaxed">
                  Buying your first home is a big deal, and it's completely normal to feel a mix of 
                  excitement and nerves. My job is to break everything down into simple, manageable 
                  steps so you always know what's coming next.
                </p>
                <p className="text-text-light leading-relaxed">
                  I'll help you understand financing options (including FHA, VA, and down payment 
                  assistance programs), guide you through inspections and appraisals, and make sure 
                  you never feel pressured to rush into a decision.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Understanding mortgage pre-approval',
                  'Down payment options & assistance programs',
                  'Choosing the right neighborhood',
                  'What to look for during showings',
                  'Navigating inspections & appraisals',
                  'Closing costs explained simply',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button to="/contact" variant="primary">
                Let's Chat About Your First Home <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <Home className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif text-2xl font-semibold text-text mb-4">
                "Real estate should feel exciting, not overwhelming."
              </h3>
              <p className="text-text-light leading-relaxed mb-6">
                I remember how confusing things can feel when you're just getting started. That's 
                why I take a patient, educational approach — answering every question, explaining 
                every document, and celebrating every milestone with you.
              </p>
              <p className="text-sm text-primary font-medium">— Alisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Teaser */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <Building2 className="w-16 h-16 text-primary flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-serif text-2xl font-semibold text-text mb-2">
                Considering New Construction?
              </h3>
              <p className="text-text-light mb-4">
                Building new has its own set of considerations — from choosing a builder to comparing 
                upgrades to understanding contracts. I have experience guiding buyers through the 
                new construction process.
              </p>
              <Button to="/new-construction" variant="primary" size="sm">
                Learn About New Construction <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Home Search?"
        subtitle="Let me help you find the perfect home in Ocala and Central Florida."
        buttonText="Browse Properties"
        buttonTo="/properties"
      />
    </>
  )
}
