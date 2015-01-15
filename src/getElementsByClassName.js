// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  // Call a helper function on the root of the document
  return getElementsHelper(document.body, className, []);
};

// Helper function for recursion
// element = current element being inspected
// className = class name to match on
// nodeList = array of all nodes that have matched so far
var getElementsHelper = function(element, className, nodeList) {
    
    // check if current element has matching class

    // check for base case - element with no children element
    // if element has children then pop on the result of
    // calling getElementsHelper on each child element onto the nodeList array

    // Return the array of node names

}
