const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

/**
 * "Sun, 2 Aug 2026" — matches WEBINAR_FACTS.dateShort's format exactly, but for
 * an arbitrary date. Built manually rather than with Intl so the weekday/month
 * order can't drift by locale.
 */
export function formatDateShort(date) {
  return `${WEEKDAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}
