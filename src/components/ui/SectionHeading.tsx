interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <div className={`accent-line mb-4 ${centered ? 'mx-auto' : ''}`} />
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-semibold mb-4 ${
          light ? 'text-white' : 'text-text'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-text-light'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
