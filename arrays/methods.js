const arr = [1,2,3,4,5,6,7];

//printing the original array
console.log(arr);

//remove final element
arr.pop();
console.log(arr," after pop");

//inserts one element to the last
arr.push(8);
console.log(arr," after push");

//removes the first element
arr.shift();
console.log(arr," after shift");

//adds one element to the front
arr.unshift(0);
console.log(arr," after unshift");

//replaces an element with another element
arr.splice(4,1,6);
console.log(arr," after splice");
