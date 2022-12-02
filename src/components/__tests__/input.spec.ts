import { createInputFragment } from '../input';

describe('Components - Input', () => {
  it('should return a Fragment element containing the input form Field', () => {
    const w3wComponent = document.createElement('div');
    const options = {
      label: 'What3Words',
      isOptional: true,
      showTooltip: true,
    };
    const inputFragment = createInputFragment(w3wComponent, options);
    expect(inputFragment).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="dynamic-form-field w3w-field"
        >
          <div
            class="form-field"
          >
            <label
              class="form-label optimizedCheckout-form-label label-with-tooltip"
              for="w3w-autosuggest-field"
            >
              <small
                class="optimizedCheckout-contentSecondary"
              />
              <w3w-tooltip />
            </label>
            <div>
              <input
                class="form-input optimizedCheckout-form-input"
                id="w3w-autosuggest-field"
              />
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
