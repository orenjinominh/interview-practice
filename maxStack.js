// Implement the push, pop, and getMax methods

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maximumsStack = new Stack();
  }

  push(item) {
    this.stack.push(item);
    if (this.maximumsStack.peek() === null || item >= this.maximumsStack.peek()) {
        this.maximumsStack.push(item);
    }
  }

  pop() {
    let item = this.stack.pop();
    if (item === this.maximumsStack.peek()) {
      this.maximumsStack.pop();
    }
    return item; 
  }

  getMax() {
    return this.maximumsStack.peek(); 
  }
}

class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}




/*

O- integer representing largest element in a stack
I- "this" representing the stack 
C- stack only holds integers (can be negative)
E- nothing in stack, same size items


approach

functions that: add an item, remove an item, look at the last item
can we mutate original input stack? 
do we have to care about increase in size complexity 


*/


// Tests

// const s = new MaxStack();
// s.push(5);

// assertEquals(5, s.getMax(), 'check max after 1st push');

// s.push(4);
// s.push(7);
// s.push(7);
// s.push(8);

// assertEquals(8, s.getMax(), 'check before 1st pop');
// assertEquals(8, s.pop(), 'check pop #1');
// assertEquals(7, s.getMax(), 'check max after 1st pop');
// assertEquals(7, s.pop(), 'check pop #2');
// assertEquals(7, s.getMax(), 'check max after 2nd pop');
// assertEquals(7, s.pop(), 'check pop #3');
// assertEquals(5, s.getMax(), 'check max after 3rd pop');
// assertEquals(4, s.pop(), 'check pop #4');
// assertEquals(5, s.getMax(), 'check max after 4th pop');

// function assertEquals(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }