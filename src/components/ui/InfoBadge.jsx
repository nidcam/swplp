import {
  CalendarIcon,
  ClockIcon,
  GlobeIcon,
  ZoomIcon,
} from './Icons'

const ICONS = {
  duration: ClockIcon,
  format: ZoomIcon,
  date: CalendarIcon,
  time: ClockIcon,
  language: GlobeIcon,
}

export default function InfoBadge({ icon = 'date', label, value, className = '' }) {
  const Icon = ICONS[icon] ?? CalendarIcon

  return (
    <div
      className={`flex items-center gap-3 rounded-card border border-line bg-white px-4 py-3 shadow-soft ${className}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-info-grad text-white">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
          {label}
        </div>
        <div className="text-sm font-bold leading-snug text-heading sm:text-[0.95rem]">
          {value}
        </div>
      </div>
    </div>
  )
}
