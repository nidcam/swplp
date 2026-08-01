import CtaBlock from '../CtaBlock'
import Section from '../ui/Section'

const STATS = [
  { value: '6', label: 'Years Medication-Free' },
  { value: '2', label: 'Months To Optimal Labs' },
  { value: '50', label: 'Women Helped' },
]

export default function Host() {
  return (
    <Section className="bg-mint-grad">
      <h2 className="text-center text-2xl font-bold leading-tight sm:text-3xl md:text-[2.25rem]">
        About Your Coach
      </h2>

      <div className="mt-10 grid items-start gap-8 sm:mt-12 md:grid-cols-[minmax(0,300px)_1fr] md:gap-10">
        <img
          src="/nirmala.webp"
          alt="Nirmala Kumari, Genetic Wellness Consultant"
          loading="lazy"
          decoding="async"
          width="300"
          height="400"
          className="mx-auto w-full max-w-[300px] rounded-card border border-line object-cover shadow-lift"
        />

        <div className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-8">
          <h3 className="text-xl font-bold text-info sm:text-2xl">Nirmala Kumari</h3>
          <p className="mt-1 text-[0.9rem] leading-relaxed text-muted">
            Genetic Wellness Consultant · Hashimoto&rsquo;s &amp; Hormone Specialist
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-btn bg-info-soft px-2 py-3 text-center"
              >
                <div className="text-xl font-extrabold text-info sm:text-2xl">{value}</div>
                <div className="mt-1 text-[10px] font-medium leading-tight text-muted sm:text-[11px]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4 text-[0.9rem] leading-relaxed text-muted">
            <p>
              Nirmala was diagnosed with Hashimoto&rsquo;s Thyroiditis. For years she
              battled fatigue, hair fall, weight gain and mood swings. Her reports kept
              coming back &ldquo;normal&rdquo;, and she kept being told it was all in her
              head. Doctors told her she&rsquo;d be on medication for life — that it was
              genetic and couldn&rsquo;t be reversed.
            </p>
            <p>
              She refused to accept that. After two years of deep study across nutrition,
              dietetics, DNA-based health and yoga, she rebuilt her health from the root.
              Today she helps other women reclaim their health naturally.
            </p>
          </div>

          <div className="mt-6 border-t border-line pt-5">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Certified In
            </h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-heading">
              Nutrition · Dietetics · Health Coaching · Yoga Teacher Training · DNA-Based
              Health Coaching
            </p>
            <p className="mt-2 text-sm text-muted">Living proof — not just theory.</p>
          </div>
        </div>
      </div>

      <CtaBlock className="mt-12" />
    </Section>
  )
}
