import type { PluginSettings } from '@/types/plugin-config';
import { getInput } from '@/utils/get-input';
import { hideDynamicField, hideElement } from '@/utils/hide-element';
import { setElementValue } from '@/utils/set-element-value';

import { createAutosuggestComponent } from './auto-suggest';
import { createInputFragment } from './input';

function mountAutoSuggestComponent(
  originalElement: HTMLInputElement,
  config: PluginSettings
) {
  const nearestPlaceInput = config.save_nearest_place.enabled
    ? getInput(config.save_nearest_place.value)
    : null;
  hideDynamicField(nearestPlaceInput);

  const w3wComponent = createAutosuggestComponent(config, {
    defaultLanguage: 'en',
  });

  w3wComponent.addEventListener('selected_suggestion', (e: any) => {
    setElementValue(originalElement, '///' + e.detail.suggestion.words);
    if (nearestPlaceInput) {
      setElementValue(nearestPlaceInput, e.detail.suggestion.nearestPlace);
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
  hideElement(wrapper);
  wrapper?.parentNode?.insertBefore(inputFragment, wrapper);
}

export { mountAutoSuggestComponent };
