export default function shuffle(array) {
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