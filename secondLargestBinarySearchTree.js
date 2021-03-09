class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function findLargest(rootNode) {
  let currentNode = rootNode;

  while(currentNode) {
    if (!currentNode.right) {
      return currentNode.value
    }

    currentNode = currentNode.right;
  }
}

function findSecondLargest(rootNode) {

  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 1 node');
  }

  let currentNode = rootNode

  while (currentNode) {

    if (currentNode.left && !currentNode.right) {
      return findLargest(currentNode.left)
    }

    if (currentNode.right && !currentNode.right.left && !currentNode.right.right) {
      return currentNode.value
    }

    currentNode = currentNode.right
  }
}


//RECURSIVE SOLUTION**********************
// function findLargest(rootNode) {
//   if (!rootNode) {
//     throw new Error('Tree must have at least 1 node');
//   }
//   if (rootNode.right) {
//     return findLargest(rootNode.right);
//   }
//   return rootNode.value;
// }

// function findSecondLargest(treeRoot) {
//   // // Find the second largest item in the binary search tree
//   if (!treeRoot.value) {
//     throw new Error('Error')
//   }

//   if (treeRoot.value && (treeRoot.left === null && treeRoot.right === null)) {
//     throw new Error('Error')
//   }

//   if (treeRoot.left && treeRoot.right === null) {
//     return findLargest(treeRoot.left)
//   }

//   if (treeRoot.right && (treeRoot.right.left === null && treeRoot.right.right === null)) {
//     return treeRoot.value
//   }

//   return findSecondLargest(treeRoot.right)
// }


// O - Output will be an integer of the second largest number
// I - BST
// C - has to be integers, has to have more than one node
// E - Zero or one node input

// Depth first
// Put everything to a stack and pop off that stack
// Keep a variable that keeps the largest
// Keep a variable that keeps that second largest


// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(findSecondLargest(treeRoot), 70, desc);

desc = 'largest has a left child';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
assertEquals(findSecondLargest(treeRoot), 60, desc);

desc = 'largest has a left subtree';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
leftNode = rightNode.insertLeft(60);
leftNode.insertRight(65);
leftNode = leftNode.insertLeft(55);
leftNode.insertRight(58);
assertEquals(findSecondLargest(treeRoot), 65, desc);

desc = 'second largest is root node';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
assertEquals(findSecondLargest(treeRoot), 50, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(findSecondLargest(treeRoot), 40, desc);

desc = 'ascending linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(60);
rightNode = rightNode.insertRight(70);
rightNode = rightNode.insertRight(80);
assertEquals(findSecondLargest(treeRoot), 70, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertThrowsError(() => findSecondLargest(treeRoot), desc);

desc = 'when tree is empty';
treeRoot = null;
assertThrowsError(() => findSecondLargest(treeRoot), desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}