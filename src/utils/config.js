const configMap = {
  1: {
    width: 2,
    height: 2,
  },
  2: {
    width: 4,
    height: 4,
  },
  3: {
    width: 6,
    height: 6,
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
