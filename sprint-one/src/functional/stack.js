var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var poppedValue = storage[count - 1];
    delete storage[count - 1];
    count > 0 ? count-- : count;
    return poppedValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
