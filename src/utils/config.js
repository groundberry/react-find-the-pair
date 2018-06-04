const configMap = {
  1: {
    width: 4,
    height: 4,
  },
  2: {
    width: 6,
    height: 6,
  },
  3: {
    width: 8,
    height: 8,
  },
};

export function getConfigForLevel(level) {
  return configMap[level];
}

export function getWidth(level) {
  return getConfigForLevel(level).width;
}

export function getHeight(level) {
  return getConfigForLevel(level).height;
}
