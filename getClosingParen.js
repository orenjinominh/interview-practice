
function getClosingParen(sentence, openingParenIndex) {

  // Find the position of the matching closing parenthesis
  
  let openParens = 0;
  
  for (let position = openingParenIndex + 1; position < sentence.length; position++) {
    const currentChar = sentence[position];
    
    if (currentChar === '(') {
      // add to open parens stack count if we have opener
      openParens += 1;
    } else if (currentChar === ')') {
      // if we have nothing in stack, that means it's the closer
      if (openParens === 0) {
        return position;
      }
      // otherwise, decrease count by one since we found a match 
      openParens -= 1; 
    }
  }
  
  throw new Error('We could not find closing parens for ya');
}

/*

O- integer representing position of closing parens
I- string and an integer representing position of opening parens
C- max string size? match the parens of the given opener 
(find the parens that closes it)
E- no parens at all in string? unmatched parens? 
given index input doesn't match what's in string??

APPROACH

iterate thru string, whenever we find parens, we get index
when we get new open parens- PUT ON 
keep track of index of closer every time there is one and
update index of closer if we find new one

when we get to end of string and no match, error out 


----- Minh's JS notes
instead of using a real stack, we can think "stack like"
start at position AFTER first position given of opening parens
keep count of parens in variable
increase count if we find opener
if we find closer, it's either the closing one (no open Parens in stack)
and then we return the position of that closer
OR, there's still opening parens to close out in our "stack"
and we decrease the count (since we found a match)
otherwise, if we get to end of string and there's still open parens
throw error since there wasn't a closing parens in entire string
*/


// Tests

// let desc = 'all openers then closers';
// let actual = getClosingParen('((((()))))', 2);
// let expected = 7;
// assertEqual(actual, expected, desc);

// desc = 'mixed openers and closers';
// actual = getClosingParen('()()((()()))', 5);
// expected = 10;
// assertEqual(actual, expected, desc);

// desc = 'no matching closer';
// const noCloser = () => (getClosingParen('()(()', 2));
// assertThrowsError(noCloser, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
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