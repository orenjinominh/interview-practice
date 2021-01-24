class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function colorGraph(graph, colors) {

  graph.forEach(node => {
    if (node.neighbors.has(node)) {
      throw Error('looping node');
    }
    let forbiddenColors = new Set();

    node.neighbors.forEach(neighbor => {

      // must check to see if color is NOT null (valid color)
      if (neighbor.color !== null) {
        // add color onto forbidden list so we can't use again
        forbiddenColors.add(neighbor.color);
      }

    });

    for (let i = 0; i < colors.length; i++) {
      let color = colors[i];

      if (!forbiddenColors.has(color)) {
        node.color = color; 
        break;
      }
    }
  });
}

/* 

[{label= 'A', neighbors = new Set({}, {}, {}), color: 'red'}, 
{label= 'B', neighbors = new Set({}, {}, {}), color: 'blue'}. ]



when we first touch it, we assign a unique color 
the check is if node.color === node.neighbor[x].color ---> false 

for example:
if node.color = yellow 
then all node.neighbors have to be diff color 


PLAN: 
visit each node in the graph with a forEach
create a new Set of illegal colors
for each neighbor in node (iterate thru)
add the neighbor's color onto that forbidden list
after we've added forbidden colors
iterate thru list of existing colors
if that color isn't on the forbidden list then assign current node's color to be that color

edge cases: no neighbors---> true
what if neighbors have same colors, should be false if they touch
nodes with no edges is okay
cyclic nodes are okay
nodes with a loop is not okay- edge case
to detect a loop: node.neighbors.has(node.label) 


*/


// Tests
// const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];

// let graph = [];
// {
//   const nodeA = new GraphNode('A');
//   const nodeB = new GraphNode('B');
//   const nodeC = new GraphNode('C');
//   const nodeD = new GraphNode('D');
//   nodeA.neighbors.add(nodeB);
//   nodeB.neighbors.add(nodeA);
//   nodeB.neighbors.add(nodeC);
//   nodeC.neighbors.add(nodeB);
//   nodeC.neighbors.add(nodeD);
//   nodeD.neighbors.add(nodeC);
//   graph = [nodeA, nodeB, nodeC, nodeD];
// }
// colorGraph(graph, colors);
// assertEqual(validateGraphColoring(graph), true, 'line graph');

// {
//   const nodeA = new GraphNode('A');
//   const nodeB = new GraphNode('B');
//   const nodeC = new GraphNode('C');
//   const nodeD = new GraphNode('D');
//   nodeA.neighbors.add(nodeB);
//   nodeB.neighbors.add(nodeA);
//   nodeC.neighbors.add(nodeD);
//   nodeD.neighbors.add(nodeC);
//   graph = [nodeA, nodeB, nodeC, nodeD];
// }
// colorGraph(graph, colors);
// assertEqual(validateGraphColoring(graph), true, 'separate graph');

// {
//   const nodeA = new GraphNode('A');
//   const nodeB = new GraphNode('B');
//   const nodeC = new GraphNode('C');
//   nodeA.neighbors.add(nodeB);
//   nodeA.neighbors.add(nodeC);
//   nodeB.neighbors.add(nodeA);
//   nodeB.neighbors.add(nodeC);
//   nodeC.neighbors.add(nodeA);
//   nodeC.neighbors.add(nodeB);
//   graph = [nodeA, nodeB, nodeC];
// }
// colorGraph(graph, colors);
// assertEqual(validateGraphColoring(graph), true, 'triangle graph');

// {
//   const nodeA = new GraphNode('A');
//   const nodeB = new GraphNode('B');
//   const nodeC = new GraphNode('C');
//   const nodeD = new GraphNode('D');
//   const nodeE = new GraphNode('E');
//   nodeA.neighbors.add(nodeB);
//   nodeA.neighbors.add(nodeC);
//   nodeB.neighbors.add(nodeA);
//   nodeB.neighbors.add(nodeC);
//   nodeB.neighbors.add(nodeD);
//   nodeB.neighbors.add(nodeE);
//   nodeC.neighbors.add(nodeA);
//   nodeC.neighbors.add(nodeB);
//   nodeC.neighbors.add(nodeD);
//   nodeC.neighbors.add(nodeE);
//   nodeD.neighbors.add(nodeB);
//   nodeD.neighbors.add(nodeC);
//   nodeD.neighbors.add(nodeE);
//   nodeE.neighbors.add(nodeB);
//   nodeE.neighbors.add(nodeC);
//   nodeE.neighbors.add(nodeD);
//   graph = [nodeA, nodeB, nodeC, nodeD, nodeE];
// }
// colorGraph(graph, colors);
// assertEqual(validateGraphColoring(graph), true, 'envelope graph');

// {
//   const nodeA = new GraphNode('A');
//   nodeA.neighbors.add(nodeA);
//   graph = [nodeA];
// }
// assertThrows(() => {
//   colorGraph(graph, colors);
// }, 'loop graph');

// function validateGraphColoring(graph) {

//   const maxDegree = Math.max(...graph.map(node => node.neighbors.size));

//   const colorsUsed = new Set();

//   graph.forEach(node => {
//     colorsUsed.add(node.color);
//   });

//   if (colorsUsed.has(null)) {
//     return false;
//   }

//   if (colorsUsed.size > maxDegree + 1) {
//     return false;
//   }

//   let badEdges = 0;

//   graph.forEach(node => {
//     node.neighbors.forEach(neighbor => {
//       if (neighbor.color === node.color) {
//         badEdges += 1;
//       }
//     });
//   });

//   if (badEdges > 0) {
//     return false;
//   }

//   return true;
// }

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }

// function assertThrows(func, desc) {
//   try {
//     func();
//     console.log(`${desc} ... FAIL`);
//   } catch (e) {
//     console.log(`${desc} ... PASS`);
//   }
// }