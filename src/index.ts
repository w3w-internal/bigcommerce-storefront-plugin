import { createAutosuggestComponent } from './components/auto-suggest';
import { loadW3wComponentLib } from './components/lib-src';
import { getObserver } from './components/observers';

loadW3wComponentLib();

const unmountObserver = getObserver('input[name="shippingAddress.address2"]', {
  onUnmount() {
    mountObserver.observe(document.body, { childList: true, subtree: true });
    unmountObserver.disconnect();
  },
});

const mountObserver = getObserver<HTMLInputElement>(
  'input[name="shippingAddress.address2"]',
  {
    onMount(el) {
      const label = document.querySelector(
        '#addressLine2Input-label'
      ) as HTMLLabelElement | null;
      label!.innerHTML = 'what3words address';
      const w3wComponent = createAutosuggestComponent({
        api_key: 'YOUR_API',
      } as any);

      el?.parentNode?.insertBefore(w3wComponent, el);
      el?.setAttribute('autocomplete', 'off');
      w3wComponent.appendChild(el as any);
      mountObserver.disconnect();
      unmountObserver.observe(document, {
        childList: true,
        subtree: true,
      });
    },
  }
);

mountObserver.observe(document, {
  childList: true,
  subtree: true,
});
