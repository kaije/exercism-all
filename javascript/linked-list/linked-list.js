class Node {
  constructor(value, prevNode, nextNode) {
    this.value = value;
    this.prev = prevNode;
    this.next = nextNode;
  }
}

export default class LinkedList {
  constructor() {
    this.list = new Map();
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value, null, null);
    if (this.isEmpty()) {
      this.addFirstNode(value);
    } else {
      this.addNode(node);
      this.setTail(node);
    }
  }

  pop() {
    if (!this.isEmpty()) {      
      let oldTail = this.tail;
      let newTail = oldTail.prev;
      this.tail = newTail;
      this.count() === 1 
        ? this.removeLastNode() 
        : this.list.delete(oldTail.value);
      return oldTail.value;
    }
  }

  unshift(value) {
    const node = new Node(value, null, null);
    if (this.isEmpty()) {
      this.addFirstNode(value);
    } else {
      this.addNode(node);   
      this.setHead(node);   
    }
  }  

  shift() {
    if (!this.isEmpty()) {
      let oldHead = this.head;
      let newHead = oldHead.next;
      this.head = newHead;
      this.count() === 1 
        ? this.removeLastNode() 
        : this.list.delete(oldHead.value);
      return oldHead.value;
    }
  }  

  count() {
    return this.list.size;
  }

  delete(value) {
    const targetNode = this.list.get(value);

    if (targetNode) {
      if (this.count() === 1) {
        this.removeLastNode();
      } else if (this.head.value === value ) {
        this.shift(value);
      } else if (this.tail.value === value) {
        this.pop(value);
      } else {
        targetNode.prev.next = targetNode.next;
        targetNode.next.prev = targetNode.prev;
        this.list.delete(value);
      }      
    }
  }

  isEmpty() {
    return (!this.head && !this.tail) || this.count() === 0;
  }

  addFirstNode(value) {
    const node = new Node(value, null, null);
    this.addNode(node);
    this.head = node;
    this.tail = node;
  }

  removeLastNode() {
    this.list.clear();
    this.head = null;
    this.tail = null;
  }

  addNode(node) {
    this.list.set(node.value, node);
  }

  setHead(node) {      
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  setTail(node) {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

} 
