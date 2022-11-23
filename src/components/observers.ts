export function getObserver<T = HTMLElement>(
  selector: string,
  opts: { onUnmount?: () => void; onMount?: (el: T) => void } = {}
) {
  return new MutationObserver(() => {
    const element = document.querySelector(selector);
    if (!element) {
      opts.onUnmount?.();
    }
    if (element) {
      opts.onMount?.(element as T);
    }
  });
}
