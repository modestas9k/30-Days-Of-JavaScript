console.log(countries);

const constants = [2.72, 3.14, 9.81, 37, 100];
const fiveCountries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//
//// Exercise 1
//

// 1. Destructure and assign the elements of constants array to e, pi, gravity,
// humanBodyTemp, waterBoilingTemp.
//
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp); // 2.72 3.14 9.81 37 100

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor.
//
const [fin, est, sw, den, nor] = fiveCountries;
// console.log(fin, est, sw, den, nor);

// 3. Destructure the rectangle object by its properties or keys.
//
const { perimeter, width, height, area } = rectangle;
// console.log(width, height); // 20 10

//
//// Exercise 2
//

// 1. Iterate through the users array and get all the keys of the object
// using destructuring.
//
function getAllKeys(arr) {
  let newArr = [];
  arr.forEach((obj) => {
    let objArr = Object.entries(obj);
    let keyArr = [];
    for (let [key] of objArr) {
      keyArr.push(key);
    }
    newArr.push(keyArr);
  });
  return newArr;
}
// console.log(getAllKeys(users)); // [ [ "name", "scores", "skills", … ], ... ]

// 2. Find the persons who have less than two skills.
//
function findNotSkilledPerson(arr) {
  let persons = [];
  arr.forEach(({ name, skills }) => {
    if (skills.length < 2) {
      persons.push(name);
    }
  });
  return persons;
}
// console.log(findNotSkilledPerson(users)); // [ "John" ]

//
//// Exercise 3
//

// 3.1 Destructure the countries object print name, capital, population and
// languages of all countries.
//
function captionOfCountries(arr) {
  return arr.map(({ name, capital, population, languages }) => {
    return `${name}, ${capital}, ${population}, ${languages}`;
  });
}
// console.log(captionOfCountries(countries));

// 3.2 A junior developer structure student name, skills and score in array of arrays which
// may not easy to read. Destructure the following array name to name, skills array to
// skills, scores array to scores, JavaScript score to jsScore and React score to
// reactScore variable in one line.
//
//const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

//let [studName, skills, [, , jsScore, reactScore]] = student;
// console.log(studName, skills, jsScore, reactScore); // David (4) [ "HTM", "CSS", "JS", "React" ] 90 95

// 3.3 Convert the array to a structure object.
//
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => {
    return {
      name: name,
      skills: skills,
      scores: scores,
    };
  });
}
// console.log(convertArrayToObject(students));

// 3.4 Copy the student object to newStudent without mutating the original object.
// In the new object add the following ?
//
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
//
const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

let newStudent = { ...student };
let {
  skills: { frontEnd, backEnd, dataBase, dataScience },
} = newStudent;
frontEnd.push({ skill: "Bootstrap", level: 8 });
backEnd.push({ skill: "Express", level: 9 });
dataBase.push({ skill: "SQL", level: 8 });
dataScience.push("SQL");
// console.log(newStudent);
