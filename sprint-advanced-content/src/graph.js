

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {  //O(1)
  this[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {  //O(1)
  return this[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //O(n)
  for (var key in this[node]) {
    this.removeEdge(key, node);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {  //O(1)
  if (this[fromNode][toNode] && this[toNode][fromNode]) { 
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {  //O(1)
  this[fromNode][toNode] = toNode;
  this[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {  //O(1)
  delete this[fromNode][toNode], this[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {  //O(n)
  for (key in this) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


