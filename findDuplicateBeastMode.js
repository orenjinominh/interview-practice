function findDuplicate(intArray) {

 
  // Find a number that appears more than once ... in O(n) time and O(1) space
  const n = intArray.length - 1; 
  
  // STEP 1: GET INTO CYCLE
  let position = n + 1; // starting at head
  
  for (let i = 0; i < n; i++) {
    position = intArray[position - 1];
  }

  // console.log('position after walking n steps', position);
  
  // STEP 2: FIND LENGTH 
  const rememberedPosition = position;
  let currentValue = intArray[position - 1];
  let steps = 1; 

  // console.log('rememberedPosition', rememberedPosition);
  // console.log('currentValue', currentValue);
  
  
  // we only break out if we've stepped until we get to first node of cycle
  while (currentValue !== rememberedPosition) {
    currentValue = intArray[currentValue - 1];
    // console.log('current Value inside while loop', currentValue);
    steps++; 
  }

  console.log('total steps in cycle', steps);
  
  // STEP 3: SET POINTERS AND FIND FIRST NODE
  
  let startPointer = n + 1; 
  let endPointer = n + 1; 
  
  for (let i = 0; i < steps; i++) {
    endPointer = intArray[endPointer - 1];
    console.log('endPointer updated to be...', endPointer);
  }
  
  while (startPointer !== endPointer) {
    startPointer = intArray[startPointer - 1];
    console.log('startPointer now is', startPointer);
    endPointer = intArray[endPointer - 1];
    console.log('endPointer now is', endPointer);
  }
  
  return startPointer; 
  
}

let intArray = [4, 1, 4, 8, 3, 2, 7, 6, 5];
findDuplicate(intArray);

/*
time O(n) linear and space is O(1) - no duplicating the original intArray
range of 1 to numbers in array, and array length is n + 1

O- integer that represents duplicate number in array
I- array of integers
C- at least two numbers in array (anything less 1 number is ??)
E- no duplicates, multiple duplicates (return first one?)

[4, 1, 4, 8, 3, 2, 7, 6, 5] "this.next"
 1  2  3  4  5  6  7  8  9  "this.value"
 0  1  2  3  4  5  6  7  8   index
 
 theories: 
 1. last position is head node
 2. there is no end because nothing's next value is null 
 3. maybe array represents cyclic graph where last position is head pointing into cycle?
 4. the node that starts the cycle IS the duplicate value 
    - it has two pointers to its node (so two nodes have "next" values as that node value)
    node position is its "this.value"
    node value is its "this.next"
    
  5. HAVE to figure out length of cycle then use that
  6. start pointer at beginning and x.length out to mark end pointer
  7. move pointers until start and end pointers are the same to find 
  the node that starts the cycle
  8. that node will be the duplicate 
    
  how do we keep track of node's pointing to each other? 
  
  we store this.next and then see if we see it again while we walk the list? 
  
  if there are duplicate multiples, do we grab the first one we see when we traverse list? 
  
  to find the length, we remember position inside cycle and count number of steps it 
  takes to get back to that position
  
  converting linked list to array:
  const n = 8
  const currentPosition = 9;
  
  for (let i = 0; i < n; i++) {
    const currentIndex = currentPosition - 1;
    // currentIndex = 8
    
    currentPosition = intArray[currentIndex];
    // currentPosition = intArray[8] === 5
    
    // ----> simplified to
    currentPosition = intArray[currentPosition - 1];
    
  }
  


*/



// Tests

// let desc = 'just the repeated number';
// let actual = findDuplicate([1, 1]);
// let expected = 1;
// assertEqual(actual, expected, desc);

// desc = 'short array';
// actual = findDuplicate([1, 2, 3, 2]);
// expected = 2;
// assertEqual(actual, expected, desc);

// desc = 'medium array';
// actual = findDuplicate([1, 2, 5, 5, 5, 5]);
// expected = 5;
// assertEqual(actual, expected, desc);

// desc = 'long array';
// actual = findDuplicate([4, 1, 4, 8, 3, 2, 7, 6, 5]);
// expected = 4;
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }