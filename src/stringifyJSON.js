// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  return stringify("", {"": obj});
};

var stringify = function(key, container) {
  // helper function which is called recursively to generate a string from a JSON object

  // initialize variables
  var value = container[key];
  var i, k, v, length, partial;

  // return value based on type of value
  switch (typeof value) {
  // String case
  case 'string':
    return '"' + value + '"';
  // Number case
  case 'number':
  // Boolean case
  case 'boolean':
  // Null case
  case 'null':
    return String(value);
  // Object case
  case 'object':
    if (!value) {
    	return 'null';
    }
    // make an array to hold the partial results of stringification
    partial = [];

    // Check whether value is array
    if (Object.prototype.toString.apply(value) === '[object Array]') {
      // if array then stringify every element
      length = value.length;
      for (i=0; i < length; i++) {
      	partial[i] = stringify(i, value) || 'null';
      }

      // join elements together, separate with commas, and wrap in square brackets
      v = partial.length === 0 ? '[]' : '[' + partial.join(',') + ']';
      return v;
        
    } else {
      // otherwise iterate through all the keys of the object value
      for (k in value) {
      	if (Object.prototype.hasOwnProperty.call(value, k)) {
      		v = stringify(k, value);
      		if (v) {
      			partial.push(('"' + k + '"') + ':' + v);
      		}
      	}
      }

      // join elements together, separate with commas, and wrap in curly braces
      v = partial.length === 0 ? '{}' : '{' + partial.join(',') + '}';
      return v;
    }
  }
};
