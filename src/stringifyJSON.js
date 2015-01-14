// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var indent = '  ';
  return stringify("", {"": obj});
};

var stringify = function(key, container) {
  // helper function which is called recursively to generate a string from a JSON object

  // initialize variables

  // check to see if value has a toJSON method

  // return value based on type of value
  
  // String case

  // Number case

  // Boolean case

  // Null case

  // Object case

    // Check whether value is array
      // if array then stringify every element

      // join elements together, separate with commas, and wrap in square brackets

    // otherwise iterate through all the keys of the object value

      // join elements together, separate with commas, and wrap in curly braces
      
};
