console.log(countries);

//
//// Exercise 1
//

// 1. create an empty set.
//
const mySet = new Set();

// 2. Create a set containing 0 to 10 using loop.
//
for (let i = 0; i < 11; i++) {
  mySet.add(i);
}
// console.log(mySet);

// 3. Remove an element from a set.
//
mySet.delete(2);
// console.log(mySet);

// 4. Clear a set.
//
mySet.clear();
// console.log(mySet);

// 5. Create a set of 5 string elements from array.
//
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
  "Russian",
];
const lanSet = new Set(languages);
// console.log(lanSet); // Set(5) [ "English", "Finnish", "French", "Spanish", "Russian" ]

// 6. Create a map of countries and number of characters of a country.
//
const myCountries = ["Finland", "Sweden", "Norway"];

const countryLength = new Map();
myCountries.forEach((country) => {
  countryLength.set(country, country.length);
});
// console.log(countryLength); // Map(3) { Finland → 7, Sweden → 6, Norway → 6 }

//
//// Exercise 2
//

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

// 1. Find a union b.
//
let c = [...a, ...b];
let union = new Set(c);
// console.log(union); // Set(6) [ 1, 2, 3, 4, 5, 6 ]

// 2. Find a intersection b.
//
let B = new Set(b);
let intersection = a.filter((num) => B.has(num));
let C = new Set(intersection);
// console.log(C); // [ 3, 4, 5 ]

// 3. Find a with b.
//
let difference = a.filter((num) => !B.has(num));
let D = new Set(difference);
// console.log(D); // [ 1, 2 ]

//
//// Exercise 3
//

// 1. How many languages are there in the countries object file.
//
let languageSet = new Set();
countries.forEach((countryObj) => {
  let lanArr = countryObj.languages;
  for (const l of lanArr) {
    languageSet.add(l);
  }
});
// console.log(languageSet.size); // 112

// 2. *** Use the countries data to find the 10 most spoken languages.
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
console.log(mostSpokenLanguages(countries, 10));
