var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.count = 0;

  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++; 
  },
  pop: function() {
    var popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count > 0 ? this.count-- : this.count; 
    return popped;
  },
  size: function() { return this.count; },
};