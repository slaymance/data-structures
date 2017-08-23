var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.count = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {
  size: function() {
    return this.count;
  },
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count > 0 ? this.count-- : null;
    return popped;
  }
};