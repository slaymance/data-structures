function Queue() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let start = 0;
  let end = 0;

  // Implement the methods below

  someInstance.enqueue = (value) => {
    storage[end += 1] = value;
  };

  someInstance.dequeue = () => {
    const dequeuedValue = storage[start === end ? end : start += 1];
    delete storage[start];
    return dequeuedValue;
  };

  someInstance.size = () => end - start;

  return someInstance;
}
