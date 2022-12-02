import { Chance } from 'chance';

import { loadJavaScript } from '../load-js';

const chance = new Chance();

describe('Load JS utility', () => {
  it('load the required javascript file ', () => {
    const test = chance.url();
    loadJavaScript(test);
    expect(document.querySelector(`script[src="${test}"]`)).not.toBe(null);
  });
  it("should set the correct attribute on the script's tag", () => {
    const test = chance.url();
    const attribute = chance.string({ alpha: true });
    const value = chance.string({ alpha: true });
    loadJavaScript(test, { attributes: { [attribute]: value } });
    expect(
      document.querySelector(`script[src="${test}"]`)?.getAttribute(attribute)
    ).toBe(value);
  });

  it("should set the script's type to text/javascript", () => {
    const test = chance.url();
    loadJavaScript(test);
    expect(
      document.querySelector(`script[src="${test}"]`)?.getAttribute('type')
    ).toBe('text/javascript');
  });

  it("should set the script's onload callback", () => {
    const test = chance.url();
    const callback = jest.fn();
    loadJavaScript(test, { onload: callback });
    const script = document.querySelector(
      `script[src="${test}"]`
    ) as HTMLScriptElement;
    expect(script.onload).toEqual(callback);
  });

  it("should set the script's onError callback", () => {
    const test = chance.url();
    const callback = jest.fn();
    loadJavaScript(test, { onerror: callback });
    const script = document.querySelector(
      `script[src="${test}"]`
    ) as HTMLScriptElement;
    expect(script.onerror).toEqual(callback);
  });
});
