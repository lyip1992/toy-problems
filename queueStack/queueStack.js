/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(item){ // add an item to the top of the stack
  this._storage[this._size] = item;
  this._size++;
};

Stack.prototype.pop = function(){ // remove an item from the top of the stack
  var temp = this._storage[this._size - 1];
  delete this._storage[this._size - 1];
  this._size--;
  return temp;
};

Stack.prototype.size = function(){ // return the number of items in the stack
  return this._size;
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  this._inbox = new Stack();
  this._outbox = new Stack();
};

Queue.prototype.enqueue = function(item){ // called to add an item to the `queue`
  this._inbox.push(item);
};

Queue.prototype.dequeue = function(){ // called to remove an item from the `queue`
  if( !this._outbox.size() && this._inbox.size() ){
    while( this._inbox.size() ){  // while inbox size is greater than 0
      this._outbox.push(this._inbox.pop());  // pop item off inbox and put it into the outbox
    }
  }

  if( this._outbox.size() ){ return this._outbox.pop(); }  // if there's something in our outbox, pop it off
  return null;  // else return null
};

Queue.prototype.size = function(){ // should return the number of items in the queue
  return this._inbox.size() + this._outbox.size();
};
