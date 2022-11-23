import type { PluginSettings } from '@/types/plugin-config';

interface Props {
  defaultLanguage?: string;
}

function createAutosuggestComponent(config: PluginSettings, props: Props = {}) {
  const w3wComponent = document.createElement('what3words-autosuggest');

  // w3wComponent.setAttribute('variant', 'inherit');
  // w3wComponent.setAttribute(
  //   'headers',
  //   JSON.stringify({
  //     'X-W3W-Plugin':
  //       `what3words-Ecwid/${process.env.VERSION} (` +
  //       [`ecwid/000`].join(' ') +
  //       ')',
  //   })
  // );
  // w3wComponent.setAttribute('return_coordinates', 'true');

  // if (config.clip_to_country.enabled) {
  //   w3wComponent.setAttribute('clip_to_country', config.clip_to_country.value);
  // }
  // if (config.clip_to_polygon.enabled) {
  //   w3wComponent.setAttribute('clip_to_polygon', config.clip_to_polygon.value);
  // }
  // if (config.invalid_address_error_message.enabled) {
  //   w3wComponent.setAttribute(
  //     'invalid_address_error_message',
  //     config.invalid_address_error_message.value
  //   );
  // }
  // if (config.autosuggest_focus.enabled) {
  //   w3wComponent.setAttribute(
  //     'autosuggest_focus',
  //     config.autosuggest_focus.value
  //   );
  // }
  // if (config.n_focus_results.enabled) {
  //   w3wComponent.setAttribute('n_focus_results', config.n_focus_results.value);
  // }
  // if (config.language.enabled) {
  //   w3wComponent.setAttribute('language', config.language.value);
  // } else if (props.defaultLanguage) {
  //   w3wComponent.setAttribute('language', props.defaultLanguage);
  // }

  // if (config.clip_to_bounding_box.enabled) {
  //   w3wComponent.setAttribute(
  //     'clip_to_bounding_box',
  //     config.clip_to_bounding_box.value
  //   );
  // }
  // if (config.clip_to_circle.enabled) {
  //   w3wComponent.setAttribute('clip_to_circle', config.clip_to_circle.value);
  // }

  return w3wComponent;
}

export { createAutosuggestComponent };
