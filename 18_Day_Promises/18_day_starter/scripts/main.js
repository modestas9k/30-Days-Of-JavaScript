console.log(countries);

const countriesAPI = "https://restcountries.eu/rest/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

//
//// Exercise 1
//
// Read the countries API using fetch and print the name of country,
// capital, languages, population and area.
const fetchCountriesData = () => {
  fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
      let newArr = data.map((i) => {
        let lang = i.languages.map((j) => j.name).join(", ");
        return {
          country: i.name,
          capital: i.capital,
          languages: lang,
          population: i.population,
          area: i.area,
        };
      });
      return console.table(newArr);
    })
    .catch((err) => console.log(err));
};
// fetchCountriesData();

//
//// Exercise 2
//
// Print out all the cat names in to catNames variable.
//
let catNames = [];
const fetchCatsNames = () => {
  fetch(catsAPI)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((obj) => {
        catNames.push(obj.name);
      });
    })
    .catch((err) => console.log(err));
};
// console.log(fetchCatsNames());
// console.log(catNames);
// setTimeout(console.log(catNames), 200);

//
//// Exercise 3
//

// 3.1 Read the cats api and find the average weight of cat in metric unit.
//
let catsData;
const fetchCatsData = () => {
  fetch(catsAPI)
    .then((response) => response.json())
    .then((data) => {
      catsData = data;
      // console.log(catsData);
    })
    .catch((err) => console.log(err));
};
fetchCatsData();
const averageCatsWeight = async () => {
  let cats = await catsData;
  let weightArr = cats.map((i) => i.weight.metric);
  let average = weightArr.reduce((acc, cur) => {
    let num = cur.match(/\d+/g);
    let sum = (Number(num[0]) + Number(num[1])) / 2;
    return acc + sum;
  }, 0);
  average = Math.floor((average / weightArr.length) * 100) / 100;
  return console.log(average);
};

// setTimeout(averageCatsWeight, 1000); // 4.7

// 3.2 Read the countries api and find out the 10 largest countries.
//
let countriesData;
const fetchCountries = () => {
  fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => (countriesData = data));
};
fetchCountries();

const tenLargestCountries = () => {
  let countrySizes = [];
  countriesData.forEach((country) => {
    countrySizes.push({ country: country.name, area: country.area });
  });
  countrySizes.sort((a, b) => (a.area > b.area ? -1 : 1));
  return console.table(countrySizes.slice(0, 10));
};
// setTimeout(tenLargestCountries, 2000);

// 3.3 Read the countries api and count total number of languages
// in the world used as officials.
//
const countOfficialsLanguages = () => {
  let languages = [];
  countriesData.forEach((country) => languages.push(country.languages[0].name));
  let uniqueLanguages = new Set(languages);
  console.log(uniqueLanguages);
};
// setTimeout(countOfficialsLanguages, 2000); // Set(76) [ "Pashto", "Swedish", "Albanian", ... ]
