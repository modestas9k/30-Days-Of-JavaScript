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
  arrOfCountries.forEach((country) => {
    let number = country
      .toUpperCase()
      .split("")
      .filter((i) => i.includes(country[0]));
    letterAndCount.push({ letter: country[0], number: number.length });
  });
  return letterAndCount;
}
// console.log(countFirstLetterOfCountry()); // [ { letter: "A", number: 3 }, { letter: "Å", number: 1 } ]

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
function mostUsedFirstLetterOfCountries(letter) {
  let countriesNames = countries.map((i) => i.name);
  let filteredCountries = countriesNames.filter((i) => i.startsWith(letter));
  return `${filteredCountries}, ${filteredCountries.length}`;
}
// console.log(mostUsedFirstLetterOfCountries("D")); // Denmark,Djibouti,Dominica,Dominican Republic, 4

//
//// Exercise 3
//

// 1. Use the countries information, in the data folder. Sort countries
// by name, by capital, by population.
//
function sortCountries(word, sortBy = "ascending") {
  let countryKeys = Object.keys(countries[0]);
  if (countryKeys.find((i) => i == word)) {
    let sortedCountries = countries.sort((a, b) => {
      if (a[word] > b[word]) return 1;
      if (a[word] < b[word]) return -1;
      return;
    });
    if (sortBy === "descending") {
      return sortedCountries.reverse();
    } else {
      return sortedCountries;
    }
  } else {
    return "wrong key";
  }
}
// console.log(sortCountries("population", "descending"));

// 2. *** Find the 10 most spoken languages.
//
function mostSpokenLanguages(arr, range) {
  let list = [];
  arr.forEach((countryObj) => {
    let languages = countryObj.languages;
    for (const item of languages) {
      let isAlreadyThere = list.findIndex((i) => i.country == item);
      if (isAlreadyThere == -1) {
        list.push({ country: item, count: 1 });
      } else if (isAlreadyThere >= 0) {
        list[isAlreadyThere].count++;
      }
    }
  });
  list.sort((a, b) => {
    if (a.count > b.count) return -1;
    if (a.count < b.count) return 1;
    return;
  });
  return list.slice(0, range);
}
// console.log(mostSpokenLanguages(countries, 3)); // [ { country: "English", count: 91 }, { country: "French", count: 45 }, { country: "Arabic", count: 25 } ]

// 3. Create a function which create the ten most populated countries.
//
function mostPopulatedCounties(arr, range) {
  let newArr = arr.map((i) => ({ country: i.name, population: i.population }));
  newArr.sort((a, b) => {
    if (a.population > b.population) return -1;
    if (a.population < b.population) return 1;
    return;
  });
  return newArr.slice(0, range);
}
// console.log(mostPopulatedCounties(countries, 3)); // [ { country: "China", population: 1377422166 }, { country: "India", population: 1295210000 }, { country: "United States of America", population: 323947000 } ]

// 4. *** Try to develop a program which calculate measure of central tendency of a
// sample(mean, median, mode) and measure of variability(range, variance, standard
// deviation). In addition to those measures find the min, max, count, percentile, and
// frequency distribution of the sample. You can create an object called statistics and
// create all the functions which do statistical calculations as method for the
// statistics object.
//
const ages = [
  31,
  26,
  34,
  37,
  27,
  26,
  32,
  32,
  26,
  27,
  27,
  24,
  32,
  33,
  27,
  25,
  26,
  38,
  37,
  31,
  34,
  24,
  33,
  29,
  26,
];

const statistics = {
  count: (arr) => arr.length,
  sum: (arr) => arr.reduce((sum, curr) => (sum += curr)),
  min: (arr) => Math.min(...arr),
  max: (arr) => Math.max(...arr),
  range: (arr) => Math.max(...arr) - Math.min(...arr),
  average: (arr) => statistics.range(arr) / 2 + Math.min(...arr),
  mode: (arr) => {
    let mode = [0, 0];
    arr.forEach((item) => {
      let sameNumArr = arr.filter((i) => i == item);
      if (sameNumArr.length > mode[1]) {
        mode = [item, sameNumArr.length];
      }
    });
    return mode; // [ 26, 5 ]
  },
  freqDist: (arr) => {
    let newArr = [];
    arr.forEach((item) => {
      let sameNumArr = arr.filter((i) => i == item);
      let percent = (sameNumArr.length * 100) / arr.length;
      if (!newArr.find((i) => i[1] == item)) {
        newArr.push([percent, item]);
      }
    });
    newArr.sort((a, b) => (a[0] > b[0] ? -1 : 1));
    return newArr.join("), (");
  },
  describe: (arr) => {
    return `Count: ${statistics.count(arr)} \nSum: ${statistics.sum(
      arr
    )} \nMin: ${statistics.min(arr)} \nMax: ${statistics.max(
      arr
    )} \nRange: ${statistics.range(arr)} \nAverage: ${statistics.average(
      arr
    )} \nMode: (${statistics.mode(
      arr
    )}) \nFrequency Distribution: [(${statistics.freqDist(arr)})]`;
  },
};
// console.log(statistics.describe(ages));

// Count: 25
// Sum: 744
// Min: 24
// Max: 38
// Range: 14
// Average: 31
// Mode: (26,5)
// Frequency Distribution: [(20, 26), (16, 27), (12, 32), (8, 33), (8, 24), (8, 37), (8, 34), (8, 31), (4, 29), (4, 38), (4, 25)]
