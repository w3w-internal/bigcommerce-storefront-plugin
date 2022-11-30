export function hideElement(element: HTMLElement | null) {
  element?.style.setProperty('display', 'none');
}

export function hideDynamicField(element: HTMLElement | null) {
  const wrapper = element?.closest('.dynamic-form-field') as HTMLElement;
  wrapper?.style.setProperty('display', 'none');
}
