import { COMPONENT_LIB_MODULE, COMPONENT_LIB_NO_MODULE } from '@/constants';
import { loadJavaScript } from '@/utils/load-js';

export function loadW3wComponentLib(apiKey: string) {
  const libUrlNoModule = new URL(COMPONENT_LIB_NO_MODULE);
  const libUrlModule = new URL(COMPONENT_LIB_MODULE);

  if (process.env.BASE_URL) {
    libUrlNoModule.searchParams.set('baseUrl', process.env.BASE_URL);
    libUrlModule.searchParams.set('baseUrl', process.env.BASE_URL);
  }

  libUrlNoModule.searchParams.set('key', apiKey);
  libUrlModule.searchParams.set('key', apiKey);

  loadJavaScript(libUrlNoModule.toString(), { attributes: { nomodule: '' } });
  loadJavaScript(libUrlModule.toString(), { attributes: { type: 'module' } });
}
