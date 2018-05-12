import {
  getWidth,
  getHeight,
} from './config';
import shuffle from './array';

const emojis = ['🐶', '🐱', '🐷', '🐮', '🐣', '🐭', '🐹', '🐰', '🐸', '🦋', '🦀', '🐡', '🐬', '🐙', '🐻', '🦊', '🐯', '🦁', '🐨', '🐒'];

export function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export function getPairs(arr, numberOfPairs) {
  const elements = shuffle(arr).slice(0, numberOfPairs);
  const pairs = elements.concat(elements);
  return shuffle(pairs);
}

export function getGrid(level) {
  const height = getHeight(level);
  const width = getWidth(level);
  const numberOfPairs = (height * width) / 2;
  const pairs = getPairs(emojis, numberOfPairs);
  const grid = [];

  for (let i = 0; i < pairs.length; i += width) {
    grid.push(pairs.slice(i, i + width));
  }

  return grid;
}
