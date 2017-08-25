var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { // O(1)
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) { // O(n)
  var result = false;
  var searchNode = function(node) {
    if (node.value === target) {
      result = true;
      return;
    }
    for (var i = 0; i < node.children.length; i++) {
      if (result === true) { return; }
      searchNode(node.children[i]);
    }
    
  };
  searchNode(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
