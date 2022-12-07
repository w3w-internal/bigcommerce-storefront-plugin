import { getObserver } from '../observers';

describe('observers', () => {
  it('should call onMount observer once the expected node is added to the DOM', done => {
    const node = document.createElement('div');
    node.classList.add('test');
    const onMount = jest.fn();
    const observer = getObserver<HTMLDivElement>('div.test', {
      onMount,
    });
    observer.observe(document.body, { childList: true });
    document.body.appendChild(node);
    document.body.appendChild(document.createElement('div'));
    setTimeout(() => {
      expect(onMount).toHaveBeenCalledTimes(1);
      done();
    }, 10);
  });
});
