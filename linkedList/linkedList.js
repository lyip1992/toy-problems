/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.tail = null;
  this.head = null;
};

LinkedList.prototype.addToTail = function(value){
  if( !this.head ){
    this.tail = this.makeNode(value);
    this.head = this.tail;
  } else {
    var temp = this.makeNode(value);
    this.tail.next = temp;
    this.tail = temp;
  }
};

LinkedList.prototype.removeHead = function(){
  if( this.head ){
    var temp = this.head;
    if( this.head.next ) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    return temp.value;
  }
  return null;
};

LinkedList.prototype.contains = function(value){ // recursive implementation
  var temp = this.head;
  while( temp ){
    if( temp.value === value ){
      return true;
    } else {
      temp = temp.next;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function(value){
  return new Node(value);
};

var Node = function(value){
  this.value = value;
  this.next = null;
};
