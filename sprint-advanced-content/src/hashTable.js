var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  this.size++;
  if (this.size >= this._limit * 0.75) {
    this.resize('double');
  }

  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var indexArray = this._storage.get(index);
  var replaceKey;
  for (var i = 0; i < indexArray.length; i++) {
    if (indexArray[i][0] === k) {
      indexArray[i] = [k, v];
      replaceKey = true;
      break;
    }
  } 
  if (!replaceKey) {
    indexArray.push([k, v]);
  }
  this._storage.set(index, indexArray);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]; 
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  if (this.size > 0) {
    this.size--;
  }
  if (this.size <= this._limit * 0.25 && this._limit > 8) {
    //half size before delete [k,v]
    this.resize('half');
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      break;
    }
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.resize = function(indicator) {
  var factor;
  if (indicator === 'double') {
    factor = 2;
  } else {
    factor = 0.5;
  }

  var oldStorage = this._storage;
  this._limit *= factor;
  this._storage = LimitedArray(this._limit);
  this.size = 0;

  oldStorage.each(bucket => {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }  
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


