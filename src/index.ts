import { createAutosuggestComponent } from './components/auto-suggest';
import { loadW3wComponentLib } from './components/lib-src';
import { getObserver } from './components/observers';
import { loadBigCommerceSDK } from './components/service';

(async () => {
  await loadBigCommerceSDK();
  const bcSdk = await (window as any).checkoutKitLoader.load('checkout-sdk');
  const checkoutService = bcSdk.createCheckoutService();
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
  console.log(fieldSelector);
  const unmountObserver = getObserver(fieldSelector, {
    onUnmount() {
      mountObserver.observe(document.body, { childList: true, subtree: true });
      unmountObserver.disconnect();
    },
  });

  // Experiment
  const cart = await fetch('/api/storefront/carts')
    .then(res => res.json())
    .then(data => data[0]);
  const state = await checkoutService.loadCheckout(cart.id);
  console.log(state);
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
        setTimeout(() => {
          checkoutService.updateShippingAddress({
            address2: '///' + e.detail.suggestion.words,
          });
        }, 3000 /* there is a 3 second throttle on onChange event, we want to top that */);
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
})().catch(console.error);
