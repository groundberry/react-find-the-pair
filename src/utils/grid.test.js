import {
  getGrid,
  getPressedGrid,
  getPairs,
} from './grid';

describe('grid', () => {
  describe('getGrid', () => {
    it('returns an array with 4 nested arrays', () => {
      const level = 1;
      expect(getGrid(level)).toHaveLength(4);
    });
  });

  describe('getPressedGrid', () => {
    it('returns an array with 2 nested arrays', () => {
      const level = 1;
      const result = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ];
      expect(getPressedGrid(level)).toEqual(result);
    });
  });

  describe('getPairs', () => {
    it('returns an array with 2 elements', () => {
      const arr = ['🐶', '🐱', '🐷', '🐸', '🦋', '🦀', '🐬', '🐻', '🍇', '🍒', '🍊', '🍋'];
      const numberOfPairs = 2;
      expect(getPairs(arr, numberOfPairs)).toHaveLength(4);
    });
  });
});
