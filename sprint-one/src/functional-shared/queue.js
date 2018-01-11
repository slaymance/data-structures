const queueMethods = {};

function enqueue(value) {
  this.storage[this.end += 1] = value;
}

function dequeue() {
  const dequeuedValue = this.storage[this.start === this.end ?
    this.end : this.start += 1];
  delete this.storage[this.start];
  return dequeuedValue;
}

function size() {
  return this.end - this.start;
}

queueMethods.enqueue = enqueue;
queueMethods.dequeue = dequeue;
queueMethods.size = size;

function Queue() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  const someInstance = { ...queueMethods };
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  return someInstance;
}
