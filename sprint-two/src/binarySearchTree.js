var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {  // O(log(n))

  var searchNodeToAdd = function(node) {
    var propertyAccess = value < node.value ? 'left' : 'right';
    if (node[propertyAccess] === null) {
      node[propertyAccess] = BinarySearchTree(value);
    } else {
      searchNodeToAdd(node[propertyAccess]);
    }
  };
  searchNodeToAdd(this);
};

BinarySearchTree.prototype.contains = function(value) {  // O(log(n))
  
  var result = false;
  var searchNode = function(node) {
    if (node.value === value) {
      result = true;
      return;
    } 
    var propertyAccess = value < node.value ? 'left' : 'right';
    if (node[propertyAccess]) {
      searchNode(node[propertyAccess]);
    }
  };
  searchNode(this);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) { // O(n)
  
  var iterateTree = function(node) {
    cb(node.value);
    if (node.left) {
      iterateTree(node.left);
    }
    if (node.right) {
      iterateTree(node.right);
    }
  };
  iterateTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
