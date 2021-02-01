//console.log(countries)

//
//// Exercise 1
//

// 1.
//
const dog = {};

// 2.
//
// console.log(dog);

// 3.
//
dog.name = "Tita";
dog.legs = 4;
dog.color = "White and black";
dog.bark = function () {
  return "Woof woof";
};
// console.log(dog);

// 4.
//
// console.log(Object.values(dog));

// 5.
//
dog.breed = "Trobsikis";
dog.getDogInfo = function () {
  return `${this.name} is ${this.color} ${this.breed}`;
};
// console.log(dog.getDogInfo());

//
//// Exercise 2
//

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// 1. Find the person who has many skills in the users object.
//
// console.log(users.Asab.skills);

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
//
function countLoggedInUsers() {
  let loggedInUsers = [];
  const entries = Object.entries(users);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1].isLoggedIn === true) {
      loggedInUsers.push(entries[i][0]);
    }
  }
  return loggedInUsers;
}
// console.log(countLoggedInUsers()); // [ "Brook", "John" ]

function countUsersPoints() {
  let bestUsers = [];
  const entries = Object.entries(users);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1].points >= 50) {
      bestUsers.push(entries[i][0]);
    }
  }
  return bestUsers;
}
// console.log(countUsersPoints()); // [ "Asab", "Brook", "John" ]

// 3. Find people who are MERN stack developer from the users object.
//
function findMernDev() {
  let mern = [];
  const entries = Object.entries(users);
  for (let i = 0; i < entries.length; i++) {
    if (
      entries[i][1].skills.includes("MongoDB" && "Express" && "React" && "Node")
    ) {
      mern.push(entries[i][0]);
    }
  }
  return mern;
}
// console.log(findMernDev()); // [ "Asab", "Paul" ]

// 4. Set your name in the users object without modifying the original users object.
//
//const newUsers = Object.assign({}, users);
//newUsers.Modestas = { age: 27 };
// console.log(newUsers);

// 5. Get all keys or properties of users object.
//
function getAllKeys(arr) {
  let entries = Object.entries(arr);
  let arrOfKeys = [];
  for (const item in entries) {
    arrOfKeys.push([entries[item][0], Object.keys(entries[item][1])]);
  }
  return arrOfKeys;
}
// console.log(getAllKeys(users)); // [ ["Alex", [ "email", "skills", "age", ...] ], ... ]

// 6. Get all the values of users object.
//
function getAllValues(arr) {
  let entries = Object.entries(arr);
  let arrOfValues = [];
  for (const item in entries) {
    arrOfValues.push([entries[item][0], Object.values(entries[item][1])]);
  }
  return arrOfValues;
}
// console.log(getAllValues(users)); // [ ["Alex", [ "alex@alex.com", ["HTML", "CSS", "JavaScript"], 20, ...] ], ... ]

// 7. Use the countries object to print a country name, capital, populations and languages.
//
function printCountries(arr) {
  for (const item in Object.keys(arr)) {
    console.log(
      `${arr[item].name} - capital: ${arr[item].capital}, \nPopulation: ${arr[item].population}, \nLanguages: ${arr[item].languages}`
    );
  }
}
// console.log(printCountries(countries));
// ...
// Yemen - capital: Sana'a,
// Population: 27478000,
// Languages: Arabic
// ...

//
//// Exercise 3
//

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes,
// expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
// addExpense and accountBalance methods. Incomes is a set of incomes and its
// description and expenses is a set of incomes and its description.
//
const personAccount = {
  firstName: "",
  lastName: "",
  incomes: {
    totalIncome: 0,
    addIncome: function () {},
  },
  expenses: {
    totalExpenses: 0,
    addExpense: function () {},
  },
  accountInfo: function () {},
  accountBalance: function () {},
};
// console.log(personAccount.incomes.addIncome(2));

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 2.)
//
// a. Create a function called signUp which allows user to add to the collection.
// If user exists, inform the user that he has already an account.
//
function signUp(user) {
  let collection = Object.entries(users);

  if (
    user._id.length != 0 &&
    user.username.length >= 3 &&
    user.password.length >= 3
  ) {
    for (const index in collection) {
      if (collection[index][1]._id === user._id) {
        return "You are already registered";
      }
    }
    users.push(user);
  } else {
    return "Something is missing!";
  }
}
// console.log(signUp({ _id: 2324, username: "Mode", password: "labas" }));
// console.log(users);

// b. Create a function called signIn which allows user to sign in to the application.
//
function signIn(user) {
  let collection = Object.entries(users);

  if (
    user._id.length != "" &&
    user.username.length >= 3 &&
    user.password.length >= 3
  ) {
    for (const index in collection) {
      if (collection[index][1]._id === user._id) {
        if (
          collection[index][1].username === user.username &&
          collection[index][1].password === user.password
        ) {
          return "Good to go";
        }
        return "Wrong username or password";
      }
    }
  } else {
    return "Something is missing!";
  }
}
// console.log(signIn(users[9]));

// 3. The products array has three elements and each of them has six properties.
//
// a. Create a function called rateProduct which rates the product.
//
// function rateProduct(prodName, userId, rate) {
//   let entries = Object.entries(products);
//   let product = 0;
//   for (const index in entries) {

//   }

// }
// console.log(rateProduct("Laptop", "fg12cy", 5));
