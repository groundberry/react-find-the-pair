import { shuffle } from './array';

describe('array', () => {
  describe('shuffle', () => {
    it('returns an array with elements in different position than in the original array', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(shuffle(array)).not.toEqual(array);
    });
  });
});
