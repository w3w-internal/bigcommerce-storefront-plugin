import '../styles/input.css';

interface Options {
  label: string;
  showTooltip?: boolean;
}

export const createInputFragment = (input: HTMLElement, options: Options) => {
  const fragment = new DocumentFragment();
  const container = document.createElement('div');
  container.classList.add('ec-form__cell');

  const labelContainer = document.createElement('label');
  labelContainer.classList.add('ec-form__title', 'ec-header-h6');
  labelContainer.appendChild(document.createTextNode(options.label));

  if (options.showTooltip) {
    const tooltip = document.createElement('w3w-tooltip');
    labelContainer.classList.add('label-with-tooltip');
    labelContainer.appendChild(tooltip);
  }

  container.appendChild(labelContainer);

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('form-control', 'form-control--flexible');
  inputContainer.appendChild(input);
  container.appendChild(inputContainer);
  fragment.appendChild(container);

  return fragment;
};
