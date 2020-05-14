// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size(){
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    if(!this.head){
      return null;
    }

    let node = this.head;
    while(node) {
      if(!node.next){
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next;
  }

  removeLast(){

    if(!this.head){
      return;
    };

    if(!this.head.next){
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while(node.next){
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }


  insertLast(data){

    // if(!this.head){
    //   return;
    // };
    //
    // const node = new Node(data)
    // let lastNode = this.getLast();
    // lastNode.next = node;

    //alternate solution
    const last = this.getLast();

    if(last){
      last.next = new Node(data);
    } else {
      new Node(data);
    }
  }


}

module.exports = { Node, LinkedList };
