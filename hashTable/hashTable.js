/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    var idx = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[idx];

    if( !bucket ) {  // is there even a bucket there
      bucket = [];
      bucket.push([ key, value ]);
      return;
    }

    for( var i = 0; i < bucket.length; i++ ) {  // if the key is already there, replace the value
      var tuple = bucket[i];
      if( tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    bucket.push([ key, value ]);  // add the value into the hash table
    return;
  };

  result.retrieve = function(key) {
    var idx = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[idx];

    if( !bucket ) { // if there is no bucket there return nothing
      return null;
    }

    for( var i = 0; i < bucket.length; i++ ) { // look for the key in that bucket
      var tuple = bucket[i];
      if( tuple[0] === key ) {
        return value;
      }
    }

    return null; // if we don't find the key in the bucket, return null
  };

  result.remove = function(key) {
    var idx = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[idx];

    if( !bucket ) { // if there isn't a bucket at that index, return null
      return null;
    }

    for( var i = 0; i < bucket.length; i++ ) { // look for the key in that bucket
      var tuple = bucket[i];
      if( tuple[0] === key ) {  // if we find the key
        var temp = bucket.splice(i, 1);  // splice that tuple out of the bucket
        return temp[1]; // and return the value from that spliced tuple
      }
    }

    return null; // if we don't find the key in the bucket, retrun null
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
