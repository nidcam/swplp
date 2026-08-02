const base =
  'inline-flex min-h-[56px] items-center justify-center gap-2 rounded-btn px-8 py-4 ' +
  // transition-all (not just -colors) so the registration modal's submit
  // button can morph its own size/shape smoothly when it shrinks into the
  // "confirming" state — see RegistrationModal.jsx.
  'text-base font-semibold leading-snug transition-all duration-300 ' +
  'disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg'

const variants = {
  // White text on the green gradient: >= 4.6:1 across every stop.
  primary: 'bg-accent-grad text-white shadow-soft hover:bg-none hover:bg-accent-dark',
  outline: 'border border-line bg-white text-heading hover:border-accent hover:text-accent',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}) {
  const Tag = as
  return (
    <Tag
      className={`${base} ${variants[variant]} ${
        fullWidth ? 'w-full' : 'w-full sm:w-auto'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

/**
 * The offer CTA label, used verbatim wherever the offer CTA appears:
 * "YES, I Want Thyroid Relief & Energy @ ~~₹499~~ FREE"
 *
 * FREE sits on a dark chip so the word itself reads clearly against the green
 * fill — plain white-on-white would be invisible.
 */
export function OfferCtaLabel() {
  return (
    <span className="text-balance">
      YES, I Want Thyroid Relief &amp; Energy @{' '}
      <span className="text-white/70 line-through">₹499</span>{' '}
      <span className="ml-0.5 inline-block rounded bg-white/20 px-2 py-0.5 font-extrabold text-white">
        FREE
      </span>
    </span>
  )
}
