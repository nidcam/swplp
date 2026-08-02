import Card from '../ui/Card'
import CtaBlock from '../CtaBlock'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { QuoteIcon } from '../ui/Icons'
import StarRating from '../ui/StarRating'

export default function Proof() {
  return (
    <Section className="bg-mint-grad">
      <SectionHeading title="More Proofs, Real Results" />

      <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
        <Card className="flex flex-col justify-center p-6 text-center sm:p-7">
          <div className="text-5xl font-extrabold leading-none text-accent sm:text-6xl">
            50
          </div>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            People who have successfully reversed their thyroid.
          </p>
        </Card>

        <Card className="p-6 sm:p-7">
          <h3 className="text-lg font-bold">Nirmala&rsquo;s Journey</h3>

          <dl className="mt-5 space-y-4">
            <div>
              <dt className="text-2xl font-extrabold text-accent">2 months</dt>
              <dd className="mt-1 text-[0.9rem] leading-relaxed text-muted">
                Lab reports back in the optimal range.
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-extrabold text-accent">6 years</dt>
              <dd className="mt-1 text-[0.9rem] leading-relaxed text-muted">
                Medication-free.
              </dd>
            </div>
          </dl>

          <p className="mt-5 border-t border-line pt-5 text-[0.9rem] leading-relaxed text-muted">
            Diagnosed with Hashimoto&rsquo;s and told she&rsquo;d need medication for
            life, she rebuilt her health from the root after two years of study across
            nutrition, dietetics, DNA-based health and yoga.
          </p>
        </Card>

        <Card as="figure" className="flex flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <QuoteIcon className="h-7 w-7 text-accent/40" />
            <StarRating />
          </div>

          <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">
            She struggled with sleepless nights, constant stress and confusion about what
            to eat. With simple changes to her lifestyle, diet and sleep, her stress
            dropped, her sleep improved dramatically, and she saw real changes in her body
            — without any complicated routine.
          </blockquote>

          <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-lg font-bold text-accent"
            >
              R
            </span>
            <span>
              <span className="block font-semibold text-heading">Riya</span>
              <span className="block text-sm text-muted">Life &amp; Manifestation Coach</span>
            </span>
          </figcaption>
        </Card>
      </div>

      <CtaBlock className="mt-12" />
    </Section>
  )
}
