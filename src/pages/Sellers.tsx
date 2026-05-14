import { useEffect } from 'react'
import {
  Camera,
  BarChart3,
  Megaphone,
  Handshake,
  CheckCircle,
  TrendingUp,
  Target,
  Clock,
} from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'

export default function Sellers() {
  useEffect(() => {
    document.title = 'Sell Your Home in Ocala FL | Alisa Realtor'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-accent/5 via-warm-white to-primary/5">
        <div className="container-custom px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-text mb-6">
              Sell Your Home
              <br />
              <span className="italic font-normal text-primary">With Confidence</span>
            </h1>
            <p className="text-lg text-text-light leading-relaxed mb-8">
              Your home is one of your biggest investments. I'll make sure it gets the attention, 
              marketing, and negotiation strategy it deserves — so you get the best possible result.
            </p>
            <div className="flex gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="My Approach to Selling"
            subtitle="Selling your home isn't just about listing it — it's about creating a strategy that gets results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Strategic Pricing',
                desc: "I use up-to-date market data and local comps to price your home right — attracting buyers without leaving money on the table.",
              },
              {
                icon: <Camera className="w-6 h-6" />,
                title: 'Professional Presentation',
                desc: 'From staging advice to professional photography, your home will look its absolute best online and in person.',
              },
              {
                icon: <Megaphone className="w-6 h-6" />,
                title: 'Maximum Exposure',
                desc: 'MLS, social media, video tours, open houses, and targeted digital campaigns — your listing reaches the right buyers.',
              },
              {
                icon: <Handshake className="w-6 h-6" />,
                title: 'Expert Negotiation',
                desc: "When offers come in, I negotiate strategically to protect your interests and maximize your return.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-warm-white rounded-2xl p-6 text-center hover:shadow-soft transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-sans text-base font-semibold text-text mb-3">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="What Sets My Approach Apart"
                centered={false}
              />
              <div className="space-y-6">
                {[
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: 'Personalized Marketing Plan',
                    desc: "No two homes are the same, and neither are my marketing strategies. I create a custom plan tailored to your home's unique features and target buyer profile.",
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: 'Market-Informed Pricing',
                    desc: "I don't guess at pricing. I analyze recent sales, active competition, and market trends to find the sweet spot that attracts buyers and maximizes your profit.",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: 'Consistent Communication',
                    desc: "You'll never wonder what's happening with your listing. I provide regular updates on showings, feedback, and any market shifts that might affect your sale.",
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5" />,
                    title: 'Full-Service Support',
                    desc: 'From initial consultation through closing day, I handle the details — inspections, appraisals, repairs negotiations, and paperwork — so you can focus on your next chapter.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 text-accent-dark">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-text mb-1">{item.title}</h4>
                      <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-text mb-6">
                What Sellers Get From Me
              </h3>
              <ul className="space-y-4">
                {[
                  'Complimentary home value assessment',
                  'Professional photography & virtual tour',
                  'Custom MLS listing optimization',
                  'Social media & digital marketing campaign',
                  'Open house coordination',
                  'Showing feedback reports',
                  'Offer analysis & negotiation strategy',
                  'Transaction management through closing',
                  'Vendor recommendations (stagers, cleaners, handymen)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-light-gray">
                <Button to="/contact" variant="primary" className="w-full">
                  Request Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Thinking About Selling?"
        subtitle="Let me show you what your home could sell for in today's market."
        buttonText="Get a Free Home Valuation"
        buttonTo="/contact"
        variant="accent"
      />
    </>
  )
}
