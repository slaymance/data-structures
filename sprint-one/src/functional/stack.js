function Stack() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let size = 0;

  // Implement the methods below
  someInstance.push = (value) => {
    storage[size += 1] = value;
  };

  someInstance.pop = () => {
    const poppedValue = storage[size];
    delete storage[size];
    size -= size ? 1 : 0;
    return poppedValue;
  };

  someInstance.size = () => size;

  return someInstance;
}
