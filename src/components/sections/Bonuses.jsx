import BonusCard from '../BonusCard'
import CtaBlock from '../CtaBlock'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

const BONUSES = [
  {
    image: '/b1.webp',
    alt: 'The JADH Thyroid Recipe eBook',
    title: 'JADH Thyroid Recipe eBook',
    description: '25+ Easy Indian Recipes For Thyroid Healing',
  },
  {
    image: '/b2.webp',
    alt: 'A 7 day personalized diet plan',
    title: '7 Days Personalized Diet Plan',
    description:
      'Get yourself a personalized diet plan for 7 days by filling a form.',
  },
  {
    image: '/b3.webp',
    alt: 'Thyroid reversal yoga asanas',
    title: 'Thyroid Reversal Yoga Asanas',
    description: 'Do these thyroid reversal yoga asanas daily in the morning.',
  },
]

export default function Bonuses() {
  return (
    <Section>
      <SectionHeading title="Your Exclusive Bonuses Worth Of ₹3,000/-" />

      <ul className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
        {BONUSES.map((bonus) => (
          <BonusCard key={bonus.title} {...bonus} />
        ))}
      </ul>

      <p className="mt-10 text-center text-base text-muted">
        Everything above is included at no extra cost when you register.
      </p>

      <CtaBlock className="mt-10 sm:mt-12" />
    </Section>
  )
}
