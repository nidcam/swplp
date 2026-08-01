import CtaBlock from '../CtaBlock'
import Section from '../ui/Section'
import { CheckIcon } from '../ui/Icons'

const INCLUDED = [
  'LIVE 90-Minute Webinar',
  'LIVE Zoom Access',
  'Conducted in Hindi',
  'JADH Thyroid Recipe eBook',
  '7 Days Personalized Diet Plan',
  'Thyroid Reversal Yoga Asanas',
  'WhatsApp Reminders',
  'Zoom Link Delivered on WhatsApp',
]

export default function FinalOffer() {
  return (
    <Section className="bg-mint-grad" containerClassName="max-w-3xl text-center">
      <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-[2.25rem]">
        🔥 <span className="text-danger">All FREE!!</span>
      </h2>
      <p className="mt-2 text-lg font-semibold sm:text-xl">
        when you join for just <span className="text-muted line-through">₹499</span>{' '}
        <span className="text-accent">FREE</span>
      </p>

      <ul className="mx-auto mt-10 grid max-w-2xl gap-3.5 text-left sm:grid-cols-2 sm:gap-x-8">
        {INCLUDED.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-accent-grad text-white">
              <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-[0.95rem] leading-relaxed text-heading">{item}</span>
          </li>
        ))}
      </ul>

      <CtaBlock className="mt-12" />
    </Section>
  )
}
