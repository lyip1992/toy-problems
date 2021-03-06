/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time - we can only have a total of 6 operations
 * Constraint 2: Do this in constant space - we cannot have an array that increases with n
 * Constraint 3: Do not mutate the original nodes in any way - don't mutate the original array
 */

var Node = function(value){
  return { value: value, next: null };
};

var hasCycle = function(linkedList){
  var slow = linkedList;
  var fast = linkedList.next;

  while( true ) {
    if( !fast || !fast.next ) { return false; }
    else if( fast === slow || fast.next === slow ) { return true; }
    else {
      slow = slow.next;
      fast = fast.next.next;
    }
  }
};
