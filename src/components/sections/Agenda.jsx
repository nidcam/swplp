import Card from '../ui/Card'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import CtaBlock from '../CtaBlock'
import { CheckIcon, ClockIcon } from '../ui/Icons'

const HOURS = [
  {
    hour: 'Hour 1',
    image: '/h1.webp',
    alt: 'Hour 1 — Decode',
    title: 'Decode',
    points: [
      'The Thyroid-Liver Connection Most Doctors Miss',
      'Why medication alone never fixes thyroid',
      '3 Hidden Triggers Causing 90% of symptoms',
      'Introducing JADH Health Framework',
    ],
  },
  {
    hour: 'Hour 2',
    image: '/h2.webp',
    alt: 'Hour 2 — Reset',
    title: 'Reset',
    points: [
      'Why your body resists weight loss with thyroid (and how to overcome it)',
      "The leaky gut-thyroid connection that's silently blocking your results",
      'Simple Indian foods that heal your thyroid naturally',
      'JADH Reset Protocol: Your daily routine to kickstart healing',
    ],
  },
  {
    hour: 'Hour 3',
    image: '/h3.webp',
    alt: 'Hour 3 — Lead',
    title: 'Lead',
    points: [
      'What emotional resilience looks like',
      'The morning routine that balances your thyroid naturally',
      'How micro-practices rewire the brain',
      'JADH Transformation System',
    ],
  },
]

export default function Agenda() {
  return (
    <Section className="bg-mint-grad">
      <SectionHeading title="Complete 3 Hour Agenda.." />

      <ol className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
        {HOURS.map(({ hour, image, alt, title, points }) => (
          <Card as="li" key={title} className="relative flex flex-col overflow-hidden">
            <div className="relative">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-t-card object-cover"
              />
              <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-info-grad px-3 py-1 text-xs font-bold text-white shadow-soft">
                <ClockIcon className="h-3.5 w-3.5" />
                {hour}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl font-bold text-info">{title}</h3>

              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent-grad text-white">
                      <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-[0.9rem] leading-relaxed text-heading">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </ol>

      <CtaBlock className="mt-12" />
    </Section>
  )
}
