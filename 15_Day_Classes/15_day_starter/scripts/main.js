class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    console.log(this);
    return info;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    console.log("hi");
    return skills[index];
  }
}

// console.log(Person.favoriteSkill());

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    console.log(this);
    return info;
  }
}

const s1 = new Student(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki",
  "Male"
);
const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
s1.setScore = 1;
s1.setSkill = "HTML";
s1.setSkill = "CSS";
s1.setSkill = "JavaScript";

s2.setScore = 1;
s2.setSkill = "Planning";
s2.setSkill = "Managing";
s2.setSkill = "Organizing";

// console.log(s1)
// console.log(s2)

// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getPersonInfo())

// console.log(s2.saySomething())
// console.log(s2.getFullName())
// console.log(s2.getPersonInfo())

//
//// Exercise 1
//
// 1.1 Create an Animal class. The class will have name, age, color, legs
// properties and create different methods.
//
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  makeSound() {
    return "Rarrr";
  }
  getInfo() {
    return `${this.name}, ${this.age}, ${this.color}, ${this.length}`;
  }
}

// 1.2 Create a Dog and Cat child class from the Animal Class.
// 2.1 Override the method you create in Animal class.
class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }
  saySomething() {
    return "I am dog...";
  }
  getInfo() {
    return `${this.name} is dog, ${this.age} age, ${this.color} with ${this.legs} legs`;
  }
}
class Cat extends Animal {
  saySomething() {
    return "I am cat...";
  }
}
const dog = new Dog("Tita", 8, "white and black", 4);
// console.table(dog);
// console.log(dog.saySomething());
// console.log(dog.makeSound());
// console.log(dog.getInfo());

ages = [
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
//
//// Exercise 3
//
// 3.1 Let's try to develop a program which calculate measure of central tendency
// of a sample(mean, median, mode) and measure of variability(range, variance,
// standard deviation).In addition to those measures find the min, max, count,
// percentile, and frequency distribution of the sample.You can create a class
// called Statistics and create all the functions which do statistical
// calculations as method for the Statistics class.
//

class Statistics {
  constructor(ages) {
    this.ages = ages;
  }
  count() {
    return this.ages.length;
  }
  sum() {
    return this.ages.reduce((acc, num) => acc + num);
  }
  min() {
    return Math.min(...this.ages);
  }
  max() {
    return Math.max(...this.ages);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  median() {
    this.ages.sort();
    // let middle = Math.round(this.count() / 2);
    // console.log(middle);
    if (this.count() % 2 == 0) {
      console.log(this.count() / 2);
      let sum = this.ages[this.count() / 2] + this.ages[this.count() / 2 + 1];
      return sum / 2;
    } else {
      return this.ages[Math.round(this.count() / 2) - 1];
    }
  }
  mode() {
    return this.ages.reduce(({ mode = 0, count = 0 }, num) => {
      let newArr = this.ages.filter((i) => i == num);
      if (newArr.length > count) {
        return { mode: num, count: newArr.length };
      }
      return mode, count;
    });
  }
  variance() {
    let sumOfVariance = this.ages.reduce((acc, num) => {
      let varian = num - this.median();
      varian *= varian;
      return acc + varian;
    });
    return sumOfVariance / this.count();
  }
  standardDeviation() {
    return Math.round(Math.sqrt(this.variance()) * 100) / 100;
  }
  freqDist() {
    let newArr = [];
    this.ages.forEach((num) => {
      let sameNumArr = this.ages.filter((i) => i == num);
      let percent = (sameNumArr.length * 100) / this.ages.length;
      if (!newArr.find((i) => i[1] == num)) {
        newArr.push([percent, num]);
      }
    });
    newArr.sort((a, b) => (a[0] > b[0] ? -1 : 1));
    return newArr.map(([percent, num]) => {
      return `(${percent}.0, ${num})`;
    });
  }
}
const agesWithClass = new Statistics(ages);
// console.log(agesWithClass.count()); // 25
// console.log(agesWithClass.sum()); //// 744
// console.log(agesWithClass.min()); //// 24
// console.log(agesWithClass.max()); //// 38
// console.log(agesWithClass.range()); // 14
// console.log(agesWithClass.mean()); /// 30
// console.log(agesWithClass.median()); // 29
// console.log(agesWithClass.mode()); // { mode: 26, count: 5 }
// console.log(agesWithClass.variance()); // 17.72
// console.log(agesWithClass.standardDeviation()); // 4.25
// console.log(agesWithClass.freqDist()); // [ "(20.0, 26)", "(16.0, 27)", ... ]
