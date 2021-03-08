function fib(n) {

  // edge cases
  
  if (n < 0) throw new Error('negggggative!')
  
  if (n === 0 || n === 1) {
    return n;
  }

  
  let previous = 0; 
  let next = 1; 
  let current;
  
  for (let i = 1; i < n; i++) {
    current = previous + next; 
    previous = next; 
    next = current; 
  }
  
  return current;
}


/* 

REMINDER: Fibonacci sequence where the upcoming number
is the sum of its previous two numbers
      
0, 1, 1, 2, 3, 5, 8, 13, etc...
      ^
      starts here

O- the nth Fibonacci number 0-indexed
I- integer n (represents an index on fib sequence)
C- has to be an integer input, can't be negative (it can be 0 and 1)
E- negative input for n


recursive- BAD- O(n ^ 2)
return fib(n-2) + fib(n-1)

memoization- BETTER- store calculated fibs in object
see if already in object

iterative- BEST-
1. loop thru once from i < n 
2. calculate results as you move along 
3. have multiple variables to keep track of the numbers
4. reassign the variables after calculation
*/



// Tests

// let desc = 'zeroth fibonacci';
// let actual = fib(0);
// let expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'first fibonacci';
// actual = fib(1);
// expected = 1;
// assertEqual(actual, expected, desc);

// desc = 'second fibonacci';
// actual = fib(2);
// expected = 1;
// assertEqual(actual, expected, desc);

// desc = 'third fibonacci';
// actual = fib(3);
// expected = 2;
// assertEqual(actual, expected, desc);

// desc = 'fifth fibonacci';
// actual = fib(5);
// expected = 5;
// assertEqual(actual, expected, desc);

// desc = 'tenth fibonacci';
// actual = fib(10);
// expected = 55;
// assertEqual(actual, expected, desc);

// desc = 'negative fibonacci';
// const negativeFib = () => (fib(-1));
// assertThrowsError(negativeFib, desc);

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