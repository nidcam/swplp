import { useEffect, useRef, useState } from 'react'
import Button, { OfferCtaLabel } from './ui/Button'
import CountdownTimer from './CountdownTimer'
import { OptionSelectField, PhoneField, TextField } from './FormField'
import { useRegistrationModal } from '../context/RegistrationModalContext'
import { WHATSAPP_GROUP_URL } from '../lib/webinar'
import { submitLead } from '../lib/submitLead'

const COUNTRIES = [{ code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' }]

const STRUGGLE_OPTIONS = [
  'Stubborn belly fat that won’t go away despite diet and exercise',
  'Constant fatigue and low energy throughout the day',
  'Hair loss, mood swings, and irregular periods',
  'All of the above - I’m dealing with multiple issues',
]

const DURATION_OPTIONS = [
  'Less than 6 months - it’s getting worse',
  '1-2 years - nothing seems to work',
  '3+ years - I’ve tried everything',
  'I’ve been dealing with this most of my adult life',
]

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  biggest_struggle: '',
  struggle_duration: '',
}

const REDIRECT_DELAY_MS = 2500

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.phone) {
    errors.phone = 'Please enter your mobile number.'
  } else if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = 'Please enter exactly 10 digits after the country code.'
  }

  if (!values.biggest_struggle) {
    errors.biggest_struggle = 'Please choose the option closest to how you feel.'
  }

  if (!values.struggle_duration) {
    errors.struggle_duration = 'Please let us know how long this has been going on.'
  }

  return errors
}

export default function RegistrationModal() {
  const { isOpen, close } = useRegistrationModal()

  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [country, setCountry] = useState('IN')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [submitError, setSubmitError] = useState('')

  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)

  // Lock body scroll, close on Escape, and move focus into the dialog.
  useEffect(() => {
    if (!isOpen) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape' && status !== 'submitting') close()
    }
    document.addEventListener('keydown', onKeyDown)

    firstFieldRef.current?.focus()

    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close, status])

  if (!isOpen) return null

  const setFieldValue = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
    setSubmitError('')
  }

  const setField = (field) => (event) => {
    const raw = event.target.value
    setFieldValue(field, field === 'phone' ? raw.replace(/\D/g, '').slice(0, 10) : raw)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    setSubmitError('')

    // The two MCQ answers aren't a single free-text field, so they're folded
    // into `message` — the Edge Function has no dedicated slot for them.
    const message = `Biggest struggle: ${values.biggest_struggle} | Duration: ${values.struggle_duration}`

    try {
      await submitLead({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone,
        message,
      })

      setStatus('success')
      setTimeout(() => {
        window.location.href = WHATSAPP_GROUP_URL
      }, REDIRECT_DELAY_MS)
    } catch (err) {
      // Form values are left untouched — nothing the visitor typed is lost.
      setStatus('error')
      setSubmitError(
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-heading/60 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && status !== 'submitting') close()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-modal-title"
        className="relative my-auto w-full max-w-card rounded-card border border-line bg-white p-6 shadow-lift sm:p-9"
      >
        <button
          type="button"
          onClick={close}
          disabled={status === 'submitting'}
          aria-label="Close registration form"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-btn text-muted transition-colors hover:bg-mint hover:text-heading disabled:opacity-50"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M7 7l10 10M17 7 7 17" />
          </svg>
        </button>

        <h2
          id="registration-modal-title"
          className="pr-10 text-center text-xl font-extrabold leading-tight sm:text-2xl md:text-[1.75rem]"
        >
          Your Thyroid Is Not A Lifelong Sentence
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-center text-[0.9rem] leading-relaxed text-muted">
          Join Nirmala live on Thursday, 6 August at 8:00 PM IST. 90 minutes. LIVE on
          Zoom. Conducted in Hindi. Completely free.
        </p>

        <CountdownTimer className="mt-6" variant="compact" />

        {status === 'success' ? (
          <div
            role="status"
            className="mt-7 rounded-card border border-line bg-mint p-8 text-center shadow-soft"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-2xl text-accent">
              ✓
            </span>
            <h3 className="mt-5 text-xl font-bold sm:text-2xl">You&rsquo;re registered!</h3>
            <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted">
              Taking you to the WhatsApp group where your Zoom link will be shared.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
            <TextField
              ref={firstFieldRef}
              id="name"
              label="Name *"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={values.name}
              onChange={setField('name')}
              error={errors.name}
            />

            <TextField
              id="email"
              label="Email *"
              type="email"
              placeholder="Enter your email address"
              autoComplete="email"
              value={values.email}
              onChange={setField('email')}
              error={errors.email}
            />

            <PhoneField
              id="phone"
              label="Phone *"
              placeholder="10-digit mobile number"
              countries={COUNTRIES}
              country={country}
              onCountryChange={setCountry}
              value={values.phone}
              onChange={setField('phone')}
              error={errors.phone}
            />

            <OptionSelectField
              id="biggest_struggle"
              label="What's Your Biggest Health Struggle Right Now? *"
              options={STRUGGLE_OPTIONS}
              value={values.biggest_struggle}
              onChange={(option) => setFieldValue('biggest_struggle', option)}
              error={errors.biggest_struggle}
            />

            <OptionSelectField
              id="struggle_duration"
              label="How Long Have You Been Struggling With These Health Issues? *"
              options={DURATION_OPTIONS}
              value={values.struggle_duration}
              onChange={(option) => setFieldValue('struggle_duration', option)}
              error={errors.struggle_duration}
            />

            <div className="pt-1">
              {status === 'error' && (
                <p role="alert" className="mb-4 text-center text-sm text-danger">
                  {submitError}
                </p>
              )}

              <Button type="submit" fullWidth disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                    />
                    Registering…
                  </>
                ) : (
                  <OfferCtaLabel />
                )}
              </Button>

              <p className="mt-4 text-center text-sm text-muted">
                FREE Bonuses Only For First 50 People
              </p>
              <p className="mt-2 text-center text-sm text-muted">
                Your Zoom link and reminders will be sent on WhatsApp.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
