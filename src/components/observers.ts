export function getObserver<T = HTMLElement>(
  selector: string,
  opts: { onUnmount?: () => void; onMount?: (el: T) => void } = {}
) {
  let isMounted = false;
  const observer = new MutationObserver(() => {
    try {
      const element = document.querySelector(selector);
      if (!element && isMounted) {
        isMounted = false;
        opts.onUnmount?.();
      }
      if (element && !isMounted) {
        isMounted = true;
        opts.onMount?.(element as T);
      }
    } catch (error: unknown) {
      observer.disconnect();
      console.error(error);
    }
  });

  return observer;
}
