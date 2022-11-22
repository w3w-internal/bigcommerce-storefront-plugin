import { doSomeStuff } from '../src';

jest.spyOn(console, 'log');

describe('Example test', () => {
  const withThis = 'foo';
  const andThat = 'bar';

  it('should call doSomeStuff and verify stdout', () => {
    const andThose = ['hello', 'world'];
    doSomeStuff(withThis, andThat, andThose);
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
