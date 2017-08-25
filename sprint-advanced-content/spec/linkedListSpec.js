describe('doublyLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should have methods named "addToHead" and "removeTail"', function() {
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when addToTail is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when addToHead is called', function() {
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(4);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should point to a previous node', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.tail.previous.value).to.equal(5);

  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should remove both head and tail when remove head, if only node', function() {
    linkedList.addToTail(4);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });
  it('should remove both head and tail when remove tail, if only node', function() {
    linkedList.addToTail(4);
    linkedList.removeTail();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should have head.previous property of null when removeHead called', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    linkedList.removeHead();
    expect(linkedList.head.previous).to.equal(null);
  });

  it('should have tail.next property of null when removeTail called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeTail();
    expect(linkedList.tail.next).to.equal(null);
  });

  it('should have head.next property of null when removeTail called, if only 2 nodes', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeTail();
    expect(linkedList.head.next).to.equal(null);
  });

  it('should have tail.previous property of null when removeHead called, if only 2 nodes', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    linkedList.removeHead();
    expect(linkedList.tail.previous).to.equal(null);
  });

  it('should contain every value that was added', function() {
    for (var i = 0; i < 20; i++) {
      linkedList.addToTail(i);
    }
    for (var j = 0; j < 20; j++) {
      expect(linkedList.contains(j)).to.equal(true);
    }
  });
  
  describe('Node', function() {
    var newNode;
  
    beforeEach(function() {
      newNode = Node(5);
    });
  
    it('should have next, value, and previous', function() {
      expect(newNode).to.have.property('next');
      expect(newNode).to.have.property('value');
      expect(newNode).to.have.property('previous');
    });
  });
  // add more tests here to test the functionality of linkedList
});


