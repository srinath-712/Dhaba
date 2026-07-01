/**
 * Checks if a restaurant branch is currently open based on current system time
 * and openTime/closeTime strings (format: "HH:MM", 24-hour).
 * 
 * Supports cases where closing time is past midnight (e.g. open at 11:00 and close at 01:00).
 * 
 * @param {string} openTimeStr - Format: "HH:MM" (e.g. "11:00")
 * @param {string} closeTimeStr - Format: "HH:MM" (e.g. "23:00")
 * @returns {boolean} True if the current time falls inside the range, false otherwise.
 */
export function isBranchOpen(openTimeStr = '11:00', closeTimeStr = '23:00') {
  if (!openTimeStr || !closeTimeStr) return false

  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()

  const [openHour, openMinute] = openTimeStr.split(':').map(Number)
  const [closeHour, closeMinute] = closeTimeStr.split(':').map(Number)

  const currentMinutes = currentHour * 60 + currentMinute
  const openMinutes = openHour * 60 + openMinute
  const closeMinutes = closeHour * 60 + closeMinute

  if (closeMinutes < openMinutes) {
    // Closing time is on the next day (e.g. closes at 01:00 AM)
    return currentMinutes >= openMinutes || currentMinutes < closeMinutes
  } else {
    // Standard hours (e.g. closes at 11:00 PM / 23:00)
    return currentMinutes >= openMinutes && currentMinutes < closeMinutes
  }
}
