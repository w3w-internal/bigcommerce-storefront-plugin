import { Chance } from 'chance';

import type { PluginSettings } from '@/types/plugin-config';

import { createAutosuggestComponent } from '../auto-suggest';

const chance = new Chance();

it('should mount autosuggest component with the right attr', () => {
  const config: Partial<PluginSettings> = {
    enabled: true,
    save_coordinates: { enabled: chance.bool(), value: chance.string() },
    clip_to_country: {
      enabled: chance.bool(),
      value: chance.string(),
    },
    clip_to_polygon: {
      enabled: chance.bool(),
      value: chance.string(),
    },
    invalid_address_error_message: {
      enabled: chance.bool(),
      value: chance.string(),
    },
    autosuggest_focus: {
      enabled: chance.bool(),
      value: chance.string(),
    },
    n_focus_results: {
      enabled: chance.bool(),
      value: chance.string(),
    },
    clip_to_bounding_box: {
      enabled: chance.bool(),
      value: chance.string(),
    },
    clip_to_circle: {
      enabled: chance.bool(),
      value: chance.string(),
    },
    language: {
      enabled: chance.bool(),
      value: chance.string(),
    },
  };
  const w3wComponent = createAutosuggestComponent(config as PluginSettings, {
    defaultLanguage: 'en',
  });
  Object.entries(config).forEach(([key, value]) => {
    if (['save_coordinates', 'enabled'].includes(key)) {
      return;
    }
    if (typeof value === 'object' && value?.enabled) {
      expect(w3wComponent.getAttribute(key)).toBe(value.value);
    }
  });
});
