// Print odd numbers in an array
(function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr.forEach(function (num) {
    if (num % 2 !== 0) console.log(num);
  });
})();

// Convert all the strings to title caps in a string array
(function () {
  let arr = ["hello", "world", "javascript"];
  let titleCapsArr = arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  console.log(titleCapsArr);
})();

// Sum of all numbers in an array
(function () {
  let arr = [1, 2, 3, 4, 5];
  let sum = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  console.log(sum);
})();

// Return all the prime numbers in an array
(function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let primeNumbers = arr.filter(function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log(primeNumbers);
})();

// Return all the palindromes in an array
(function () {
  let arr = ["level", "hello", "world", "madam"];
  let palindromes = arr.filter(function (str) {
    return str === str.split("").reverse().join("");
  });
  console.log(palindromes);
})();
// Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((num) => {
  if (num % 2 !== 0) console.log(num);
});

// Convert all the strings to title caps in a string array
let strings = ["hello", "world", "javascript"];
let titleCapsArr = strings.map(
  (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
);
console.log(titleCapsArr);

// Sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Return all the prime numbers in an array
let primeNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = primeNumbersArr.filter((num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});
console.log(primeNumbers);

// Return all the palindromes in an array
let palindromesArr = ["level", "hello", "world", "madam"];
let palindromes = palindromesArr.filter(
  (str) => str === str.split("").reverse().join("")
);
console.log(palindromes);
