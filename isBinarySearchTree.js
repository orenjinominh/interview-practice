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

function isBinarySearchTree(treeRoot, lowerBound = Number.NEGATIVE_INFINITY , upperBound = Number.POSITIVE_INFINITY) {

  // recursive solution

  // upperBound = Number.POSITIVE_INFINITY;
  // lowerBound = Number.NEGATIVE_INFINITY;
  let node = treeRoot;

  if (!treeRoot) return true

  if (node.value >= upperBound || node.value <= lowerBound) {
    return false;
  }

  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) && 
  isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);

  // Determine if the tree is a valid binary search tree
  // let queue = [];
  // let currentItem = {
  //   node: treeRoot,
  //   lowerBound: Number.NEGATIVE_INFINITY,
  //   upperBound: Number.POSITIVE_INFINITY
  // };

  // queue.push(currentItem);

  // while (queue.length) {

  //   let currentNode = queue.pop();
  //   console.log('currentNode here', currentNode);
  //   let node = currentNode.node;
  //   let lowerBound = currentNode.lowerBound;
  //   let upperBound = currentNode.upperBound; 
  //   // console.log('node here', node);
  //   // invalid node if value is higher than upperBound or lower than lowerBound- get out!!
  //   // we'll keep updating lower and upper bounds as we go along so we have a reference
  //   // to the highest and lowest it can be compared to node above it
  //   if (node.value >= upperBound || node.value <= lowerBound) {
  //     return false; 
  //   }

  //   // if it has a left side, we push that left node into the queue
  //   // its value will be current node's left
  //   // update the upperBound (meaning, it HAS to be lower than upper bound of node above it )
  //   if (node.left) {
  //     queue.push({
  //       node: node.left,
  //       lowerBound,
  //       upperBound: node.value
  //     });
  //   }

  //   // same here, if it has a right, push that right node into queue
  //   // value will be current node's right
  //   // we update lowerBound (because if it's on the right side, it has to be higher than node above it)
  //   if (node.right) {
  //     queue.push({
  //       node: node.right,
  //       lowerBound: node.value,
  //       upperBound
  //     })
  //   }
  // }

  // // if we traverse all nodes and everything checks out (nothing left in queue...)
  // return true;
}


// Tests

// let desc = 'valid full tree';
// let treeRoot = new BinaryTreeNode(50);
// let leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(10);
// leftNode.insertRight(40);
// let rightNode = treeRoot.insertRight(70);
// rightNode.insertLeft(60);
// rightNode.insertRight(80);
// assertEquals(isBinarySearchTree(treeRoot), true, desc);

// desc = 'both subtrees valid';
// treeRoot = new BinaryTreeNode(50);
// leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(20);
// leftNode.insertRight(60);
// rightNode = treeRoot.insertRight(80);
// rightNode.insertLeft(70);
// rightNode.insertRight(90);
// assertEquals(isBinarySearchTree(treeRoot), false, desc);

// desc = 'descending linked list';
// treeRoot = new BinaryTreeNode(50);
// leftNode = treeRoot.insertLeft(40);
// leftNode = leftNode.insertLeft(30);
// leftNode = leftNode.insertLeft(20);
// leftNode = leftNode.insertLeft(10);
// assertEquals(isBinarySearchTree(treeRoot), true, desc);

// desc = 'out of order linked list';
// treeRoot = new BinaryTreeNode(50);
// rightNode = treeRoot.insertRight(70);
// rightNode = rightNode.insertRight(60);
// rightNode = rightNode.insertRight(80);
// assertEquals(isBinarySearchTree(treeRoot), false, desc);

// desc = 'one node tree';
// treeRoot = new BinaryTreeNode(50);
// assertEquals(isBinarySearchTree(treeRoot), true, desc);

// function assertEquals(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`)
//   }
// }