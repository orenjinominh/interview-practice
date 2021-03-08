function maxDuffelBagValue(cakeTypes, weightCapacity) {

  let maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);
  
  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    // this resets to 0 with every cake 
    let currentMaxValue = 0; 
    
    for (let j = 0; j < cakeTypes.length; j++) {
      
      let cake = cakeTypes[j];
      
      // checks to see if we have a zero weighted cake, then we can take infinite of those
      if (cake.weight === 0 && cake.value !== 0) {
        return Number.POSITIVE_INFINITY;
      }
     
      // we only try to take the cake if it weights less than current capacity 
      if (cake.weight <= currentCapacity) {
        // find max value using said cake
        // maxValuesAtCapacities[currentCapacity - cake.weight]
        
        let maxValueWithThisCake = cake.value + maxValuesAtCapacities[currentCapacity - cake.weight]; 
        // update the max
        // we compare Math.max()
         currentMaxValue = Math.max(maxValueWithThisCake, currentMaxValue)
      }
      

        
    };
    
   maxValuesAtCapacities[currentCapacity] = currentMaxValue; 

  }
  
  
  return maxValuesAtCapacities[weightCapacity]; 
}



/* 
O- max monetary value of cakes bag can hold 
I- array of objects detailing cake types and capacity of bag as integer
C- combinations of cakes can add up to capacity (can be less)
E- weights and values can be non-negative (0 going up)
     if weight of cake is 0, take infinite
     if capacity of duffel is 0, take 0

Approach:

knowing capacity, we add up each cake object's weights and see if it reaches max?
how do we return value from weights we've stored? 
do we store multiples of cake and that multiple's total value in object? 


loop thru all cakes, find ratio of value per kg
add a bunch of the most valuable first until we go over capacity
if we go over, subtract the last we took and add in second most valuable? 
check if 2nd most valuable would fit weight capacity 
if we loop thru all cakes and we still go over, then the max is it
compute value of what we took and return 


w: 1, value: 300
w: 2, value: 100

capacity is 10

fill an array where index is capacity (kg) and value is max possible value
for each capacity:
calculate how many cakes of each cake type will fill up the capacity 
multiply number by cake's value and put in array? 



*/



// Tests

// let desc = 'one cake';
// let actual = maxDuffelBagValue([{ weight: 2, value: 1 }], 9);
// let expected = 4;
// assertEqual(actual, expected, desc);

// desc = 'two cakes';
// actual = maxDuffelBagValue([
//   { weight: 4, value: 4 },
//   { weight: 5, value: 5}], 9);
// expected = 9;
// assertEqual(actual, expected, desc);

// desc = 'only take less valuable cake';
// actual = maxDuffelBagValue([
//   { weight: 4, value: 4 },
//   { weight: 5, value: 5 }], 12);
// expected = 12;
// assertEqual(actual, expected, desc);

// desc = 'lots of cakes';
// actual = maxDuffelBagValue([
//   { weight: 2, value: 3 },
//   { weight: 3, value: 6 },
//   { weight: 5, value: 1 },
//   { weight: 6, value: 1 },
//   { weight: 7, value: 1 },
//   { weight: 8, value: 1 }], 7);
// expected = 12;
// assertEqual(actual, expected, desc);

// desc = 'value to weight ratio is not optimal';
// actual = maxDuffelBagValue([
//   { weight: 51, value: 52 },
//   { weight: 50, value: 50 }], 100);
// expected = 100;
// assertEqual(actual, expected, desc);

// desc = 'zero capacity';
// actual = maxDuffelBagValue([{ weight: 1, value: 2 }], 0);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'cake with zero value and weight';
// actual = maxDuffelBagValue([
//   { weight: 0, value: 0 },
//   { weight: 2, value: 1 }], 7);
// expected = 3;
// assertEqual(actual, expected, desc);

// desc = 'cake with non-zero value and zero weight';
// actual = maxDuffelBagValue([{ weight: 0, value: 5 }], 5);
// assertEqual(isFinite(actual), false, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`)
//   }
// }