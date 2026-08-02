import { useEffect, useState } from 'react'
import { formatDateShort } from '../lib/date'

/**
 * "Sun, 2 Aug 2026" for the visitor's current local day, re-derived from the
 * clock on a tick — so it advances to the next day's date on its own at
 * midnight, with no page reload.
 */
export function useTodayLabel() {
  const [label, setLabel] = useState(() => formatDateShort(new Date()))

  useEffect(() => {
    const id = setInterval(() => {
      setLabel(formatDateShort(new Date()))
    }, 30_000)

    return () => clearInterval(id)
  }, [])

  return label
}
