import { House } from './house';

describe('House', () => {
  it('should create an instance', () => {
    const house = new House();
    expect(house).toBeInstanceOf(House);
    expect(house.wifi).toBeFalse();
  });
});
