import { useEffect, useState } from 'react'

/**
 * True once the given element has left the viewport entirely — used to reveal the
 * sticky bottom bar after the Hero, and to hide it again when the visitor
 * scrolls back up into the Hero.
 */
export function useScrolledPast(elementId) {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const target = document.getElementById(elementId)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolledPast(!entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [elementId])

  return scrolledPast
}
