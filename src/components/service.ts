import { loadJavaScript } from '../utils/load-js';

export function loadBigCommerceSDK() {
  return new Promise<void>((resolve, reject) => {
    loadJavaScript('https://checkout-sdk.bigcommerce.com/v1/loader.js', {
      onload: resolve,
      onerror: reject,
    });
  });
}
