export function formatISODuration(duration: string) {
  const isoDurationRegex =
    /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/

  const matches = isoDurationRegex.exec(duration)

  if (!matches) {
    throw new Error('Invalid ISO 8601 duration format')
  }

  const [, years, months, days, hours, minutes, seconds] = matches

  const formattedParts = []

  if (years) formattedParts.push(`${years}y`)
  if (months) formattedParts.push(`${months}mo`)
  if (days) formattedParts.push(`${days}d`)
  if (hours) formattedParts.push(`${hours}h`)
  if (minutes) formattedParts.push(`${minutes}min`)
  if (!years && !months && !days && !hours && !minutes)
    formattedParts.push(`${seconds}s`)

  return formattedParts.join(' ')
}
