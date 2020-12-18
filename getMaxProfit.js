function getMaxProfit(stockPrices) {

  let smallestPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  // edge cases
  if (stockPrices.length < 3) {
    throw error
  }
  // start at index 1, so that we don't buy and sell 1st stock at the same time
  for (let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];

    // the smallestPrice variable will start at index 0 and get updated AFTER we compare profit 
    // so if it stays the same, it stays at index 0
    // if it drops, it gets updated AFTER we figure out profit from selling earlier stock price 
    // if we update smallest Price BEFORE maxProfit, we might always get maxProfit at 0 ie: 1, 1, 1, 1
    // in case of dropping price, the profit can only be calculated on prices we bought BEFORE we sell ie 9 7 4 1
    // if we update smallestPrice BEFORE, maxProfit will always be 0 as well (since it gets updated to currentPrice)
    let currentProfit = currentPrice - smallestPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
    smallestPrice = Math.min(smallestPrice, currentPrice);

  }
  return maxProfit;
}





// Tests

// let desc = 'price goes up then down';
// let actual = getMaxProfit([1, 5, 3, 2]);
// let expected = 4;
// assertEqual(actual, expected, desc);

// desc = 'price goes down then up';
// actual = getMaxProfit([7, 2, 8, 9]);
// expected = 7;
// assertEqual(actual, expected, desc);

// desc = 'price goes up all day';
// actual = getMaxProfit([1, 6, 7, 9]);
// expected = 8;
// assertEqual(actual, expected, desc);

// desc = 'price goes down all day';
// actual = getMaxProfit([9, 7, 4, 1]);
// expected = -2;
// assertEqual(actual, expected, desc);

// desc = 'price stays the same all day';
// actual = getMaxProfit([1, 1, 1, 1]);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'error with empty prices';
// const emptyArray = () => (getMaxProfit([]));
// assertThrowsError(emptyArray, desc);

// desc = 'error with one price';
// const onePrice = () => (getMaxProfit([1]));
// assertThrowsError(onePrice, desc);

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