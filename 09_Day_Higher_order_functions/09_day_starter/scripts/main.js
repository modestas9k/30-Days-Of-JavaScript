console.log(countries);

//
//// Exercise 1
//

// 1. Explain the difference between forEach, map, filter, and reduce.
//
// forEach() - runs callback on every arrays element;
//
// map() - return a new array, containing a *modified* version of each
// element based on the callback return value.
//
// filter() - return a new array, containing *only* the elements which
// return `true` from the callback.
//
// reduce() - build a new value by running every element through the given callback.
// The result from previous callback is used as the base for the next element callback.

// 3. 4. 5.
//
const miniCountries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// console.log(countries.forEach((i) => console.log(i)));
// console.log(names.forEach((i) => console.log(i)));
// console.log(numbers.forEach((i) => console.log(i)));

// 6.
//
// console.log(miniCountries.map((country) => country.toUpperCase()));

// 7. Use map to create an array of countries length from countries array.
//
// console.log(miniCountries.map((country) => country.length));

// 8. Use map to create a new array by changing each number to square
// in the numbers array.
//
// console.log(numbers.map((num) => num * num));

// 9. Use map to change to each name to uppercase in the names array.
//
// console.log(names.map((name) => name.toUpperCase()));

// 11. Use filter to filter out countries containing land.
//
// const filteredCountries = miniCountries.filter((country) =>
//   country.includes("land")
// );
// console.log(filteredCountries);

// 12. Use filter to filter out countries having six character.
//
// console.log(miniCountries.filter((country) => country.length == 6));

// 13. Use filter to filter out countries containing six letters and more in the country array.
//
// console.log(miniCountries.filter((country) => country.length >= 6));

// 14. Use filter to filter out country start with 'E';
//
// console.log(miniCountries.filter((country) => country.startsWith("F")));

// 15. Use filter to filter out only prices with values.
//
// console.log(products.filter((prod) => prod.price != 0));

// 16. Declare a function called getStringLists which takes an array as a parameter
// and then returns an array only with string items.
//
function getStringLists(arr) {
  let newArr = arr.map((i) => i.toString());
  return newArr;
}
// console.log(getStringLists(numbers));

// 17. Use reduce to sum all the numbers in the numbers array.
//
// console.log(numbers.reduce((sum, current) => sum + current));

// 18. Use reduce to concatenate all the countries and to produce this sentence:
//
function arrayToString(arr) {
  let firstString = arr.splice(0, arr.length - 1);
  firstString.reduce((sum, curr, index) => {
    return index == 0 ? curr : sum + ", " + curr;
  }, "");

  return `${firstString} and ${arr.slice(-1)} are north European countries.`;
}
// console.log(arrayToString(miniCountries));

// 19. Explain the difference between some and every.
//
//// some - Check if some of the elements are similar in one aspect.
//
//// every - Check if all the elements are similar in one aspect.

// 20. Use some to check if some names' length greater than seven in names array.
//
// console.log(names.some((name) => name.length > 7)); // true

// 21. Use every to check if all the countries contain the word land.
//
// console.log(miniCountries.every((country) => country.includes("land"))); // false

// 22. Explain the difference between find and findIndex.
//
//// find - Return the first *element* which satisfies the condition
//
//// findIndex - Return the *position* of the first element which satisfies the condition.

// 23. Use find to find the first country containing only six letters in the countries array.
//
// console.log(miniCountries.find((i) => i.length == 6)); // Sweden

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array.
//
// console.log(miniCountries.findIndex((i) => i.length == 6)); // 1

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
//
// console.log(miniCountries.findIndex((i) => i.includes("Norway"))); // 3

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
//
// console.log(miniCountries.findIndex((i) => i.includes("Russia"))); // -1

//
//// Exercise 2
//

// 1. Find the total price of products by chaining two or more array iterators.
//
function findPrice(arr) {
  return arr
    .filter((item) => item.price != 0)
    .reduce((sum, current) => (sum += current.price), 0);
}
// console.log(findPrice(products)); // 27

// 2. Find the sum of price of products using only reduce.
//
function findPriceReduce(arr) {
  return arr.reduce((sum, curr) => {
    return (sum += Number(curr.price));
  }, 0);
}
// console.log(findPriceReduce(products)); // 27

// 3.
//
function categorizeCountries(pattern) {
  let newArr = countries.filter((i) => i.name.includes(pattern));
  return newArr.map((i) => i.name);
}
// console.log(categorizeCountries("uania")); // [ "Lithuania" ]

// 4. Create a function which return an array of objects, which is the letter and the
// number of times the letter use to start with a name of a country.
//
function countFirstLetterOfCountry() {
  let arrOfCountries = countries.map((i) => i.name);
  let letterAndCount = [];

  return newArr;
}
// console.log(countFirstLetterOfCountry());

// 5.
//
function getFirstTenCountries() {
  let newArr = [];
  countries.forEach((i, index) => {
    if (index < 10) {
      newArr.push(i.name);
    }
  });
  return newArr;
}
// console.log(getFirstTenCountries());

// 6.
//
function getLastTenCountries() {
  let tenLast = [];
  countries.reverse().forEach((obj, index) => {
    if (index < 10) {
      tenLast.push(obj.name);
    }
  });
  return tenLast;
}
// console.log(getLastTenCountries());

// 7. Find out which letter is used many times as initial
// for a country name from the countries array
//
function mostUsedFirstLetterOfCountries() {
  let countriesNames = countries.map((i) => i.name);
}
console.log(mostUsedFirstLetterOfCountries());
