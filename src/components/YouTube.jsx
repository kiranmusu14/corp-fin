export function YouTubeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  )
}

// A red YouTube call-to-action link. `variant` controls size/styling.
export function YouTubeButton({ href, children, variant = 'solid', className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500/50'
  const variants = {
    solid: 'bg-red-600 hover:bg-red-500 text-white px-4 py-2.5 text-sm shadow-[0_10px_30px_-12px_rgba(220,38,38,0.7)]',
    ghost: 'border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 text-red-200 px-4 py-2.5 text-sm',
    chip: 'border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 text-red-200 px-3 py-1 text-xs',
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      <YouTubeIcon className={variant === 'chip' ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
      {children}
    </a>
  )
}
