function getProductsOfAllIntsExceptAtIndex(intArray) {
  let productSoFar = 1;
  let intArrayProduct = [];
  
  // edge case
  if (intArray.length < 3) {
    throw error;
  }
  
  // first walk thru input array, and grab the product BEFORE the index 
  // we set productSoFar at 1 
  // example array: [8, 2, 4, 3, 1, 5]
  // walking:       [1, 8 * 1, 2 * 8 * 1, etc]
  // indexes:       pSF 0th    1st and so on
  for (let i = 0; i < intArray.length; i++) {
    // set finalArray's i to be the product so far to get the "befores" product of every index 
    intArrayProduct[i] = productSoFar;
    // multiple by the current number AFTER we set so that next time, productSoFar can be updated into walking array
    productSoFar *= intArray[i]; 
  }
  
  // then we walk backwards thru input array to save space and time
  // we reset productSoFar to be 1 

  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    // we multiply whatever product we get with whatever is at the index of the "before" walking array
    intArrayProduct[j] *= productSoFar; 
    // then we calculate productSoFar ("after the index") backwards with current number
    productSoFar *= intArray[j]; 
  }
  
  // return final array which should have before * afters in the right indexes and excludes that current index's number
  return intArrayProduct;
}
/*
[8, 2, 4, 3, 1, 5]

O - array of integers that represent the product of every integer excl current index
I - array of integers
C - whole numbers, array needs at least 3 values
E - multiple zeros in the array, negative numbers

APPROACH/BRAINSTORM:
loop through the array 
keep track of the current index
create a variable that holds product so far
walk forward in the input array and hold onto the productBeforeIndex
walk backward in the input array and hold onto productAfterIndex
multiply together by walking both arrays 

OR to save space/time, use final array to hold everything and one variable productSoFar:
walk forward and create array
walk backwards and multiple whatever is currently on array with product calculated at that index and update final array
return final array 

*/

// Tests

// let desc = 'short array';
// let actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
// let expected = [6, 3, 2];
// assertArrayEquals(actual, expected, desc);

// desc = 'longer array',
// actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
// expected = [120, 480, 240, 320, 960, 192];
// assertArrayEquals(actual, expected, desc);

// desc = 'array has one zero',
// actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
// expected = [0, 0, 36, 0];
// assertArrayEquals(actual, expected, desc);

// desc = 'array has two zeros';
// actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
// expected = [0, 0, 0, 0, 0];
// assertArrayEquals(actual, expected, desc);

// desc = 'one negative number';
// actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
// expected = [32, -12, -24];
// assertArrayEquals(actual, expected, desc);

// desc = 'all negative numbers';
// actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
// expected = [-8, -56, -14, -28];
// assertArrayEquals(actual, expected, desc);

// desc = 'error with empty array';
// const emptyArray = () => (getProductsOfAllIntsExceptAtIndex([]));
// assertThrowsError(emptyArray, desc);

// desc = 'error with one number';
// const oneNumber = () => (getProductsOfAllIntsExceptAtIndex([1]));
// assertThrowsError(oneNumber, desc);

// function assertArrayEquals(a, b, desc) {
//   const arrayA = JSON.stringify(a);
//   const arrayB = JSON.stringify(b);
//   if (arrayA !== arrayB) {
//     console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
//   } else {
//     console.log(`${desc} ... PASS`);
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