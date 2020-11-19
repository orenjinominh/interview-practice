function reverse(arrayOfChars) {
  let firstPointer = 0;
  let lastPointer = arrayOfChars.length - 1;

  while (firstPointer < lastPointer) {
    console.log(firstPointer, lastPointer);

    let currentFirstPointer = arrayOfChars[firstPointer];
    let currentLastPointer = arrayOfChars[lastPointer];

    arrayOfChars[firstPointer] = currentLastPointer;
    arrayOfChars[lastPointer] = currentFirstPointer;

    firstPointer++;
    lastPointer--;
  }
}

// Tests

// let desc = 'empty string';
// let input = ''.split('');
// reverse(input);
// let actual = input.join('');
// let expected = '';
// assertEqual(actual, expected, desc);

// desc = 'single character string';
// input = 'A'.split('');
// reverse(input);
// actual = input.join('');
// expected = 'A';
// assertEqual(actual, expected, desc);

// desc = 'longer string';
// input = 'ABCDE'.split('');
// reverse(input);
// actual = input.join('');
// expected = 'EDCBA';
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }
