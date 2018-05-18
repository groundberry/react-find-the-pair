export function shuffle(array) {
  let counter = array.length;
  const newArray = [].concat(array);

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter -= 1;

    const temp = newArray[counter];
    newArray[counter] = newArray[index];
    newArray[index] = temp;
  }

  return newArray;
}

export const cloneGrid = grid => grid.map(row => row.slice());

export const cloneArray = array => array.map(element => element);
