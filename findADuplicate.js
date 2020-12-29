function findRepeat(numbers) {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {
    // Divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor..midpoint
    // upper range is midpoint+1..ceiling
    const midpoint = Math.floor(floor + (ceiling - floor) / 2);
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint;
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;

    const distinctPossibleIntegersInLowerRange =
      lowerRangeCeiling - lowerRangeFloor + 1;
    //   console.log('lowerRange', lowerRangeFloor)
    //   console.log('midpoint', midpoint)
    //   console.log('distinctPossibleIntegersInLowerRange', distinctPossibleIntegersInLowerRange)
    //   console.log('**********************')
    // // [4, 1, 4, 8, 3, 2, 7, 6, 5]

    // Count number of items in lower range
    let itemsInLowerRange = 0;
    numbers.forEach((item) => {
      // Is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });
    console.log("items in lower range", itemsInLowerRange);

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      // There must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      // There must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  // Floor and ceiling have converged
  // We found a number that repeats!
  return floor;
}

// [4, 1, 4, 8, 3, 2, 7, 6, 5]

// Pretty good solution
// function findRepeat(numbers) {
//   if (numbers.length < 2) {
//     throw new Error('no duplicate!')
//   }

//   numbers = numbers.sort()

//   // Find a number that appears more than once
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === numbers[i + 1]) {
//       return numbers[i]
//     }
//   }

//   return 0;
// }

// O - Return one integer that is repeated more than once
// I - array of positive integers
// C - Minimum of two integers; minimum of one repeat; must optimize for space
// E - no repeat, less than 2 nums

// Pretty good solution
// sort the array
// compare the current number with next index
// if equal return value
// else move on to next index

// Mathmatical optimal solution
// select middle point
// look in the left and right side to check to see which has greater length
// search through longer subarray for duplicate integer

// Tests

// let desc = 'just the repeated number';
// let actual = findRepeat([1, 1]);
// let expected = 1;
// assertEqual(actual, expected, desc);

// desc = 'short array';
// actual = findRepeat([1, 2, 3, 2]);
// expected = 2;
// assertEqual(actual, expected, desc);

// desc = 'medium array';
// actual = findRepeat([1, 2, 5, 5, 5, 5]);
// expected = 5;
// assertEqual(actual, expected, desc);

desc = "long array";
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

// floor 1
// cieling 8

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
