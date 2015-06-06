/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){

  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value){
    var idx = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[idx];

    if( !bucket ) {
      bucket = [];
      storage[idx] = bucket;
    }

    for( var i = 0; i < bucket.length; i++ ) {
      var tuple = bucket[i];
      if( tuple[0] === key ) {
        tuple[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    size++;
    if( size > 0.75 * storageLimit ) result.resize( storageLimit * 2 );
  };

  result.retrieve = function(key){
    var idx = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[idx];

    if( !bucket ) return null;

    for( var i = 0; i < bucket.length; i++ ) {
      var tuple = bucket[i];
      if( tuple[0] === key ) return tuple[1];
    }

    return null;
  };

  result.remove = function(key){
    var idx = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[idx];

    if( !bucket ) return null;

    for( var i = 0; i < bucket.length; i++ ) {
      var tuple = bucket[i];
      if( tuple[0] === key ) {
        bucket.splice(i, 1);
        size--;
        if( size < 0.25 * storageLimit ) result.resize(storageLimit / 2);
        return tuple[1];
      }
    }

    return null;
  };

  result.resize = function(newSize) {
    var oldStorage = storage;
    storage = [];
    storageLimit = newSize;
    size = 0;

    oldStorage.forEach(function(bucket) {
      if( !bucket ) return;
      for( var i = 0; i < bucket.length; i++ ) {
        var tuple = bucket[i];
        result.insert(bucket[0], bucket[i]);
      }
    });
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
