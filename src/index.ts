import { createAutosuggestComponent } from './components/auto-suggest';
import { loadW3wComponentLib } from './components/lib-src';
import { getObserver } from './components/observers';

(async () => {
  window.w3wConfig = window.w3wConfig || {
    field_selector: {
      enabled: false,
    },
    enabled: true,
    api_key: 'ANCFEHWH',
    field_label: {
      enabled: false,
    },
  };
  if (!window.w3wConfig.enabled) {
    return;
  }

  loadW3wComponentLib(window.w3wConfig.api_key);

  const fieldSelector = `input[name="${
    window.w3wConfig.field_selector.enabled
      ? window.w3wConfig.field_selector.value
      : 'shippingAddress.address2'
  }"]`;
  const unmountObserver = getObserver(fieldSelector, {
    onUnmount() {
      mountObserver.observe(document.body, { childList: true, subtree: true });
      unmountObserver.disconnect();
    },
  });

  // Experiment
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
      w3wComponent.addEventListener('selected_suggestion', (e: any) => {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          'value'
        )?.set;
        // space is needed to override the shallow comparison done by the bigcommerce checkout
        nativeInputValueSetter?.call(el, '/// ' + e.detail.suggestion.words);
      });
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
