function sortScores(unorderedScores, highestPossibleScore) {

  let sortedScores = [];

  // create giant array of counts representing 0 to 100
  let countArray = Array.from(Array(101), () => 0);

  // add scores to counts hash
  for (let i = 0; i < unorderedScores.length; i++) {
    let score = unorderedScores[i];
    // console.log(score);
    countArray[score]++;
  }

  // go backwards thru countArray and make sorted array
  for (let i = highestPossibleScore; i >= 0; i--) {
    // keep track of how many times score appears 
    let count = countArray[i];
    // add score multiple times to sorted scores array if needed
    while (count--) {
      sortedScores.push(i);
    }
  }

  // console.log('countArray here', countArray);
  return sortedScores;

}

/*
O- sorted array of scores from highest to lowest
I- unsorted array, highest possible score as 100 (constant)
C- no negative scores (from 0 to 100), sort alg has to be faster than binary sort
better than logarithmic time and more O(n) aka linear 
E- no scores, one score, repeated scores

APPROACH:

- make an array representation of times a score appears
- walk thru array and add score to new array from 0 to number (in this case 100)
aka 101 positions based on how many times it appears (count of score)
- walk backwards since we're sorting h -> l 
- if (score > 0), push score to new sortedArray for as many times as score appears
- return sortedArray
*/

// Tests

// let desc = 'no scores';
// let actual = sortScores([], 100);
// let expected = [];
// assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

// desc = 'one score';
// actual = sortScores([55], 100);
// expected = [55];
// assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

// desc = 'two scores';
// actual = sortScores([30, 60], 100);
// expected = [60, 30];
// assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

// desc = 'many scores';
// actual = sortScores([37, 89, 41, 65, 91, 53], 100);
// expected = [91, 89, 65, 53, 41, 37];
// assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

// desc = 'repeated scores';
// actual = sortScores([20, 10, 30, 30, 10, 20], 100);
// expected = [30, 30, 20, 20, 10, 10];
// assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }