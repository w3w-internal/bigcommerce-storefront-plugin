import type { PluginSettings } from './plugin-config';

declare global {
  interface Window {
    w3wConfig: PluginSettings;
  }
}
