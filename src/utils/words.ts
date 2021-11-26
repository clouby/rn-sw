export function getWords(words: string, size: number): string {
  if (!size) return words

  return words.split(' ').slice(0, size).join(' ')
}
