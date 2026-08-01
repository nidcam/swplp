export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-[2.25rem]">
        {title}
        {eyebrow && <span className="text-info"> {eyebrow}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
