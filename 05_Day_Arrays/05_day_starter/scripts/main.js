//
//// Exercise 1
//

// 1. Declare an empty array;
let arr = Array();

// 2. Declare an array with more than 5 number of elements.
arr = Array(5).fill("x");

// 3. Find the length of your array.
//console.log(arr.length);

// 4. Get the first item, the middle item and the last item of the array.
//

// console.log(webTechs[0]);
// console.log(webTechs[5]);
// console.log(webTechs[webTechs.length - 1]);

// 5.
//

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// console.log(itCompanies.length);
// console.log(
//   itCompanies[0],
//   itCompanies[4],
//   itCompanies[itCompanies.length - 1]
// );

// 10. Print out each company.
//

//console.log(itCompanies.join(", ").toString());

// 11. Change each company name to uppercase.
//

//console.log(itCompanies.join(", ").toString().toUpperCase());

// 12. Print the array like as a sentence.
//

let array = itCompanies.slice(0, itCompanies.length - 1);
let sentence = `${array.join(
  ", "
)} and ${itCompanies.pop()} are big IT companies.`;
// console.log(sentence);

// 13. Check if a certain company exists in the itCompanies array. If it
// exist return the company else return a company is not found.

function checkIf(name) {
  if (itCompanies.includes(name)) {
    return console.log(name);
  } else {
    return console.log("company is not found");
  }
}
// checkIf("IBM");

// 14. Filter out companies which have more than one 'o' without
// the filter method.

function filterCompanies(letter) {
  let newArr = [];
  for (let i = 0; i < itCompanies.length; i++) {
    let word = itCompanies[i].split("");
    let count = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[j] == letter) {
        count++;
      }
    }
    if (count >= 2) {
      newArr.push(itCompanies[i]);
    }
  }
  return console.log(newArr);
}
//filterCompanies("o");

// 15, 16, 17, 18, 19, 20
//

// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log(itCompanies.slice(3));
// console.log(itCompanies.slice(0, 4));
// console.log(itCompanies.slice(3, 4));
// console.log(itCompanies.shift());

//
//// exercise 2
//

// 1
//

// console.log(countries);
// console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and
// count the number of words in the array.

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const myRedux = /[,\.]/;
let words = text.replace(myRedux, "").split(" ");
// console.log(words);
// console.log(words.length);

// 3. In the following shopping cart add, remove, edit items.
//

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";
// console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.

function checkIfExist(name) {
  if (countries.includes(name)) {
    return console.log(name.toUpperCase());
  } else {
    countries.push(name);
    console.log(countries);
  }
}
// checkIfExist("Ethiopia");

// 5.
//

function checkAndAdd(name) {
  if (webTechs.includes(name)) {
    return console.log(`${name} is a CSS preprocess`);
  } else {
    webTechs.push(name);
    return console.log(webTechs);
  }
}
// checkAndAdd("Sass");

// 6. Concatenate the following two variables and store it in a fullStack variable.
//

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);

//
//// Exercise 3
//

// 1.
//

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
let min = ages[0];
let max = ages[ages.length - 1];
let length = ages.length;

function averageAge(ages) {
  let count = 0;
  for (let i = 0; i < ages.length; i++) {
    count += ages[i];
  }
  return console.log(count / ages.length);
}
// averageAge(ages);

// console.log(`min and max range :  ${max - min} year`);

function difference(a, b) {
  return Math.round(Math.abs(a - b) * 10) / 10;
}
let minAw = 22.8 - 19;
// console.log(difference(22.8, 19));
// console.log(difference(22.8, 26));

//console.log(countries.slice(0, 10));

// 2. Find the middle country(ies) in the countries array.
//

function findMiddle(array) {
  if (Array.isArray(array) && array.length > 0) {
    let mid = array[Math.round((array.length - 1) / 2)];
    if (array.length == 2) {
      console.log(array[0], array[1]);
    } else if (mid % 3 == 0 && array.length % 3 == 0) {
      console.log(array[mid - 1]);
    } else if (array.length % 2 == 0) {
      console.log(array[mid - 2], array[mid - 1]);
    } else {
      console.log(mid);
    }
  } else {
    console.log("I need a not empty array.");
  }
}
// findMiddle(["1s", "2s", "3s", 4, "55", 666]);

// 3. Divide the countries array into two equal arrays if it is
// even. If countries array is not even , one more country for the first half.

function divideArray(arr) {
  const mid = arr.length / 2;
  if (!arr.length % 2) {
    let firstArr = arr.slice(0, mid);
    let secondArr = arr.slice(mid, arr.length);
    console.log([firstArr, secondArr]);
  } else if (arr.length % 2) {
    let firstArr = arr.slice(0, mid + 1);
    let secondArr = arr.slice(mid + 1, arr.length);
    console.log([firstArr, secondArr]);
  } else {
    console.log("I need array.");
  }
}
// divideArray(countries);
