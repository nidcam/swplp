import Button, { OfferCtaLabel } from '../ui/Button'
import CountdownTimer from '../CountdownTimer'
import StarRating from '../ui/StarRating'
import { useRegistrationModal } from '../../context/RegistrationModalContext'
import { WEBINAR_FACTS } from '../../lib/webinar'

/**
 * The primary conversion band. The form itself lives in the registration modal —
 * this section carries the offer and opens it.
 */
export default function CtaBand() {
  const { open } = useRegistrationModal()

  return (
    <section className="bg-accent-grad px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-card rounded-card border border-line bg-white p-6 shadow-lift sm:p-10 lg:p-12">
        <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-3xl md:text-[2.25rem]">
          Your Thyroid Is Not A Lifelong Sentence
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-center text-[0.975rem] leading-relaxed text-muted sm:text-base">
          Join Nirmala live on Thursday, 6 August at {WEBINAR_FACTS.time}. 90 minutes.
          LIVE on Zoom. Conducted in Hindi. Completely free.
        </p>

        <CountdownTimer className="mt-8" variant="compact" heading="Webinar Starts In" />

        <div className="mt-9 text-center">
          <Button type="button" onClick={open} fullWidth>
            <OfferCtaLabel />
          </Button>

          <p className="mt-4 text-sm text-muted">FREE Bonuses Only For First 50 People</p>
          <p className="mt-2 text-sm text-muted">
            Your Zoom link and reminders will be sent on WhatsApp.
          </p>

          <StarRating label="Rated 4.7 out of 5" className="mt-4" />
        </div>
      </div>
    </section>
  )
}
