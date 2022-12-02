import { noop } from './noop';

interface Options {
  onload?: () => void;
  onerror?: () => void;
  attributes?: Record<string, string>;
}

export function loadJavaScript(
  src: string,
  { onerror = noop, onload = noop, attributes = {} }: Options = {}
): void {
  const script = document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  script.onload = onload;
  script.onerror = onerror;
  Object.entries(attributes).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.getElementsByTagName('head')[0].appendChild(script);
}
