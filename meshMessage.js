// A simple, somewhat inefficient queue implementation
class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }
  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}


function makePath(howWeReachedNodes, startNode, endNode) {
  let shortestPath = [];
  
  let currentNode = endNode;
  
  while(currentNode !== null) {
    shortestPath.push(currentNode)
    // update current Node to be VALUE of currentNode 
    currentNode = howWeReachedNodes[currentNode]
  }
  return shortestPath.reverse()
}

function getPath(graph, startNode, endNode) {
  let neighbors = new Queue();
  neighbors.enqueue(startNode);

  // EDGE CASES
  // Find the shortest route in the network between the two users
  if (!graph.hasOwnProperty(startNode) || !graph.hasOwnProperty(endNode)) {
    throw new Error('Missing something')
  }
  //edge case if same node
  if (startNode === endNode) {
    return [startNode]
  }

  const howWeReachedNodes = {}
  howWeReachedNodes[startNode] = null;

  while(neighbors.size > 0) {
    let currentNode = neighbors.dequeue();

    if (currentNode === endNode) {
      return makePath(howWeReachedNodes, startNode, endNode);
    }

    graph[currentNode].forEach(neighbor => {
      if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
        neighbors.enqueue(neighbor)
        howWeReachedNodes[neighbor] = currentNode;

      }
    })
  }
  // if no path possible from two nodes
  return null;
}




/* 
REASONINGS
“to get to ____, who do we go thru?
So to get to min’s friend, the shortest path is thru Min. 
That’s why we set howWeVisited[neighbor] = currentNode

O - An array of the shortest path 
I - Object representing the graph, startnode is the key of the first person,
end node is the key of the recipient
C - startNode and endNode must exist in object (throw an error)
E - same person = own name, no path = null

APPROACH
1. BFS traversal through undirected and unweighted path to find shortest path
  - add startNode to queue in front
  - pop off queue to look at current Node
  - while there's still a length to the queue, keep traversing
  - stop when currentNode === endNode (we've built up enough of the graph via traversal to find our path)
  - we use BFS with a queue for FIFO aka O(1) inserts and removals instead of an array 
2. look at current Node's neighbors with forEach, if we have seen this person, we don't touch that node (to prevent re-traversals), if we haven't add them to front of queue
3. create an object to keep track of direct relationships where key is neighbor and value is the current node's person
  - helper function makePath:   
    1. define array for shortestPath variable
    2. start from endNode
    3. while we're not at null for a value, push current node's key onto array and keep then update currentNode to its value 
       for example: to find path between Min and Adam, start at Adam, whose shortest path is to Amelia, whose shortest path is then Jayden, who is directed connected to Min
    4. since we started at endNode, return the reversed array
4. if we loop thru and never get to endNode, return null for no path
5. edge cases: 
    1. if start and end nodes are same, throw error
    2. if graph doesn't have start or end nodes, throw error
    3. no path- return null 

*/

// Tests
// const graph = {
//   'a': ['b', 'c', 'd'],
//   'b': ['a', 'd'],
//   'c': ['a', 'e'],
//   'd': ['a', 'b'],
//   'e': ['c'],
//   'f': ['g'],
//   'g': ['f']
// };
// const network = {
// 'Min': ['William', 'Jayden', 'Omar'], 
// 'William': ['Min', 'Noam'], 
// 'Jayden': ['Min', 'Amelia', 'Ren', 'Noam'], 
// 'Ren': ['Jayden', 'Omar'], 
// 'Amelia': ['Jayden', 'Adam', 'Miguel'], 
// 'Adam': ['Amelia', 'Miguel', 'Sofia', 'Lucas'], 
// 'Miguel': ['Amelia', 'Adam', 'Liam', 'Nathan'], 
// 'Noam': ['Nathan', 'Jayden', 'William'], 
// 'Omar': ['Ren', 'Min', 'Scott']
// };
// let desc = 'two hop path 1';
// let actual = getPath(network, 'Min', 'Adam');
// let expected = ['Min', 'Jayden', 'Amelia', 'Adam'];
// assertDeepEqual(actual, expected, desc);
// let desc = 'two hop path 1';
// let actual = getPath(graph, 'a', 'e');
// let expected = ['a', 'c', 'e'];
// assertDeepEqual(actual, expected, desc);
// desc = 'two hop path 2';
// actual = getPath(graph, 'd', 'c');
// expected = ['d', 'a', 'c'];
// assertDeepEqual(actual, expected, desc);
// desc = 'one hop path 1';
// actual = getPath(graph, 'a', 'c');
// expected = ['a', 'c'];
// assertDeepEqual(actual, expected, desc);
// desc = 'one hop path 2';
// actual = getPath(graph, 'f', 'g');
// expected = ['f', 'g'];
// assertDeepEqual(actual, expected, desc);
// desc = 'one hop path 3';
// actual = getPath(graph, 'g', 'f');
// expected = ['g', 'f'];
// assertDeepEqual(actual, expected, desc);
// desc = 'zero hop path';
// actual = getPath(graph, 'a', 'a');
// expected = ['a'];
// assertDeepEqual(actual, expected, desc);
// desc = 'no path';
// actual = getPath(graph, 'a', 'f');
// expected = null;
// assertDeepEqual(actual, expected, desc);
// desc = 'start node not present';
// assertThrowsError(() => {
//   getPath(graph, 'h', 'a');
// }, desc);
// desc = 'end node not present';
// assertThrowsError(() => {
//   getPath(graph, 'a', 'h');
// }, desc);
// function assertDeepEqual(a, b, desc) {
//   const aStr = JSON.stringify(a);
//   const bStr = JSON.stringify(b);
//   if (aStr !== bStr) {
//     console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
//   } else {
//     console.log(`${desc} ... PASS`);
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