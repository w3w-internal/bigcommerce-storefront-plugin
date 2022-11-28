interface OptionalFieldType {
  enabled: boolean;
  value: string;
}

interface PluginSettings {
  api_key: string;
  enabled: boolean;
  save_coordinates: OptionalFieldType;
  save_nearest_place: OptionalFieldType;
  show_tooltip: boolean;
  field_label: OptionalFieldType;
  invalid_address_error_message: OptionalFieldType;
  autosuggest_focus: OptionalFieldType;
  n_focus_results: OptionalFieldType;
  field_selector: OptionalFieldType;
  language: OptionalFieldType;
  placeholder: OptionalFieldType;
  clip_to_country: OptionalFieldType;
  clip_to_circle: OptionalFieldType;
  clip_to_bounding_box: OptionalFieldType;
  clip_to_polygon: OptionalFieldType;
}

export type { OptionalFieldType, PluginSettings };
