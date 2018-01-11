const stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.storageSize += 1] = value;
};

stackMethods.pop = function () {
  const poppedValue = this.storage[this.storageSize];
  delete this.storage[this.storageSize];
  this.storageSize -= this.storageSize ? 1 : 0;
  return poppedValue;
};

stackMethods.size = function () {
  return this.storageSize;
};

function Stack() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  const someInstance = { ...stackMethods };
  // _(someInstance).extend(stackMethods);
  someInstance.storage = {};
  someInstance.storageSize = 0;
  return someInstance;
}
