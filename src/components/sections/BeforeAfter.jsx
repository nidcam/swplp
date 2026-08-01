import Card from '../ui/Card'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import CtaBlock from '../CtaBlock'
import { CheckIcon, CrossIcon } from '../ui/Icons'

const BEFORE = [
  'Constant fatigue, low energy',
  'Weight gain despite diet & exercise',
  'Hair fall, brittle nails, dull skin',
  'Irregular periods or hormonal imbalance',
  'Work follows you home and into your thoughts',
  'Brain fog, poor focus, forgetfulness',
  'Mood swings, irritability, stress',
  'Bloating, digestive issues, and constipation',
]

const AFTER = [
  'Your mind becomes calm enough to respond, not react',
  'You move through the day with energy, not fatigue',
  'Your emotions settle instead of spilling over',
  'Sleep becomes deeper, and mornings feel lighter',
  'You can switch off after work—mentally and emotionally',
  'Days feel intentional, not repetitive',
  'Stress leaves the body instead of sitting inside',
  'Clarity returns—along with motivation and new ideas',
]

function Column({ heading, items, Icon, tone }) {
  const paint =
    tone === 'before'
      ? { pill: 'bg-danger-grad text-white', bullet: 'bg-danger-soft text-danger' }
      : { pill: 'bg-accent-grad text-white', bullet: 'bg-accent-soft text-accent' }

  return (
    <Card className="overflow-hidden p-0">
      <div className={`flex items-center gap-2 px-6 py-3.5 text-sm font-bold ${paint.pill}`}>
        <Icon className="h-4 w-4" />
        {heading}
      </div>
      <ul className="space-y-3 p-6 sm:p-7">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded ${paint.bullet}`}
            >
              <Icon className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span className="text-[0.9rem] leading-relaxed text-heading">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default function BeforeAfter() {
  return (
    <Section className="bg-mint-grad">
      <SectionHeading title="What Does This Challenge Do To You?" />

      <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
        <Column
          heading="Before — Where You Are Right Now"
          items={BEFORE}
          Icon={CrossIcon}
          tone="before"
        />
        <Column
          heading="After — Where You’ll Be in 12 Weeks"
          items={AFTER}
          Icon={CheckIcon}
          tone="after"
        />
      </div>

      <CtaBlock className="mt-12" />
    </Section>
  )
}
