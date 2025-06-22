const arr = [1, 2, 4, 4, 5, 6, 34];

console.log(arr[2]);

// add the element in the last index
arr.push(20001);

console.log(arr);

arr.pop();
console.log(arr);

// add the element at the first index
arr.unshift(1001);
console.log(arr);

// remove the element from the  first index
arr.shift();
console.log(arr);

console.log(arr.indexOf(3));

console.log(arr.includes(34));

console.log(typeof arr);

// join function to convert object array into string
const newArray = arr.join();
console.log(typeof newArray);

// slice , splice

console.log('NEW LINE ');
//console.log(arr);

console.log(arr.slice(1, 4));

console.log(arr);

arr.splice(1, 4);

console.log(arr);
