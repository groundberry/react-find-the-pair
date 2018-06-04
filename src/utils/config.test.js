import {
  getWidth,
  getHeight,
} from './config';

describe('config', () => {
  let level;

  beforeEach(() => {
    level = 1;
  });

  describe('geWidth', () => {
    it('returns the width of the grid', () => {
      expect(getWidth(level)).toBe(4);
    });
  });

  describe('getHeight', () => {
    it('returns the height of the grid', () => {
      expect(getHeight(level)).toBe(4);
    });
  });
});
