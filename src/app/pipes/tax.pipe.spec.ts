import { TaxPipe } from './tax.pipe';

describe('TaxPipe', () => {
  it('create an instance', () => {
    const pipe = new TaxPipe();
    expect(pipe.transform(10)).toBe(12);
    expect(pipe.transform(10, 10)).toBe(11);
  });
});
