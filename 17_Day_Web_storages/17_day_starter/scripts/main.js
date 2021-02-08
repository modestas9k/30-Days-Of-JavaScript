//
//// Exercise 1
//
// 1. Store you first name, last name, age, country, city in your browser localStorage.
//
const me = {
  firstName: "Mode",
  lastName: "Ski",
  age: 27,
  country: "Lithuania",
  city: "Taurage",
};
const meStringed = JSON.stringify(me);
// window.localStorage.setItem("me", meStringed);

//
//// Exercise 2
//
// Create a student object. The student object will have first name, last name,
// age, skills, country, enrolled keys and values for the keys.Store the student
// object in your browser localStorage.
//
const student = {
  firstName: "Alex",
  lastName: "Brook",
  age: 250,
  country: "Lithuania",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
// window.localStorage.setItem("Alex", student);
