interface Options {
  label: string;
  showTooltip?: boolean;
  isOptional?: boolean;
}

/**
 * @remarks output is the following HTML structure
```HTML
<div class="dynamic-form-field">
  <div class="form-field">
    <label class="form-label optimizedCheckout-form-label">
      <small class="optimizedCheckout-contentSecondary">
      </label>
    <input class="form-input optimizedCheckout-form-input">
  </div>
</div>
```
*/

export function createInputFragment(
  w3wComponent: HTMLElement,
  options: Options
) {
  const inputFragment = document.createDocumentFragment();

  const field = document.createElement('div');
  field.classList.add('dynamic-form-field');
  field.classList.add('w3w-field');

  const formField = document.createElement('div');
  formField.classList.add('form-field');

  const input = document.createElement('input');
  input.id = 'w3w-autosuggest-field';
  input.classList.add('form-input');
  input.classList.add('optimizedCheckout-form-input');

  const label = document.createElement('label');
  label.classList.add('form-label');
  label.classList.add('optimizedCheckout-form-label');
  label.innerText = options.label;
  label.setAttribute('for', input.id);

  if (options.isOptional) {
    const labelSmall = document.createElement('small');
    labelSmall.classList.add('optimizedCheckout-contentSecondary');
    labelSmall.innerText = ' (Optional)';
    label.appendChild(labelSmall);
  }

  if (options.showTooltip) {
    const tooltip = document.createElement('w3w-tooltip');
    label.classList.add('label-with-tooltip');
    label.appendChild(tooltip);
  }

  w3wComponent.appendChild(input);
  formField.appendChild(label);
  formField.appendChild(w3wComponent);
  field.appendChild(formField);
  inputFragment.appendChild(field);

  return inputFragment;
}
