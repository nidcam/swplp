import CountdownTimer from './CountdownTimer'
import { useScrolledPast } from '../hooks/useScrolledPast'
import { useTodayLabel } from '../hooks/useTodayLabel'
import { useRegistrationModal } from '../context/RegistrationModalContext'

/**
 * Fixed to the bottom of the viewport once the Hero has scrolled out of view,
 * and hidden again when the visitor scrolls back up into it.
 *
 * Reuses the shared CountdownTimer (bar variant, onGreen tone) — no separate
 * timer instance.
 */
export default function StickyBottomBar() {
  const visible = useScrolledPast('top')
  const { open } = useRegistrationModal()
  // Registration closes at midnight of the visitor's own day (see
  // lib/countdown.js), so this line always names *today's* date, not the
  // webinar's date — it advances on its own at midnight.
  const todayLabel = useTodayLabel()
  const urgencyLine = `Hurry! Enrollment Closes on Midnight of ${todayLabel}`

  return (
    <div
      /* Transition rather than a keyframe animation, so the resting visible
         state is correct even if the entrance animation never runs. */
      className={`fixed inset-x-0 bottom-0 z-40 bg-accent-grad shadow-bar transition-[transform,opacity] duration-300 ease-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-full opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-3">
        {/* Mobile: urgency line on its own row, then countdown + button. */}
        <p className="mb-2 text-center text-[11px] font-medium text-white/85 md:hidden">
          {urgencyLine}
        </p>

        <div className="flex items-center justify-between gap-3 md:justify-start md:gap-6">
          <CountdownTimer variant="bar" tone="onGreen" className="shrink-0" />

          <p className="hidden flex-1 text-sm font-medium text-white/85 md:block">
            {urgencyLine}
          </p>

          <button
            type="button"
            onClick={open}
            tabIndex={visible ? undefined : -1}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-btn bg-white px-5 py-2.5 text-sm font-semibold text-accent transition-colors duration-200 hover:bg-white/90 md:flex-none md:px-7 md:text-base"
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  )
}
