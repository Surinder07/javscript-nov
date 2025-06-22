// const fruits = ['apple', 'orange', 'mango', 'grapes'];
// const veggies = ['tomatoes', 'onion', 'Cabbage', 'Brocolli', 'Potatoes'];

// //fruits.push(veggies);

// //console.log(fruits);

// // console.log(fruits[4][1][1]);

// // // int arr[] = {{2,3,5},{2,4,5},{1,2,3}}

// // const arr = fruits.concat(veggies);
// // console.log(arr);

// // spread operator ...

// const newArray = [...fruits, ...veggies];
// console.log(newArray);

// const numbers = [1, 2, 4, 45, 23, [23, 34, 5, 34, [23, 53, 23], 4], 34, 5, 34];

// console.log(numbers.flat(Infinity));

// // loops

// const companyName = 'Pragra';

// var result = Array.from(companyName);

// console.log(Array.isArray(result));

const colors = ['green', 'orange', 'yellow', 'Blue'];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// colors.forEach((c) => {
//   console.log(c);
// });

const numbers = Array.of(10, 20, 30, 40, 50);
for (const num of numbers) {
  console.log(num);
}

// filter, map, flatmap
