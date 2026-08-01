import { WEBINAR_FACTS } from '../lib/webinar'

/**
 * The thin "Live on <date> at <time> | Zoom App | Hindi" strip that sits directly
 * above every repeated CTA on the page.
 */
export default function LiveBar({ className = '' }) {
  return (
    <p
      className={`mx-auto flex max-w-md items-center justify-center gap-2 rounded-btn border border-line bg-white px-4 py-2 text-center text-[0.8rem] font-medium text-muted shadow-soft ${className}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-danger" aria-hidden="true" />
      <span>
        Live on <span className="font-semibold text-heading">{WEBINAR_FACTS.dateLong}</span>{' '}
        at {WEBINAR_FACTS.time} · Zoom App · Hindi
      </span>
    </p>
  )
}
