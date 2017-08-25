var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //O(1)
    //create new Node
    //assign tail to node
    //condition: if the head is null, add tail to head
    //else if head is pointing to null 
      //then we point the head's next to the tail
    var node = Node(value);
    var previousTail = list.tail;
    list.tail = node;
    

    if (list.head === null) {
      list.head = node;
    } else if (list.head.next === null) {
      list.head.next = list.tail;
    } else {
      previousTail.next = node;
    }
  };

  list.addToHead = function(value) {
    
  };

  list.removeTail = function() {
    
  };

  list.removeHead = function() { //O(1)
    //assign current head value to variable, to return later
    //assign head to head.next
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) { //O(n)
    // create a function to recursively check each node's value to find target
      // if node.value === target;
      //   return true;
      // else if node.next !== null 
      //   return itself with node.next;
      // else return false

    // return our recursiveFunction(list.head);
    var checkNode = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next !== null) {
        return checkNode(node.next);
      } else {
        return false;
      }
    };
    return checkNode(list.head);    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
