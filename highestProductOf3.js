function highestProductOf3(arrayOfInts) {
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let currentProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  if (arrayOfInts.length < 3) {
    throw error; 
  }

  for (let i = 2; i < arrayOfInts.length; i++) {
    let current = arrayOfInts[i];
    currentProductOf3 = Math.max(currentProductOf3, current * highestProductOf2, current * lowestProductOf2) ;
    highestProductOf2 = Math.max(highestProductOf2, current * highest, current * lowest)

    lowestProductOf2 = Math.min(lowestProductOf2, current * lowest, current * highest)
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }
  return currentProductOf3; 
}

/* 
O- integer representing highest product 
I- array of at least three integers (can have negative numbers)
C- at least 3 integers
E- can have negative numbers (throw error any time less than 3 integers in array), empty array, one or two numbers only 

APPROACH/BRAINSTORM

at least linear time O(n) 
keep track of maxProduct and return at the end: highest of 3 integers---> do we set it at first 3 int's product 
any three integers 
highestProductOf3- keeps track of highest max product of 3 integers (start at product of first 3?)
currentProductOf3- keeps track of current max product
keep track of highestProductOf2 and lowestProductOf2 using a for loop
keep track of lowest number and highest number 
if we take the current and multiply by highest and we get negative and that's greater than highestProductOf2
for loop thru the entire array of numbers starting position 2 
1. variables: 
   highest = Math.max(array[0], array[1])
   lowest = Math.max(array[0], array[1]) 
   highestProductOf2 = array[0] * array[1]
   lowestProductOf2 = array[0] * array[1]
   currentProductOf3- set at 0 to start? initialize only? 
   current = array[i]
2. look at current 
   highest = Math.max(highest, current)
   lowest = Math.min(lowest, current)
   highestProductOf2 = array[i - 1] times current? then, we update with Math.max()
   lowestProductOf2 = array[i - 1] times current? then, we update with Math.min()
this keeps track and updates highestProductOf3
assume we start at position 2
this gets highestProductOf3 as we go along 
if (current * highestProductOf2 > maxProduct) {
  currentProductOf3 = current * highestProductOf2;
  maxProduct = Math.max(currentProductOf3, maxProduct); 
}
update highestProductOf2 and lowestProductOf2
update highest and lowest numbers 

*/
// // Tests
// let desc = 'short array';
// let actual = highestProductOf3([1, 2, 3, 4]);
// let expected = 24;
// assertEqual(actual, expected, desc);
// desc = 'longer array';
// actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
// expected = 336;
// assertEqual(actual, expected, desc);
// desc = 'array has one negative';
// actual = highestProductOf3([-5, 4, 8, 2, 3]);
// expected = 96;
// assertEqual(actual, expected, desc);
// desc = 'array has two negatives';
// actual = highestProductOf3([-10, 1, 3, 2, -10]); 
// expected = 300;
// assertEqual(actual, expected, desc);
// desc = 'array is all negatives';
// actual = highestProductOf3([-5, -1, -3, -2]);
// expected = -6;
// assertEqual(actual, expected, desc);
// desc = 'error with empty array';
// const emptyArray = () => (highestProductOf3([]));
// assertThrowsError(emptyArray, desc);
// desc = 'error with one number';
// const oneNumber = () => (highestProductOf3([1]));
// assertThrowsError(oneNumber, desc);
// desc = 'error with two numbers';
// const twoNumber = () => (highestProductOf3([1, 1]));
// assertThrowsError(twoNumber, desc);
// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`)
//   }
// }
// function assertThrowsError(func, desc) {
//   try {
//     func();
//     console.log(`${desc} ... FAIL`);
//   } catch (e) {
//     console.log(`${desc} ... PASS`);
//   }
// }