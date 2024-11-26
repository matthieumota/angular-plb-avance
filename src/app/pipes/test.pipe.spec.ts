import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new TestPipe();
    expect(pipe.transform('Fiorella')).toBe('FIORELLA');
    expect(pipe.transform('Fiorella', 'A', 'Z')).toBe('AFIORELLAZ');
  });
});
