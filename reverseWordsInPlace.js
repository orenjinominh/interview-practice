function reverseWords(message) {
  message = message.join("").split(" ")  
  let leftPointer = 0
  let rightPointer = message.length - 1
  // console.log(words)
  // check the length of the words array
  // rearrange the words based on the indexes 
  while (leftPointer < rightPointer) {
    let temp = message[leftPointer]
    // console.log(temp)
    message[leftPointer] = message[rightPointer]
    message[rightPointer] = temp
    // console.log(words[leftPointer])
    leftPointer++
    rightPointer--
  }
  // console.log('words', words)
  console.log('message', message)
  message.join(" ")
  console.log('message after', message)
  return message
  // Decode the message by reversing the words
  // console.log('beginning', message)
  // let startSplice = 0
  // let charCount = 5
  // let insertChars = ["T", "E", "S", "T"]
  // let removed = message.splice(startSplice, charCount, insertChars)
  // console.log('end', message)
  // startSplice++
}

// Tests
// let desc = 'one word';
// let input = 'vault'.split('');
// reverseWords(input);
// let actual = input.join('');
// let expected = 'vault';
// assertEqual(actual, expected, desc);
// desc = 'two words';
// input = 'thief cake'.split('');
// reverseWords(input);
// actual = input.join('');
// expected = 'cake thief';
// assertEqual(actual, expected, desc);
// desc = 'three words';
// input = 'one another get'.split('');
// reverseWords(input);
// actual = input.join('');
// expected = 'get another one';
// assertEqual(actual, expected, desc);
// desc = 'multiple words same length';
// input = 'rat the ate cat the'.split('');
// reverseWords(input);
// actual = input.join('');
// expected = 'the cat ate the rat';
// assertEqual(actual, expected, desc);
// desc = 'multiple words different lengths';
// input = 'yummy is cake bundt chocolate'.split('');
// reverseWords(input);
// actual = input.join('');
// expected = 'chocolate bundt cake is yummy';
// assertEqual(actual, expected, desc);
// desc = 'empty string';
// input = ''.split('');
// reverseWords(input);
// actual = input.join('');
// expected = '';
// assertEqual(actual, expected, desc);
// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }