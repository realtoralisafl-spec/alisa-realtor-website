import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Alisa | Ocala FL Realtor'
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '6219396c-c475-46e7-bc88-3df335042d60',
          ...formData
        })
      })
      
      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full bg-white border border-text-muted/50 rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all'

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-16 bg-gradient-to-br from-primary/5 via-warm-white to-accent/5">
        <div className="container-custom px-4 lg:px-8 text-center">
          <div className="accent-line mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-text mb-4">
            Let's <span className="italic font-normal text-primary">Connect</span>
          </h1>
          <p className="text-lg text-text-light max-w-xl mx-auto">
            Whether you're ready to make a move or just have questions, I'd love to hear from you. 
            No pressure, just a friendly conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-text mb-6">Get in Touch</h2>
              <p className="text-text-light mb-8 leading-relaxed">
                Have a question about buying, selling, or the Ocala market? 
                I'm here to help, reach out anytime.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:3522304020"
                  className="flex items-start gap-4 group no-underline"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-text font-medium">(352) 230-4020</p>
                    <p className="text-text-muted text-xs">Call or text anytime</p>
                  </div>
                </a>

                <a
                  href="mailto:Realtoralisafl@gmail.com"
                  className="flex items-start gap-4 group no-underline"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Email</p>
                    <p className="text-text font-medium">Realtoralisafl@gmail.com</p>
                    <p className="text-text-muted text-xs">I reply within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      Service Area
                    </p>
                    <p className="text-text font-medium">
                      Ocala, Marion County & Central Florida
                    </p>
                    <p className="text-text-muted text-xs">
                      Serving Ocala, Summerfield, Belleview, Dunnellon & more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      Availability
                    </p>
                    <p className="text-text font-medium">7 Days a Week</p>
                    <p className="text-text-muted text-xs">
                      Flexible schedule to fit yours
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Follow Along</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/AlisaBurnsRealtor"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Alisa on Facebook"
                    className="flex-1 py-3 bg-white border border-light-gray rounded-xl text-sm text-text-light hover:bg-primary hover:text-white hover:border-primary transition-all no-underline text-center font-medium shadow-sm"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/realtoralisafl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Alisa on Instagram"
                    className="flex-1 py-3 bg-white border border-light-gray rounded-xl text-sm text-text-light hover:bg-accent hover:text-white hover:border-accent transition-all no-underline text-center font-medium shadow-sm"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-warm-white rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-text mb-3">
                      Thank You!
                    </h3>
                    <p className="text-text-light mb-6">
                      I've received your message and will get back to you as soon as possible. 
                      In the meantime, feel free to call me at{' '}
                      <a href="tel:3522304020" className="text-primary font-medium">
                        (352) 230-4020
                      </a>
                      .
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: '', email: '', phone: '', interest: 'Buying', message: '' })
                      }}
                      className="text-sm text-primary font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Send className="w-5 h-5 text-primary" />
                      <h3 className="font-sans text-lg font-semibold text-text">
                        Send Me a Message
                      </h3>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100">
                          {error}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-text-muted mb-1.5" htmlFor="name">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-text-muted mb-1.5" htmlFor="email">
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-text-muted mb-1.5" htmlFor="phone">
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 555-5555"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-text-muted mb-1.5" htmlFor="interest">
                            I'm Interested In
                          </label>
                          <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option>Buying</option>
                            <option>Selling</option>
                            <option>New Construction</option>
                            <option>Land</option>
                            <option>Just Have Questions</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-text-muted mb-1.5" htmlFor="message">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell me a little about what you're looking for..."
                          value={formData.message}
                          onChange={handleChange}
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-primary text-white py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
                        }`}
                      >
                        <Send className="w-4 h-4" /> {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>

                      <p className="text-xs text-text-muted text-center">
                        I typically respond within a few hours during business days.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-light-gray">
        <div className="container-custom px-4 lg:px-8 py-12">
          <SectionHeading
            title="Find Me in Ocala"
            subtitle="Proudly serving the Ocala area and surrounding Central Florida communities."
          />
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <iframe
              title="Alisa Realtor - Ocala FL Service Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111269.38380799469!2d-82.18!3d29.187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e61ee70c3a505f%3A0x1f79e3d8d0ba5ad8!2sOcala%2C%20FL!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
