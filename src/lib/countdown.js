import { WEBINAR_START } from './webinar.js'

/**
 * Registration closes at midnight of the visitor's current day, every day, until
 * the webinar itself begins. So the target is always the earlier of:
 *   - the last second of the visitor's current local day (23:59:59)
 *   - WEBINAR_START
 *
 * Because the target is derived from `now` on every tick, the day rollover is
 * handled naturally: at 00:00:00 the target simply becomes the end of the new
 * day. No evergreen offsets, no stored visitor start time, no looping.
 */
export function getTarget(now) {
  const endOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59,
    0
  ).getTime()

  return Math.min(endOfToday, WEBINAR_START.getTime())
}

/** Pure, so the schedule rules can be tested against fixed dates. */
export function getCountdownState(now = new Date()) {
  // Once the webinar has started there is nothing left to count down to.
  if (now.getTime() >= WEBINAR_START.getTime()) {
    return { isLive: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const totalSeconds = Math.floor(Math.max(0, getTarget(now) - now.getTime()) / 1000)

  return {
    isLive: false,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}
