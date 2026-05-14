import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CardProps {
  image?: string
  title: string
  description: string
  to?: string
  icon?: React.ReactNode
  className?: string
}

export default function Card({ image, title, description, to, icon, className = '' }: CardProps) {
  const content = (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        )}
        <h3 className="font-serif text-xl font-semibold mb-2 text-text">{title}</h3>
        <p className="text-text-light text-sm leading-relaxed mb-4">{description}</p>
        {to && (
          <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </div>
    </div>
  )

  if (to) {
    return (
      <Link to={to} className="no-underline">
        {content}
      </Link>
    )
  }

  return content
}
