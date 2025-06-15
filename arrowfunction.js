function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log(result);

// arrow function

const sum = (a, b) => a + b;
const result1 = sum(10, 43);
console.log(result1);

//

const greet = () => 'Hello';

console.log(greet());

//

(a, b) => a * b;

//
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map((e) => e * 2);
console.log(doubled);

const age = [10, 34, 12, 43, 66, 34];
// filter age greater than 18

const ageResult = age.filter((a) => a > 18);
console.log(ageResult);
