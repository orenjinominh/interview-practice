function hasPalindromePermutation(theString) {
  // declare object to hold characters and count of each in string
  let charCount = {};
  
  // loop thru string length to add to object
  for (let i = 0; i < theString.length; i++) {
    let currentChar = theString[i];
    
    if (charCount[theString[i]]) {
      charCount[currentChar]++
    } else {
      charCount[currentChar] = 1
    }
  }
  
  // checking if any permutation is palindrome  
  let oddCount = 0; 
  
  for (let char in charCount) {
    if (charCount[char] % 2 !== 0) {
      oddCount++;
    }
  }
  
  if (oddCount > 1) {
    return false; 
  }

  return true;
}



/* 
Input string
Output boolean
Constraints: can't be an unordered set?
Edge cases: empty string, one character, same character odd number of times


ATTACK:
1. create an object representing characters string
2. loop thru object
3. create variable to hold "middle" character which can be odd (any variation of odd no.)
4. if multiple characters are odd ( > 1), then not palindrome


for each character in the string
check if word is odd or even
{
  c: 2, i: 2: v; 1
}

if one character in string- that's a palindrome
if even no. for all characters- that's a palindrome  
if odd no. of characs- then one character key on the object has to be odd (ie civvvic) 
civil = false c = 1, i = 2, v = 1, l = 1 civic = 1 odd character, civvvic = 3 odd = true
*/


// Tests

// let desc = 'permutation with odd number of chars';
// assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

// desc = 'permutation with even number of chars';
// assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

// desc = 'no permutation with odd number of chars';
// assertEqual(hasPalindromePermutation('aabcd'), false, desc);

// desc = 'no permutation with even number of chars';
// assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

// desc = 'empty string';
// assertEqual(hasPalindromePermutation(''), true, desc);

// desc = 'one character string ';
// assertEqual(hasPalindromePermutation('a'), true, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }