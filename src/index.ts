import './components/tooltip';
import './styles.css';

import { loadW3wComponentLib } from './components/lib-src';
import { mountAutoSuggestComponent } from './components/mount-auto-suggest';
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
    autosuggest_focus: {
      enabled: false,
    },
    save_coordinates: false,
    save_nearest_place: {
      enabled: true,
      value: 'shippingAddress.customFields.field_26',
    },
    show_tooltip: true,
    clip_to_bounding_box: { enabled: false },
    clip_to_circle: { enabled: false },
    clip_to_country: { enabled: false },
    clip_to_polygon: { enabled: false },
    invalid_address_error_message: { enabled: false },
    language: { enabled: false },
    n_focus_results: { enabled: false },
    placeholder: { enabled: false },
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

  const observer = getObserver<HTMLInputElement>(fieldSelector, {
    onUnmount() {},
    onMount(el) {
      mountAutoSuggestComponent(el, window.w3wConfig);
    },
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
