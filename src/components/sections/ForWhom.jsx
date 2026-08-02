import Card from '../ui/Card'
import CtaBlock from '../CtaBlock'
import Section from '../ui/Section'
import { CheckIcon, CrossIcon } from '../ui/Icons'

const FOR_YOU = [
  'You’re someone dealing with thyroid, hormonal or stubborn-weight struggles',
  'You’re tired of being dismissed and want to actually understand what’s happening in your body',
  'You’re ready to show up for 90 minutes and commit to yourself',
]

const NOT_FOR_YOU = [
  'You’re looking for instant results without any real change',
  'You’re not willing to show up and commit to yourself',
]

function List({ heading, items, Icon, iconClass }) {
  return (
    <Card className="p-6 sm:p-8">
      <h2 className="text-xl font-bold sm:text-2xl">{heading}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded ${iconClass}`}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[0.95rem] leading-relaxed text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default function ForWhom() {
  return (
    <Section>
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        <List
          heading="This is for you if…"
          items={FOR_YOU}
          Icon={CheckIcon}
          iconClass="bg-accent-grad text-white"
        />
        <List
          heading="This isn’t for you if…"
          items={NOT_FOR_YOU}
          Icon={CrossIcon}
          iconClass="border border-line bg-mint text-muted"
        />
      </div>

      <p className="mt-10 text-center text-base text-muted sm:text-lg">
        This is a working session, not entertainment.
      </p>

      <CtaBlock className="mt-10 sm:mt-12" />
    </Section>
  )
}
