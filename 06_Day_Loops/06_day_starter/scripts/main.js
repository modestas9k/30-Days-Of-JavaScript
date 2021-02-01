//const { count } = require("console");

//console.log(countries);
//alert('Open the console and check if the countries has been loaded')

// const myCountries = countries.slice(0, 10);
// console.log(myCountries);

//
//// Exercise 1
//

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop.
//

// for (let i = 0; i < myCountries.length; i++) {
//   console.log(myCountries[i]);
// }

// let i = 0;
// while (i < myCountries.length) {
//   console.log(myCountries[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(myCountries[i]);
//   i++;
// } while (i <= myCountries.length);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop.
//

// for (let i = 10; i >= 0; i--) {
//   console.log(myCountries[i]);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(myCountries[i]);
//   i--;
// }

// let i = myCountries.length;
// do {
//   console.log(myCountries[i]);
//   i--;
// } while (i >= 0);

// 4. Write a loop that makes the following pattern using console.log()
//
function pyramid() {
  let symbol = "";
  for (let i = 0; i < 7; i++) {
    symbol += "#";
    console.log(symbol);
  }
}
// pyramid();

// 5.
//
function multiplicationTable(number) {
  for (let i = 0; i <= number; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
  }
}
// multiplicationTable(10);

// 6.
//
function multiplicationTableTwo(number) {
  for (let i = 0; i <= number; i++) {
    console.log(`${i}  ${i ** 2}  ${i ** 3}`);
  }
}
// multiplicationTableTwo(10);

// 7. Use for loop to iterate from 0 to 100 and print only even numbers.
//
function onlyEven(numbers) {
  for (let i = 0; i <= numbers; i++) {
    if (i % 2) {
      continue;
    }
    console.log(i);
  }
}
//onlyEven(10);

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers.
//
function onlyOdds(numbers) {
  for (let i = 0; i <= numbers; i++) {
    if (i % 2 == 0) {
      continue;
    }
    console.log(i);
  }
}
//onlyOdds(10);

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers.
//
function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
//console.log(isPrime(5));

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//
function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  console.log(`The sum of all numbers from 0 to ${number} is ${sum}`);
}
// sumOfNumbers(100);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all
// evens and the sum of all odds.
//
function sumOfEvensAndOdds(number) {
  let sumOfEvens = 0;
  let sumOfOdds = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      sumOfEvens += i;
    } else {
      sumOfOdds += i;
    }
  }
  console.log(
    `The sum of all evens from 0 to ${number} is ${sumOfEvens}. And the sum of all odds from 0 to ${number} is ${sumOfOdds}`
  );
}
//sumOfEvensAndOdds(100);

// 12. Print sum of evens and sum of odds as array.
//
function sumOfEvensAndOddsInArray(number) {
  let sumOfEvens = 0;
  let sumOfOdds = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      sumOfEvens += i;
    } else {
      sumOfOdds += i;
    }
  }
  console.log([sumOfEvens, sumOfOdds]);
}
//sumOfEvensAndOddsInArray(100);

// 13. Develop a small script which generate array of 5 random numbers.
//
function randomNumberArray(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  console.log(arr);
}
//randomNumberArray(5);

// 14. Develop a small script which generate array of 5 random
// numbers and the numbers must be unique.
//
function uniqueRandomNumArray(number) {
  let arr = [];
  let i = 0;
  do {
    let randomNumber = Math.floor(Math.random() * 10);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
      i++;
    }
  } while (i < number);

  console.log(arr);
}
// uniqueRandomNumArray(5);

// 15. Develop a small script which generate a six characters random id.
//
function randomId() {
  let id = Math.random().toString(36).substr(2, 6);
  console.log(id);
}
//randomId();

//
//// Exercise 2
//

// 1. Develop a small script which generate any number of characters random id.
//
function randomIdBetter(number) {
  let id = Math.random().toString(36).substr(2, number);
  console.log(id);
}
//randomIdBetter(7);

// 2. Write a script which generates a random hexadecimal number.
//
function randomHexadecimal() {
  let hex = Math.random().toString(16).substr(2, 6);
  console.log(`#${hex}`);
}
//randomHexadecimal();

// 3. Write a script which generates a random rgb color number.
//
function generateRGB() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
  }
  console.log(`rgb(${rgb.toString(",")})`);
}
//generateRGB();

// 4. all to uppercase;
//
function arrayToUpperCase(arr) {
  let newArr = [];
  for (const a in arr) {
    newArr.push(arr[a].toUpperCase());
  }
  console.log(newArr);
}
//arrayToUpperCase(myCountries);

