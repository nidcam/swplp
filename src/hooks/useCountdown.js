import { useEffect, useState } from 'react'
import { getCountdownState } from '../lib/countdown'

/**
 * The single source of countdown state for the whole page. Both the Hero and the
 * Registration timer render from this, driven by the same WEBINAR_START constant.
 */
export function useCountdown() {
  const [clock, setClock] = useState(() => getCountdownState())

  useEffect(() => {
    const id = setInterval(() => {
      const next = getCountdownState()
      setClock(next)
      // Nothing further to recompute once we are live.
      if (next.isLive) clearInterval(id)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return clock
}
