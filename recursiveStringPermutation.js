function getPermutations(string) {
  //base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  let lastChar = string[string.length - 1];
  let subString = string.slice(0, -1);

  let permutationsOfSubstring = getPermutations(subString);

  let allPermutations = new Set();
  permutationsOfSubstring.forEach((permutation) => {
    for (let i = 0; i <= subString.length; i++) {
      const temp = permutation.slice(0, i) + lastChar + permutation.slice(i);
      allPermutations.add(temp);
    }
  });

  return allPermutations;
}

//'abc';
// new Set(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);

// O - New set of all permutations of an input string
// I - String of unique characters
// C - All one word and no space
// E - 0 or one char, not a string

// RECURSIVE SOLUTION
// create temp lastChar = string[string.length - 1]
//

// OLD IMPLEMENTATION
// const finalArray = []
// if (string == undefined || string.length <= 1) {
//   return new Set([string])
// }

// for(let i = 0; i < string.length; i++) {
//   let temp = string.slice(i) + string.slice(i + 1, string.length)

//   console.log('string.slice(i)', string.slice(i))
//   console.log('string.slice(i + 1, string.length)', string.slice(i + 1, string.length))
//   console.log('temp', temp)
//   finalArray.push(temp + string[i])
// }

// Tests

let desc = "empty string";
let input = "";
let actual = getPermutations(input);
let expected = new Set([""]);
assert(isSetsEqual(actual, expected), desc);

desc = "one character string";
input = "a";
actual = getPermutations(input);
expected = new Set(["a"]);
assert(isSetsEqual(actual, expected), desc);

desc = "two character string";
input = "ab";
actual = getPermutations(input);
expected = new Set(["ab", "ba"]);
assert(isSetsEqual(actual, expected), desc);

desc = "three character string";
input = "abc";
actual = getPermutations(input);
expected = new Set(["abc", "acb", "bac", "bca", "cab", "cba"]);
assert(isSetsEqual(actual, expected), desc);

function isSetsEqual(as, bs) {
  if (as.size !== bs.size) {
    return false;
  }
  for (let a of as) {
    if (!bs.has(a)) return false;
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}
