var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
  };

  someInstance.pop = function() {
    count > 0 ? count-- : count;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
