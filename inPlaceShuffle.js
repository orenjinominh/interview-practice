function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  if (array.length <= 1) {
    return array;
  }

  for (let currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {
    let randomIndex = getRandom(currentIndex, array.length - 1);
    let valueAtCurrentIndex;

    if (randomIndex !== currentIndex) {
      valueAtCurrentIndex = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = valueAtCurrentIndex;
    }
  }

  return array;
}

const sample = [1, 2, 3, 4, 5];
console.log("Initial array: ", sample);
shuffle(sample);
console.log("Shuffled array: ", sample);

// O - shuffled array of integers
// I - array of integers
// C - equal chance of numbers ending in each spot
// E - zero or one integer
