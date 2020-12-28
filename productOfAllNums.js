function getProductsOfAllIntsExceptAtIndex(numbers) {
  let productSoFar = 1;
  let productsOfOtherInts = [];

  if (numbers.length < 3) {
    throw new Error("wrong");
  }

  for (let i = 0; i < numbers.length; i++) {
    productsOfOtherInts[i] = productSoFar;
    productSoFar *= numbers[i];
  }

  productSoFar = 1;

  for (let j = numbers.length - 1; j >= 0; j--) {
    productsOfOtherInts[j] *= productSoFar;
    productSoFar *= numbers[j];
  }

  return productsOfOtherInts;
}

// [8, 2, 4, 3, 1, 5]

// O - array of integers that represent the product of every integer excl current index
// I - array of integers
// C - whole numbers, array needs at least 3 values
// E - multiple zeros in the array, negative numbers

// loop through the array
// keep track of the current index
// create a variable that holds product of everything else
// push it into the product array

// Tests

let desc = "short array";
let actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
let expected = [6, 3, 2];
assertArrayEquals(actual, expected, desc);

(desc = "longer array"),
  (actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]));
expected = [120, 480, 240, 320, 960, 192];
assertArrayEquals(actual, expected, desc);

(desc = "array has one zero"),
  (actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]));
expected = [0, 0, 36, 0];
assertArrayEquals(actual, expected, desc);

desc = "array has two zeros";
actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
expected = [0, 0, 0, 0, 0];
assertArrayEquals(actual, expected, desc);

desc = "one negative number";
actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
expected = [32, -12, -24];
assertArrayEquals(actual, expected, desc);

desc = "all negative numbers";
actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
expected = [-8, -56, -14, -28];
assertArrayEquals(actual, expected, desc);

desc = "error with empty array";
const emptyArray = () => getProductsOfAllIntsExceptAtIndex([]);
assertThrowsError(emptyArray, desc);

desc = "error with one number";
const oneNumber = () => getProductsOfAllIntsExceptAtIndex([1]);
assertThrowsError(oneNumber, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
