import Button, { OfferCtaLabel } from '../ui/Button'
import InfoBadge from '../ui/InfoBadge'
import CountdownTimer from '../CountdownTimer'
import StarRating from '../ui/StarRating'
import { ShieldIcon } from '../ui/Icons'
import { useRegistrationModal } from '../../context/RegistrationModalContext'
import { WEBINAR_FACTS } from '../../lib/webinar'

const INFO = [
  { icon: 'date', label: 'Date', value: WEBINAR_FACTS.dateShort },
  { icon: 'time', label: 'Time', value: WEBINAR_FACTS.time },
  { icon: 'format', label: 'Format', value: WEBINAR_FACTS.format },
  { icon: 'language', label: 'Language', value: WEBINAR_FACTS.language.replace('Conducted in ', '') },
]

export default function Hero() {
  const { open } = useRegistrationModal()

  return (
    <section id="top">
      {/* 1 — attention strip */}
      <p className="bg-info-grad px-4 py-2.5 text-center text-[0.8rem] font-semibold leading-snug text-white sm:text-sm">
        ⚠️ Attention: People tired of thyroid struggles holding you back?
      </p>

      <div className="bg-mint-grad px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
        <div className="mx-auto w-full max-w-6xl animate-fade-up text-center">
          <StarRating label="Trusted by 50+ People Transformed" />

          {/* 2 — program eyebrow */}
          <div className="mt-4 flex justify-center">
            {/* Darker than text-danger: at this small size, #DC2626 on the soft
                pink fill dips to 4.23:1 — this shade clears 4.5:1. */}
            <p className="rounded-full border border-danger/30 bg-danger-soft px-4 py-1.5 text-center text-[0.8rem] font-semibold text-[#B91C1C] sm:text-sm">
              🔴 3 Hour LIVE Super Thyroid Program
            </p>
          </div>

          {/* 3 — headline */}
          <h1 className="mx-auto mt-6 max-w-4xl text-[1.85rem] font-extrabold leading-[1.15] sm:text-4xl md:text-5xl">
            <span className="text-info">The JADH Health Framework</span> To Reclaim
            Your Energy, Weight &amp; Confidence Without Medication.
          </h1>

          {/* 4 — subheadline */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Learn how busy people are fixing thyroid issues fast, even with a packed
            schedule — no crash diets, no giving up your life.
          </p>

          {/* 5 — video + info badges, side by side on desktop */}
          <div className="mt-10 grid items-start gap-5 text-left lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-6">
            <div className="overflow-hidden rounded-card border border-line shadow-lift">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/L9Wj8c-BLik"
                  title="Super Thyroid — free live webinar preview"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-3">
              {INFO.map(({ icon, label, value }) => (
                <InfoBadge key={label} icon={icon} label={label} value={value} />
              ))}
            </div>
          </div>

          {/* 6 — primary CTA */}
          <div className="mt-10 text-center">
            <Button type="button" onClick={open} fullWidth className="mx-auto max-w-md">
              <OfferCtaLabel />
            </Button>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-muted sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <ShieldIcon className="h-3.5 w-3.5 text-accent" />
                100% Secured Payment
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldIcon className="h-3.5 w-3.5 text-accent" />
                Instant Access
              </span>
            </p>
          </div>

          {/* 7 — countdown card, below the CTA */}
          <div className="mx-auto mt-8 max-w-xs rounded-card border border-line bg-white p-4 shadow-soft">
            <CountdownTimer variant="compact" heading="Enrollment Closes In" />
          </div>
        </div>
      </div>
    </section>
  )
}
