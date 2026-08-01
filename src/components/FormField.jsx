import { forwardRef } from 'react'
import { CheckIcon, ChevronDownIcon } from './ui/Icons'

const control =
  'w-full min-h-[52px] rounded-btn border bg-white px-4 text-base text-heading ' +
  'placeholder:text-muted/60 transition-colors duration-200 ' +
  'focus:outline-none focus:ring-2 focus:ring-accent/30'

const borderFor = (error) =>
  error ? 'border-danger focus:border-danger' : 'border-line focus:border-accent'

function Wrapper({ id, label, error, children, hint }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-heading">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : (
        hint && <p className="mt-2 text-sm text-muted">{hint}</p>
      )}
    </div>
  )
}

export const TextField = forwardRef(function TextField(
  { id, label, error, hint, ...props },
  ref
) {
  return (
    <Wrapper id={id} label={label} error={error} hint={hint}>
      <input
        ref={ref}
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${control} ${borderFor(error)}`}
        {...props}
      />
    </Wrapper>
  )
})

/**
 * MCQ-style option picker: a single click selects an answer, no open/close step.
 * Replaces the native <select>, whose in-place dropdown rendered with poor
 * contrast on some platforms and needed two clicks (open, then choose).
 */
export function OptionSelectField({ id, label, error, options, value, onChange }) {
  return (
    <Wrapper id={id} label={label} error={error}>
      <div
        id={id}
        role="radiogroup"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="space-y-2.5"
      >
        {options.map((option) => {
          const selected = value === option
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option)}
              className={`flex w-full items-start gap-3 rounded-btn border px-4 py-3.5 text-left text-[0.95rem] leading-relaxed transition-colors duration-150 ${
                selected
                  ? 'border-accent bg-accent-soft text-heading'
                  : 'border-line bg-white text-muted hover:border-accent/50 hover:text-heading'
              }`}
            >
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  selected ? 'border-accent bg-accent-grad text-white' : 'border-line'
                }`}
              >
                {selected && <CheckIcon className="h-3 w-3" strokeWidth={2.5} />}
              </span>
              {option}
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}

export function PhoneField({ id, label, error, countries, country, onCountryChange, ...props }) {
  return (
    <Wrapper id={id} label={label} error={error}>
      <div
        className={`flex min-h-[52px] items-stretch overflow-hidden rounded-btn border bg-white transition-colors duration-200 focus-within:ring-2 focus-within:ring-accent/30 ${borderFor(
          error
        )}`}
      >
        <div className="relative shrink-0">
          <label htmlFor={`${id}-country`} className="sr-only">
            Country code
          </label>
          <select
            id={`${id}-country`}
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            className="h-full appearance-none border-r border-line bg-transparent py-3.5 pl-4 pr-9 text-base text-heading focus:outline-none"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name} ({c.dial})
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        </div>

        <input
          id={id}
          name={id}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          maxLength={10}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="w-full bg-transparent px-3 text-base text-heading placeholder:text-muted/60 focus:outline-none"
          {...props}
        />
      </div>
    </Wrapper>
  )
}
