
function changePossibilitiesBottomUp(amount, denominations) {

  // Initialize an array of zeros with indices up to amount
  const waysOfDoingNcents = new Array(amount + 1).fill(0);
  waysOfDoingNcents[0] = 1;

  console.log('ways array', waysOfDoingNcents);
  
  denominations.forEach(coin => {
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      console.log('current coin', coin);
      console.log('amount', amount);
      console.log('higher amount', higherAmount)
      const higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
      console.log('ways array again', waysOfDoingNcents);
    }
  });

  return waysOfDoingNcents[amount];
}

console.log(changePossibilitiesBottomUp(5, [1, 3, 5]));

/* 

4, [1, 2, 3]

(100, [1, 5, 10, 25, 50]);

- how do we remember which ones we've stored as solution? 
sort array before adding to memo object? 


O- number of ways to make coins add up to amount of money
I- an amount (integer), and array representing coins 
C- can't have negative amount, or no coins in array 
E- one coin in array? amount being smaller for example: 3, [1, 40, 2]
  if array empty, no way to make monay
  if input amount is 0, spit out 1

you could filter out coins that are greater than sum

let filteredCoins = denominations.filter( (number) => { if number < sum return number  }); 
2 [3, 4, 5] ---> 0 ways

take the first coin, add it to next coin, see if it sums up right, 




APPROACH: BOTTOM UP
- build smaller values of amount first and use those to computer 
answer for higher values until arriving at final amount

// function changePossibilities(amountLeft, coins) {

//   // edge case
  
//   if (!coins.length) {
//     return 0; 
//   }
  
//   // base csae
  
//   if (amountLeft === 0) {
//     return 1; 
//   }

  
//   let ways;

//   let waysOfDoingNCents = [];






//   return ways;
// }

*/



// Tests

// let desc = 'sample input';
// let actual = changePossibilities(4, [1, 2, 3]);
// let expected = 4;
// assertEqual(actual, expected, desc);

// desc = 'one way to make zero cents';
// actual = changePossibilities(0, [1, 2]);
// expected = 1;
// assertEqual(actual, expected, desc);

// desc = 'no ways if no coins';
// actual = changePossibilities(1, []);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'big coin value';
// actual = changePossibilities(5, [25, 50]);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'big target amount';
// actual = changePossibilities(50, [5, 10]);
// expected = 6;
// assertEqual(actual, expected, desc);

// desc = 'change for one dollar';
// actual = changePossibilities(100, [1, 5, 10, 25, 50]);
// expected = 292;
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`)
//   }
// }