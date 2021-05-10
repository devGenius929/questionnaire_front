export default function isBlank(value: string): boolean {
  if (!value) return true;

  return value.trim() === '';
}