// 5. Create an array for countries length.
//
function arrayItemLength(arr) {
  let newArr = [];
  for (const a in arr) {
    newArr.push(arr[a].length);
  }
  console.log(newArr);
}
//arrayItemLength(myCountries);

// 6.
//
function arrayOfArrays(arr) {
  let mainArray = [];
  for (const item in arr) {
    const name = arr[item];
    const short = arr[item].slice(0, 3).toUpperCase();
    const length = arr[item].length;
    mainArray.push([name, short, length]);
  }
  console.log(mainArray);
}
//arrayOfArrays(myCountries);

// 7. Check if there is a country or countries containing the word 'land'.
//
function ifCountriesHave(word) {
  let newArray = [];
  for (const item in countries) {
    if (countries[item].includes(word)) {
      newArray.push(countries[item]);
    }
  }
  if (newArray.length != 0) {
    return console.log(newArray);
  } else {
    return console.log(`All these countries are without ${word}`);
  }
}
//ifCountriesHave("land");

// 8. Check if there is a country or countries end with a substring 'ia'.
//
function ifCountriesEndsWith(word) {
  let newArray = [];
  for (const item in countries) {
    if (countries[item].includes(word)) {
      newArray.push(countries[item]);
    }
  }
  if (newArray.length != 0) {
    return console.log(newArray);
  } else {
    return console.log(`These countries ends without ${word}`);
  }
}
//ifCountriesEndsWith("ia");

// 9. Find the country containing the biggest number of characters.
//
function biggestLengthInArray(arr) {
  let biggestNumber = 0;
  for (const item in arr) {
    if (arr[item].length > biggestNumber) {
      biggestNumber = arr[item].length;
    }
  }
  return console.log(biggestNumber);
}
//biggestLengthInArray(myCountries);

// 10. find the country containing only 5 characters.
//
function findCountryLengthOf(number) {
  let newArr = [];
  for (const item in countries) {
    if (countries[item].length === number) {
      newArr.push(countries[item]);
    }
  }
  return console.log(newArr);
}
//findCountryLengthOf(5);

// 11. Find the longest word in the webTechs array.
//
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

function findTheLongestWord(arr) {
  let longest = 0;
  let word = "";
  for (const item in arr) {
    if (arr[item].length > longest) {
      longest = arr[item].length;
      word = arr[item];
    }
  }
  return console.log(word);
}
//findTheLongestWord(webTechs);

// 12.
//
function arrayWithLength(arr) {
  let newArray = [];

  for (const item in arr) {
    let word = arr[item];
    let length = arr[item].length;
    newArray.push([word, length]);
  }
  return console.log(newArray);
}
//arrayWithLength(webTechs);

// 13. Create the acronym MERN by using the array mernStack.
//
const mernStack = ["MongoDB", "Express", "React", "Node"];

function mernStackInShort() {
  let letters = "";
  for (const i in mernStack) {
    letters += mernStack[i].slice(0, 1).toUpperCase();
  }
  return console.log(letters);
}
//mernStackInShort();

// 15. reverse the order using loop without using a reverse method.
//
function reverseArrayWithNoReverse(arr) {
  let newArr = [];
  for (const i in arr) {
    newArr.unshift(arr[i]);
  }
  return console.log(newArr);
}
//reverseArrayWithNoReverse(["banana", "orange", "mango", "lemon"]);

// 16.
//
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

function printElements(arr) {
  let newStr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newStr.push(arr[i][j]);
      console.log(arr[i][j].toString());
    }
  }
  return console.log(newStr);
}
//printElements(fullStack);

//
//// Exercise 3
//

const theCountries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// 1.
//
let sortedCountries = theCountries.sort();
// console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array.
//
//console.log(webTechs.sort(), mernStack.sort());

// 8. Extract all the countries containing two or more words from
// the countries array and print it as array.
//
function extractTwoOrMoreWords(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i].split(" ");
    if (string.length > 1) {
      newArr.push(arr[i]);
    }
  }
  return console.log(newArr);
}
//extractTwoOrMoreWords(countries);

// 9. Reverse the countries array and capitalize each country
// and stored it as an array.
//
function reverseAndCapitalize(arr) {
  let newArr = [];
  for (const item in arr) {
    newArr.push(arr[item].toUpperCase());
  }
  return console.log(newArr.reverse());
}
// reverseAndCapitalize(countries);
