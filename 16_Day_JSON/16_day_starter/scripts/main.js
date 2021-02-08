// console.log(countries)

//
//// Exercise 1
//

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

// Change skills array, age, isMarried, student to JSON using JSON.stringify()
//
// console.log(JSON.stringify(skills));
// console.log(JSON.stringify(age));
// console.log(JSON.stringify(isMarried));
// console.log(JSON.stringify(student));

//
//// Exercise 2
//

// Stringify the students object with only firstName, lastName and skills properties
//
// console.log(JSON.stringify(student, ["firstName", "lastName", "skills"], 4));

//
//// Exercise 3
//

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
// 3.1 Parse the txt JSON to object.
//
// console.log(JSON.parse(txt));

// 3.2 Find the the user who has many skills from the variable stored in txt.
//
function findSkillsTheyHave(string) {
  const newArr = JSON.parse(string);
  let entries = Object.entries(newArr);
  return entries.reduce(({ name = "", count = 0 }, item) => {
    if (item[1].skills.length > count) {
      return { name: item[0], count: item[1].skills.length };
    }
    return name, count;
  });
}
// console.log(findSkillsTheyHave(txt));
