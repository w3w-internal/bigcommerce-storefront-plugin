import type { PluginSettings } from '../types/plugin-config';

import { createAutosuggestComponent } from './auto-suggest';
import { createInputFragment } from './input';

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value'
)?.set;

function mountAutoSuggestComponent(
  originalElement: HTMLInputElement,
  config: PluginSettings
) {
  const w3wComponent = createAutosuggestComponent(config, {
    defaultLanguage: 'en',
  });

  w3wComponent.addEventListener('selected_suggestion', (e: any) => {
    nativeInputValueSetter?.call(
      originalElement,
      '///' + e.detail.suggestion.words
    );
    originalElement.dispatchEvent(new Event('input', { bubbles: true }));

    if (config.save_nearest_place) {
      // todo - save nearest place - Tracked in IN-115
    }
  });

  if (config.save_coordinates) {
    w3wComponent.addEventListener('coordinates_changed', (e: any) => {
      const { lat, lng } = e.detail.coordinates;
      // todo - save coordinates - Tracked in IN-116
    });
  }

  const inputFragment = createInputFragment(w3wComponent, {
    label: config?.field_label.enabled
      ? config.field_label.value
      : 'what3words Address',
    showTooltip: config.show_tooltip,
    isOptional: true,
  });

  if (!config.clip_to_country.enabled) {
    const countrySelector = document.querySelector(
      'input[name="shippingAddress.countryCode"]'
    ) as HTMLSelectElement | null;

    if (countrySelector) {
      w3wComponent.setAttribute('clip_to_country', countrySelector.value);

      countrySelector.addEventListener('change', (e: any) => {
        const country = e.target.value;
        w3wComponent.setAttribute('clip_to_country', country);
      });
    }
  }
  const wrapper = originalElement.closest('.dynamic-form-field') as HTMLElement;
  wrapper?.style.setProperty('display', 'none');
  wrapper?.parentNode?.insertBefore(inputFragment, wrapper);
}

export { mountAutoSuggestComponent };
