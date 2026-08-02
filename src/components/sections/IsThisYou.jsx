import CtaBlock from '../CtaBlock'
import Section from '../ui/Section'
import { CheckIcon } from '../ui/Icons'

const ITEMS = [
  'You wake up exhausted, even after a full night’s sleep',
  'Your hair fall keeps increasing, and no shampoo or oil is fixing it',
  'The weight won’t move — despite dieting, the gym and daily walks',
  'Your blood reports come back “normal”, but you don’t feel normal',
  'You’ve been told “it’s all in your head” or “you’re just stressed”',
  'Mood swings, brain fog, bloating and low energy have become routine',
]

export default function IsThisYou() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-[2.25rem]">
          Why This Workshop Is A Game Changer 😍…
        </h2>
        <p className="mt-2 text-lg font-semibold text-info sm:text-xl">
          Most High Performing People…
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:mt-12 md:grid-cols-2">
        {ITEMS.map((text) => (
          <li
            key={text}
            className="flex items-start gap-3 rounded-card border border-line bg-white px-4 py-3.5 shadow-soft"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-info/30 bg-info-soft text-info">
              <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span className="text-[0.9rem] leading-relaxed text-heading">{text}</span>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-xl text-center text-lg font-bold leading-relaxed text-heading sm:mt-12 sm:text-xl">
        This Challenge Gives You The Solution To All The Above!
      </p>

      <CtaBlock className="mt-8 sm:mt-10" />
    </Section>
  )
}
