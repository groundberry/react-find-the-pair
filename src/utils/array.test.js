import {
  shuffle,
  // selectLowestNumber,
  hasDuplicated,
  cloneGrid,
  cloneArray,
} from './array';

describe('array', () => {
  describe('shuffle', () => {
    it('returns an array with elements in different position than in the original array', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(shuffle(array)).not.toEqual(array);
    });
  });

  describe('hasDuplicated(arr)', () => {
    it('returns true if all the elements are duplicated in the array', () => {
      const emojis = ['🐶', '🐶', '🐮', '🐮', '🐣', '🐣'];
      expect(hasDuplicated(emojis)).toBe(true);
    });

    it('returns false if not all the elements are duplicated in the array', () => {
      const emojis = ['🐶', '🐶', '🐮', '🐮', '🐣'];
      expect(hasDuplicated(emojis)).toBe(false);
    });
  });

  describe('cloneGrid', () => {
    it('returns a new grid that is equal to the given grid', () => {
      const grid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
      const result = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

      expect(cloneGrid(grid)).toEqual(result);
    });
  });

  describe('cloneArray', () => {
    it('returns an array that is equal to the given array', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      expect(cloneArray(array)).toEqual(result);
    });
  });
});
