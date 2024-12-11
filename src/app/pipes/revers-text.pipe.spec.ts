import { ReversTextPipe } from './revers-text.pipe';

describe('ReversTextPipe', () => {
  let pipe: ReversTextPipe;
  beforeEach(() => {
    pipe = new ReversTextPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should reverse the text passed in transform', () => {
    const result = pipe.transform('text');
    expect(pipe).toBeTruthy();
    expect(result).toEqual('Txet');
  });
  it('should make uppercase text capitalized', () => {
    const result = pipe.transform('HELLO');
    expect(pipe).toBeTruthy();
    expect(result).toEqual('Olleh');
  });
});
