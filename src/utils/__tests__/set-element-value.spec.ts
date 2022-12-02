import { setElementValue } from '../set-element-value';

describe('setElementValue', () => {
  it('should dispatch the native input event', () => {
    const element = document.createElement('input');
    const spy = jest.spyOn(element, 'dispatchEvent');
    setElementValue(element, 'value');
    expect(spy).toHaveBeenCalled();
  });

  it('should set the value of the element', () => {
    const element = document.createElement('input');
    setElementValue(element, 'value');
    expect(element.value).toBe('value');
  });
});
