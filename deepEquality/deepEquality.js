/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  var test = {};

  for( var key1 in apple ){
    test[key1] = apple[key1];
  }

  for( var key2 in orange ){
    test[key2] = orange[key2];
  }

  return JSON.stringify(test) === JSON.stringify(apple);
};
