export default function Section({
  id,
  className = '',
  containerClassName = '',
  children,
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-6 sm:py-20 lg:py-24 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>{children}</div>
    </section>
  )
}
