import { StarIcon } from './Icons'

export default function StarRating({ label, className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      <span className="flex gap-0.5 text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </span>
      {label && <span className="text-[0.8rem] font-medium text-muted">{label}</span>}
    </div>
  )
}
