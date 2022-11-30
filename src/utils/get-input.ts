export function getInput(name: string): HTMLInputElement | null {
  const input =
    (document.querySelector(`input[name="${name}"]`) as HTMLInputElement) ||
    null;
  return input || null;
}
