import { useCountdown } from '../hooks/useCountdown'

const pad = (n) => String(n).padStart(2, '0')

export const LIVE_MESSAGE =
  "We're going live now — check your WhatsApp for the Zoom link."

/**
 * The one and only countdown on this page. Rendered in the Hero, the sticky
 * bottom bar and the registration modal, always from this component and the
 * same WEBINAR_START-driven hook.
 *
 * variant:
 *   full    — four boxes, hero scale
 *   compact — four boxes, smaller (registration modal)
 *   bar     — hours/minutes/seconds only, tiny (sticky bottom bar)
 *
 * tone:
 *   outline — white box, green border + green digits (used on light backgrounds)
 *   onGreen — used inside the solid-green sticky bar: translucent white boxes
 */
const SIZES = {
  full: {
    box: 'px-1.5 py-3 sm:py-4',
    number: 'text-2xl sm:text-3xl md:text-4xl',
    label: 'text-[10px] sm:text-xs',
    grid: 'max-w-md gap-2.5 sm:gap-4',
  },
  compact: {
    box: 'px-1 py-2.5',
    number: 'text-xl sm:text-2xl',
    label: 'text-[9px]',
    grid: 'max-w-sm gap-2',
  },
  bar: {
    box: 'px-1.5 py-1.5',
    number: 'text-base sm:text-lg',
    label: 'text-[8px] sm:text-[9px]',
    grid: 'gap-1.5',
  },
}

const TONES = {
  outline: {
    box: 'border border-accent/40 bg-white text-accent',
    label: 'text-accent/70',
  },
  onGreen: {
    box: 'border border-white/30 bg-white/15 text-white',
    label: 'text-white/75',
  },
}

export default function CountdownTimer({
  heading,
  variant = 'full',
  tone = 'outline',
  className = '',
}) {
  const { isLive, days, hours, minutes, seconds } = useCountdown()
  const size = SIZES[variant]
  const paint = TONES[tone]

  if (isLive) {
    return (
      <p
        role="status"
        className={`text-center font-semibold leading-relaxed ${
          tone === 'onGreen' ? 'text-white' : 'text-accent'
        } ${
          variant === 'bar' ? 'text-xs sm:text-sm' : 'mx-auto max-w-xl text-base sm:text-lg'
        } ${className}`}
      >
        {LIVE_MESSAGE}
      </p>
    )
  }

  const units =
    variant === 'bar'
      ? [
          { label: 'Hours', value: hours },
          { label: 'Minutes', value: minutes },
          { label: 'Seconds', value: seconds },
        ]
      : [
          { label: 'Days', value: days },
          { label: 'Hours', value: hours },
          { label: 'Minutes', value: minutes },
          { label: 'Seconds', value: seconds },
        ]

  return (
    <div className={className}>
      {heading && (
        <p
          className={`mb-4 text-center text-sm font-semibold sm:text-base ${
            tone === 'onGreen' ? 'text-white/85' : 'text-muted'
          }`}
        >
          {heading}
        </p>
      )}

      <div
        role="timer"
        aria-live="off"
        aria-label={`Registration closes in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`}
        className={`grid ${variant === 'bar' ? 'grid-cols-3' : 'mx-auto grid-cols-4'} ${
          size.grid
        }`}
      >
        {units.map(({ label, value }) => (
          <div key={label} className={`rounded-btn text-center ${paint.box} ${size.box}`}>
            <div className={`font-bold tabular-nums leading-none ${size.number}`}>
              {pad(value)}
            </div>
            <div
              className={`mt-1 font-semibold uppercase tracking-wider ${paint.label} ${size.label}`}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
