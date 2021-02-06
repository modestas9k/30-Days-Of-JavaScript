//
//// Exercise 1
//

// 1.1 Calculate the total annual income of the person from the following text.
//
const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

function calculateSalary(arr) {
  let [month, annualBonus, courseMoth] = arr.match(/\d+/g);
  return 12 * (Number(annualBonus) + Number(month)) + Number(courseMoth);
}
// console.log(calculateSalary(text));

// 1.2 The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative
// direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find
// the distance between the two furthest particles.
//
points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];

function findDistance(arr) {
  let negative = [];
  arr.forEach((i) => {
    if (i.match(/-\d+/g)) {
      negative.push(Number(i));
    }
  });
  negative.sort().reverse();
  let positive = [];
  arr.forEach((i) => {
    if (i.match(/^\d+/g)) {
      positive.push(Number(i));
    }
  });
  positive.sort();
  let newArr = [...negative, ...positive];
  let distance = positive[positive.length - 1] + Math.abs(negative[0]);
  return "Sorted points: " + newArr + "\nDistance: " + distance;
}
// console.log(findDistance(points));
// Sorted points: -4,-3,-1,-1,0,2,4,8
// Distance: 12

// 1.3 Write a pattern which identify if a string is a valid JavaScript variable.
//
function isValidVariable(v) {
  let myReg = /^[a-z_$]+[^\d-]/;
  let res = v.match(myReg);
  return res != null && res[0].length == v.length ? true : false;
}
// console.log(isValidVariable("first-name")); // false
// console.log(isValidVariable("_first_name")); // true

//
//// Exercise 2
//

// 2.1 Get the ten most frequent word from a string?
//
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function mostFrequentWords(string, slice) {
  let arrOfWords = string
    .replace(/[.,?!]/g, "")
    .toLowerCase()
    .split(" ");
  let wordSet = new Set(arrOfWords);
  let arrOfSet = [];
  wordSet.forEach((i) => {
    let count = arrOfWords.filter((filterItem) => filterItem == i);
    arrOfSet.push({ word: i, count: count.length });
  });
  arrOfSet.sort((a, b) => (a.count > b.count ? -1 : 1));
  if (slice) {
    return arrOfSet.slice(0, slice);
  } else {
    return arrOfSet;
  }
}
// console.log(mostFrequentWords(paragraph, 10));
// [ { word: "love", count: 6 }​
//  { word: "you", count: 5 }​
//  { word: "can", count: 3 }​
//  { word: "else", count: 2 }​
//  { word: "what", count: 2 }​
//  { word: "not", count: 2 }​
//  { word: "do", count: 2 }​
//  { word: "if", count: 2 }​
//  { word: "teaching", count: 2 }​
//  { word: "i", count: 2 } ]

//
//// Exercise 3
//
// 3.1 Write a function which cleans text. Clean the following text. After cleaning, count
// three most frequent words in the string.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(string) {
  let regex = /[%$@&#;]/g;
  return string.replace(regex, "");
}
// console.log(cleanText(sentence));

// console.log(mostFrequentWords(cleanText(sentence), 3));
// [ { word: "i", count: 3 }
// { word: "more", count: 2 }
// { word: "as", count: 2 } ]
