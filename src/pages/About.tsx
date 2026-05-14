import { useEffect } from 'react'
import { Award, Users, MapPin, Heart, Coffee, Handshake } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'

export default function About() {
  useEffect(() => {
    document.title = 'About Alisa | Ocala FL Realtor'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-warm-white to-light-gray overflow-hidden">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-text mb-6 leading-tight">
                Hi, I'm Alisa.
                <br />
                <span className="italic font-normal text-primary">Nice to meet you.</span>
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-4">
                I'm a licensed real estate agent serving Ocala, Marion County, and the surrounding 
                Central Florida communities. I got into real estate because I genuinely love helping 
                people find a place they can call home.
              </p>
              <p className="text-lg text-text-light leading-relaxed mb-4">
                Whether you're a first-time buyer nervous about the process, a family relocating to 
                Florida, or a retiree exploring 55+ communities — I'm here to make the journey feel 
                smooth, clear, and even a little fun.
              </p>
              <p className="text-lg text-text-light leading-relaxed mb-8">
                I believe in honest communication, personalized attention, and making sure you feel 
                confident in every decision. No pushy sales tactics, no corporate scripts — just 
                real guidance from someone who knows this area and cares about getting it right for you.
              </p>
              <div className="flex gap-4">
                <Button to="/contact" variant="primary">Let's Connect</Button>
                <Button to="/buyers" variant="outline">Explore Services</Button>
              </div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card bg-gradient-to-br from-primary/15 to-accent/15">
                <img src="/images/about-alisa.jpg" alt="Alisa Realtor Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What You Can Expect"
            subtitle="Working with me means having a partner who puts your needs first."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Genuine Care',
                desc: "You're not a transaction number to me. I take the time to understand your goals, your timeline, and what matters most to you and your family.",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Local Expertise',
                desc: 'From Ocala horse country to the 55+ communities in Summerfield, I know these neighborhoods — the schools, the commutes, the hidden gems.',
              },
              {
                icon: <Handshake className="w-6 h-6" />,
                title: 'Honest Communication',
                desc: "I'll always give you my straightforward opinion. If something doesn't feel right about a property or a deal, I'll tell you — every time.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: 'Professional Standards',
                desc: 'I stay on top of market trends, continuing education, and industry best practices so you always get informed, up-to-date guidance.',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Your Advocate',
                desc: "From the offer to the inspection to the closing table, I'm in your corner — negotiating, problem-solving, and making sure your interests are protected.",
              },
              {
                icon: <Coffee className="w-6 h-6" />,
                title: 'Approachable & Available',
                desc: "Have a question at 8pm? That's okay. I believe in being accessible and responsive because buying or selling a home doesn't just happen during business hours.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-warm-white rounded-2xl p-8 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-sans text-lg font-semibold text-text mb-3">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Areas of Expertise"
              subtitle="I specialize in helping specific types of buyers and sellers throughout the Ocala area."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-8">
              {[
                'First-time homebuyers',
                'Families relocating to Central Florida',
                'Buyers searching for gated communities',
                'Retirees exploring 55+ communities',
                'New construction home purchases',
                'Land and lot buyers',
                'Homeowners looking to sell',
                'Investment property guidance',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-text font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Find the Right Home for You"
        subtitle="Whether you're buying, selling, or just exploring — I'd love to hear from you."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  )
}
