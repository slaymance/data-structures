var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.count = 0;
  
  return queue;
};

var queueMethods = {
  size: function() {
    return this.count;
  },
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    var dequeued = this.storage[0];
    delete this.storage[0];
    for (var i = 1; i < this.count; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.count - 1];
    this.count > 0 ? this.count-- : null;
    return dequeued;
  }
};


