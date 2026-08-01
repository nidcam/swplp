import Card from './ui/Card'

export default function BonusCard({ image, alt, title, description, price = '₹1,000/-' }) {
  return (
    <Card as="li" className="flex flex-col overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full rounded-t-card object-cover"
        />
        <span className="absolute left-3 top-3 rounded bg-danger-grad px-2.5 py-1 text-xs font-bold text-white shadow-soft">
          Worth {price}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug text-info">{title}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">
          {description}
        </p>

        <p className="mt-5 flex items-baseline gap-2.5 border-t border-line pt-4">
          <span className="text-base text-muted line-through">{price}</span>
          <span className="text-xl font-extrabold text-accent sm:text-2xl">FREE</span>
        </p>
      </div>
    </Card>
  )
}
