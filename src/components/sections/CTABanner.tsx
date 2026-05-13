import Button from '../ui/Button'

interface CTABannerProps {
  title: string
  subtitle?: string
  buttonText?: string
  buttonTo?: string
  variant?: 'primary' | 'accent'
}

export default function CTABanner({
  title,
  subtitle,
  buttonText = 'Contact Alisa',
  buttonTo = '/contact',
  variant = 'primary',
}: CTABannerProps) {
  const bg =
    variant === 'primary'
      ? 'bg-gradient-to-r from-primary-dark via-primary to-primary-light'
      : 'bg-gradient-to-r from-accent-dark via-accent to-accent-light'

  return (
    <section className={`${bg} section-padding`}>
      <div className="container-custom text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">{subtitle}</p>
        )}
        <Button to={buttonTo} variant="white" size="lg">
          {buttonText}
        </Button>
      </div>
    </section>
  )
}
