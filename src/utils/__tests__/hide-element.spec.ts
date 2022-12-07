import { hideDynamicField, hideElement } from '../hide-element';

describe('hide element utils', () => {
  it("should set the element's display to none", () => {
    const element = document.createElement('div');
    hideElement(element);
    expect(element.style.display).toBe('none');
  });
  it("should set the element's parent's display property to none", () => {
    const element = document.createElement('div');
    const wrapper = document.createElement('div');
    wrapper.classList.add('dynamic-form-field');
    wrapper.appendChild(element);
    hideDynamicField(element);
    expect(wrapper.style.display).toBe('none');
  });
});
