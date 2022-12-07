import { getInput } from '../get-input';

describe('getInput utility', () => {
  it('should return null if no input is found', () => {
    expect(getInput('name')).toBe(null);
  });
  it('should return the input if found', () => {
    const input = document.createElement('input');
    input.name = 'name';
    document.body.appendChild(input);
    expect(getInput('name')).toBe(input);
  });
});
