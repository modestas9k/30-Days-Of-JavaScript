/* search buttons */

let activeButton = {
  name: {
    active: true,
    defaultSort: true,
  },
  capital: {
    active: false,
    defaultSort: true,
  },
};

const nameBtn = document.querySelector("#name-btn");
nameBtn.classList = "btn-active";
nameBtn.onclick = () => {
  activeButton.name.active = true;
  activeButton.capital.active = false;
  activeButton.name.defaultSort = !activeButton.name.defaultSort;
  nameBtn.classList = "btn-active";
  capitalBtn.classList = "";
  searchBy("name");
};
const capitalBtn = document.querySelector("#capital-btn");
capitalBtn.classList = activeButton.capital.active ? "btn-active" : "";
capitalBtn.onclick = () => {
  activeButton.capital.active = true;
  activeButton.name.active = false;
  activeButton.capital.defaultSort = !activeButton.capital.defaultSort;
  capitalBtn.classList = "btn-active";
  nameBtn.classList = "";
  searchBy("capital");
};

/* search */

const search = document.querySelector("#search");
search.addEventListener("keyup", () => {
  if (activeButton.name.active) {
    searchBy("name");
  }
  if (activeButton.capital.active) {
    searchBy("capital");
  }
});

const searchResult = document.querySelector(".search-result");

let countriesFolder = []; // hold filtered countries

function searchBy(searchBy) {
  searchResult.innerHTML = "";
  let newArr = [];
  countries.forEach((country) => {
    if (
      country[searchBy].toLowerCase().startsWith(search.value.toLowerCase())
    ) {
      newArr.push(country);
    }
  });
  newArr.forEach((country) => {
    let box = document.createElement("div");
    box.className = "country-box";

    let flag = document.createElement("img");
    flag.src = country.flag;

    let name = document.createElement("h3");
    name.innerText = country.name;

    let capital = document.createElement("p");
    capital.innerText = "Capital: " + country.capital;

    let languages = document.createElement("p");
    languages.innerText = "Languages: " + country.languages.join(", ");

    let population = document.createElement("p");
    population.innerText = "Population: " + country.population.toLocaleString();

    box.append(flag, name, capital, languages, population);

    if (activeButton[searchBy].defaultSort) {
      searchResult.append(box);
    } else {
      searchResult.prepend(box);
    }
  });
  countriesFolder = newArr;
  displayGraph();
}

/* second section - graph of population and languages */

function mostPopulatedCountries(arr) {
  let newArr = [];
  arr.forEach(({ name, population }) => {
    if (name == "United States of America") {
      name = "USA";
    }
    newArr.push({ name, count: population });
  });
  let world = countries.reduce((acc, obj) => {
    return acc + obj.population;
  }, 0);
  newArr.push({ name: "World", count: world });
  newArr.sort((a, b) => (a.count > b.count ? -1 : 1));
  return newArr;
}

function mostSpokenLanguages(arr) {
  let list = [];
  arr.forEach(({ languages }) => {
    for (const lang of languages) {
      const listIndex = list.findIndex((i) => i.name == lang);
      if (listIndex == -1) {
        list.push({ name: lang, count: 1 });
      }
      if (listIndex >= 0) {
        list[listIndex].count++;
      }
    }
  });
  return list.sort((a, b) => (a.count > b.count ? -1 : 1));
}

/* graph buttons */
let showPopulation = true;

const populationBtn = document.querySelector("#population-btn");
populationBtn.onclick = () => {
  showPopulation = true;
  displayGraph();
};

const languageBtn = document.querySelector("#language-btn");
languageBtn.onclick = () => {
  showPopulation = false;
  displayGraph();
};

/* display graph */

const graphSelected = document.querySelector("#graph-selected");
const graphBody = document.querySelector("#graph-body");

function displayGraph() {
  graphBody.innerHTML = "";
  let newArr = [];
  if (showPopulation) {
    newArr = mostPopulatedCountries(countriesFolder);
    graphSelected.innerHTML = `${countriesFolder.length} countries listed by population`;
  } else {
    newArr = mostSpokenLanguages(countriesFolder);
    graphSelected.innerHTML = `${countriesFolder.length} countries listed by languages`;
  }

  const firstOne = newArr[0].count;
  newArr.forEach(({ name, count }) => {
    let newLine = document.createElement("div");
    newLine.className = "graph-line";

    let titleAndBar = document.createElement("div");
    titleAndBar.className = "graph-name-and-bar";
    let title = document.createElement("span");
    title.innerText = name;
    title.className = "graph-name";

    let percent = (100 * count) / firstOne;
    let bar = document.createElement("titleAndBar");
    bar.className = "graph-bar";
    bar.style.width = percent.toFixed(2) + "%";

    let countSpan = document.createElement("span");
    countSpan.className = "graph-count";
    countSpan.innerText = count.toLocaleString();

    titleAndBar.append(title, bar);
    newLine.append(titleAndBar, countSpan);
    graphBody.append(newLine);
  });
}
