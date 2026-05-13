import { useEffect } from 'react'
import { MapPin, CheckCircle, ArrowRight, Shield, Trees, Users } from 'lucide-react'
import { communities } from '../data/communities'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import CTABanner from '../components/sections/CTABanner'

export default function Communities() {
  useEffect(() => {
    document.title = 'Ocala FL Communities | Marion County Neighborhoods | Alisa Realtor'
  }, [])

  const cityComms = communities.filter((c) => c.type === 'city')
  const specialComms = communities.filter((c) => c.type !== 'city')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-warm-white to-accent/5">
        <div className="container-custom px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-text mb-6">
              Explore <span className="italic font-normal text-primary">Our Communities</span>
            </h1>
            <p className="text-lg text-text-light leading-relaxed mb-8">
              From the rolling horse farms of Ocala to the scenic rivers of Dunnellon, Central 
              Florida offers a lifestyle for everyone. Let me help you find the community that 
              feels like home.
            </p>
          </div>
        </div>
      </section>

      {/* City Communities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Cities & Towns"
            subtitle="Each community has its own personality and charm. Here's what makes them special."
          />
          <div className="space-y-12">
            {cityComms.map((community, index) => (
              <div
                key={community.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-soft">
                    <div className="text-center p-8">
                      <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                      <p className="text-text-muted text-sm">{community.name} area photo</p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-2xl font-semibold text-text mb-3">
                    {community.name}
                  </h3>
                  <p className="text-text-light leading-relaxed mb-5">{community.description}</p>
                  <div className="space-y-2 mb-6">
                    {community.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-text">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <Button to="/properties" variant="outline" size="sm">
                    View Homes in {community.name} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Communities */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <SectionHeading
            title="Community Types"
            subtitle="Looking for a specific type of community? The Ocala area has plenty to offer."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialComms.map((community) => (
              <div
                key={community.id}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                  {community.type === 'gated' ? (
                    <Shield className="w-7 h-7" />
                  ) : (
                    <Users className="w-7 h-7" />
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold text-text mb-3">
                  {community.name}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-5">
                  {community.description}
                </p>
                <div className="space-y-2 mb-6">
                  {community.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
                <Button to="/contact" variant="outline" size="sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Where We Serve"
            subtitle="Proudly serving Ocala, Marion County, and the surrounding Central Florida area."
          />
          <div className="rounded-2xl overflow-hidden shadow-soft border border-light-gray">
            <iframe
              title="Ocala Florida Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222538.76761598937!2d-82.3!3d29.187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e61ee70c3a505f%3A0x1f79e3d8d0ba5ad8!2sOcala%2C%20FL!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Local Knowledge Matters"
              subtitle="The Ocala area is growing fast. Here's what's driving it."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <Trees className="w-8 h-8" />,
                  title: 'Horse Capital of the World',
                  desc: 'Home to the World Equestrian Center and hundreds of horse farms, Ocala has a unique equestrian culture.',
                },
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: 'Growing Community',
                  desc: "One of Florida's fastest-growing areas with new construction, dining, shopping, and healthcare expanding rapidly.",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Something for Everyone',
                  desc: 'From young families to active retirees, the Ocala area offers neighborhoods and lifestyles for every stage of life.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h4 className="font-sans font-semibold text-text mb-2">{item.title}</h4>
                  <p className="text-text-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Help Choosing a Community?"
        subtitle="I know these neighborhoods inside and out. Let me help you find the right fit."
        buttonText="Ask Alisa"
        buttonTo="/contact"
      />
    </>
  )
}
