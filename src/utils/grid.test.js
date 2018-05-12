import {
  getGrid,
  getPairs,
} from './grid';

describe('grid', () => {
  describe('getGrid', () => {
    it('returns an array with 2 nested arrays', () => {
      const level = 1;
      expect(getGrid(level)).toHaveLength(2);
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
