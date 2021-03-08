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

  length() {
    return this.items.length;
  }
}

//  Implement the enqueue and dequeue methods


class QueueTwoStacks {
  
  constructor() {
    // create two stacks
    this.putInStack = new Stack();
    this.takeOutStack = new Stack();
  }
  
  enqueue(item) {
    this.putInStack.push(item);
  }

  dequeue() {
    // only move to outstack if outstack has nothing in it
    if (this.takeOutStack.length() === 0) {
      
      // move from in stack to out stack to reverse order
      // only move if instack has items in it
      while (this.putInStack.length() > 0) {
        let newest = this.putInStack.pop();
        this.takeOutStack.push(newest);
      }
      
      
      // if out stack is empty even if we push from inStack...error out
      if (this.takeOutStack.length() === 0) {
        throw new Error('Empty queue bro')
      }
      
    }
    
    // de-q if there's something in outstack 
    return this.takeOutStack.pop();

    
  }
}

/*

O- queue class implementation w/ enqueue (put to back) 
and dequeue (take from front)  methods
I- en-q would take an arg and de-q would probably take the entire Q
C- FIFO, optimize for time cost of m calls 
E- d-q empty q 


APPROACH

have two stacks- putInStack and takeOutStack

to en-q, just push onto putInStack

to d-q on empty outStack, we need oldest item at bottom of inStack
push each item from inStack to outStack until we get to oldest item
return oldest item

now second oldest is on top of outStack and everything else is in order
on the outStack

keep popping off items from outStack since they're in order

edge case: nothing on outStack?   


*/



// Tests
// const q = new QueueTwoStacks();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// let desc = 'dequeue #1';
// let actual = q.dequeue();
// let expected = 1;
// assertEquals(actual, expected, desc);

// desc = 'dequeue #2';
// actual = q.dequeue();
// expected = 2;
// assertEquals(actual, expected, desc);

// q.enqueue(4);

// desc = 'dequeue #3';
// actual = q.dequeue();
// expected = 3;
// assertEquals(actual, expected, desc);

// desc = 'dequeue #4';
// actual = q.dequeue();
// expected = 4;
// assertEquals(actual, expected, desc);

// desc = 'dequeue from empty queue';
// const emptyDequeue = () => q.dequeue();
// assertThrowsError(emptyDequeue, desc);

// function assertEquals(a, b, desc) {
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