function findRotationPoint(words) {
  let leftIndex = 0;
  let rightIndex = words.length - 1; 

  // edge case of short array
  if (words.length === 2) {
    return 1; 
  }

  while (leftIndex < rightIndex) {

    let middleIndex = Math.floor(leftIndex + ((rightIndex - leftIndex) / 2)); 
    let middleValue = words[middleIndex];
    let firstItem = words[0];

    // checking to see if we look at left or right of middle value
    if ( middleValue.localeCompare(firstItem) < 0) {
      rightIndex = middleIndex;
    } else {
      leftIndex = middleIndex;
    }

    return rightIndex;
  }
}


/*
O- integer representing index of 'rotation point' in rotated array
I- array
C- Doesn't have to be symmetrical; first half of array is going to be 2nd half of dictionary, assume everything is lowercase 
E- no words in array, if it's 2 words- index is 1

APPROACH:
- find a way to compare strings alphabetically: localeCompare()? 

- binary searcH:
  - start in middle
  - use binary search to see if word is "greater" than last word (negative value)
  - if not search in other half
  - narrow down search increasingly 
  - if word is greater,  grab index of word in array
*/

// Tests

// let desc = 'small array';
// let actual = findRotationPoint(['cape', 'cake']);
// let expected = 1;
// assertEquals(actual, expected, desc);

// desc = 'medium array';
// actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
// expected = 4;
// assertEquals(actual, expected, desc);

// desc = 'large array';
// actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
//   'undulate', 'xenoepist', 'asymptote',
//   'babka', 'banoffee', 'engender',
//   'karpatka', 'othellolagkage']);
// expected = 5;
// assertEquals(actual, expected, desc);

// function assertEquals(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }