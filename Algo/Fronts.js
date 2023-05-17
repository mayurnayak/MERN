// Add Front

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    addFront(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  
      return this.head;
    }
  }
  



//   Remove Front

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    removeFront() {
      if (this.head === null) {
        return null;
      }
  
      const newHead = this.head.next;
      this.head = newHead;
  
      return this.head;
    }
  }
  

//   Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

//  class SLL {
//     // constructor, other methods, removed for brevity
//      front() {
    	
//     }
//  }
// copy
// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    front() {
      if (this.head === null) {
        return null;
      }
  
      return this.head.data;
    }
  }
  