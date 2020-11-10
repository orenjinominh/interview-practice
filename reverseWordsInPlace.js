function reverseCharacters(message, leftPointer = 0, rightPointer = message.length - 1) {

  while (leftPointer < rightPointer) {
    let temp = message[leftPointer];
    message[leftPointer] = message[rightPointer];
    message[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
  }
}

function reverseWords(message) {  
  // reverses the words to be in order (even if the characters are misordered)
  reverseCharacters(message);

  // loop through the misordered words and reorg the individual characters
  let starterIndex = 0; 
  
  for (var i = 0; i <= message.length; i++) {
    // console.log('message legnth', message.length)
    if (i === message.length || message[i] === ' ') {
      reverseCharacters(message, starterIndex, i - 1); 
      starterIndex = i + 1; 
    }
  }
  
  // return the string with words ordered 
  return message;
  
}


// Pseudocode Brainstorm
// reverse words to be in order

// next, we need to find out where each word starts and ends
// how do re-order individual characters that belong to a 'word'

// go thru characters with loop?
// find the space
// using slice or splice ?
// set lP at 0
// set rP at index of the space character - 1? 
// swap positions? 
// how do we get to next word? 


// keep track of starterIndex before the loop and update it 
// use a for loop to go thru the message.length
// check if i === message.length || message[i] === ' ' 
// pass i - 1 into the reverseChars function to get the rP
// then we run helper function to reverse the characters in the word
  // helper function input: lP, rP, word
// change the start index to i + 1 where i is the space


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