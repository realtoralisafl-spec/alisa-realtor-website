import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  to?: string
  href?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 no-underline cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg',
    secondary:
      'bg-accent text-white hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg',
    outline:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5',
    white:
      'bg-white text-text hover:bg-light-gray hover:-translate-y-0.5 hover:shadow-lg',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
