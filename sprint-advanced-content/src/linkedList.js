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
    
    if (!list.head) {
      list.head = node;
    } else if (!list.head.next) {
      list.head.next = list.tail;
      list.tail.previous = list.head;
    } else {
      previousTail.next = list.tail;
      list.tail.previous = previousTail;
    }

  };

  list.addToHead = function(value) {
    var node = Node(value);
    var previousHead = list.head;
    list.head = node;

    if (!list.tail) {
      list.tail = node;
    } else if (!list.tail.previous) {
      // point tail and head to each other
      list.tail.previous = list.head;
      list.head.next = list.tail;
    } else {
      // point head and previous head to each other
      previousHead.previous = list.head;
      list.head.next = previousHead;
    }
  };

  list.removeTail = function() {
    var tailValue = list.tail.value;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return tailValue;
  };

  list.removeHead = function() { //O(1)
    //assign current head value to variable, to return later
    //assign head to head.next
    var headValue = list.head.value;
    list.head = list.head.next;
    if (list.head) {
      list.head.previous = null;
    }
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
