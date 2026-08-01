import Button, { OfferCtaLabel } from './ui/Button'
import LiveBar from './LiveBar'
import StarRating from './ui/StarRating'
import { useRegistrationModal } from '../context/RegistrationModalContext'

/**
 * The section-level call to action. Every section on the page ends with one —
 * a live bar, the offer button, and a star rating — and they all open the same
 * registration modal.
 */
export default function CtaBlock({ className = '', note = true }) {
  const { open } = useRegistrationModal()

  return (
    <div className={`text-center ${className}`}>
      <LiveBar className="mb-5" />

      <Button type="button" onClick={open} className="mx-auto max-w-md" fullWidth>
        <OfferCtaLabel />
      </Button>

      {note && (
        <p className="mt-4 text-sm text-muted">FREE Bonuses Only For First 50 People</p>
      )}

      <StarRating label="Rated 4.7 out of 5" className="mt-4" />
    </div>
  )
}
