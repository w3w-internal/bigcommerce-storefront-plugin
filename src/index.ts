import { createAutosuggestComponent } from './components/auto-suggest';
import { loadW3wComponentLib } from './components/lib-src';
import { getObserver } from './components/observers';

(() => {
  window.w3wConfig = window.w3wConfig || {};
  if (!window.w3wConfig.enabled) {
    return;
  }

  loadW3wComponentLib(window.w3wConfig.api_key);

  const fieldSelector = `input[name="${
    window.w3wConfig.field_selector.enabled
      ? window.w3wConfig.field_selector.value
      : 'shippingAddress.address2'
  }"]`;
  console.log(fieldSelector);
  const unmountObserver = getObserver(fieldSelector, {
    onUnmount() {
      mountObserver.observe(document.body, { childList: true, subtree: true });
      unmountObserver.disconnect();
    },
  });

  const mountObserver = getObserver<HTMLInputElement>(fieldSelector, {
    onMount(el) {
      const label = document.querySelector(
        `label[for="${el.getAttribute('id')}"]`
      ) as HTMLLabelElement | null;
      label!.innerHTML =
        window.w3wConfig.field_label.value || 'what3words Address (optional)';
      const w3wComponent = createAutosuggestComponent(window.w3wConfig);

      el.parentNode?.insertBefore(w3wComponent, el);
      el.setAttribute('autocomplete', 'off');
      w3wComponent.appendChild(el as any);
      mountObserver.disconnect();
      unmountObserver.observe(document, {
        childList: true,
        subtree: true,
      });
    },
  });

  mountObserver.observe(document, {
    childList: true,
    subtree: true,
  });
})();
