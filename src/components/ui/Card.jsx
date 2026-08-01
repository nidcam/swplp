export default function Card({ as = 'div', className = '', children, ...props }) {
  const Tag = as
  return (
    <Tag
      className={`rounded-card border border-line bg-card shadow-soft ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
