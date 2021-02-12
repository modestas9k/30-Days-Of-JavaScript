/* Visualize the ten most populated countries and the ten most spoken
 * languages in the world using DOM(HTML, CSS, JS).
 */

function mostPopulatedCountries() {
  let newArr = [];
  countries.forEach(({ name, population }) =>
    newArr.push({ name, population })
  );
  let world = countries.reduce((acc, obj) => {
    return acc + obj.population;
  }, 0);
  newArr.push({ name: "World", population: world });
  newArr.sort((a, b) => (a.population > b.population ? -1 : 1));
  return newArr.slice(0, 11);
}
// console.log(mostPopulatedCountries());

function mostSpokenLanguages() {
  let list = [];
  countries.forEach(({ languages }) => {
    for (const lang of languages) {
      const listIndex = list.findIndex((i) => i.language == lang);
      if (listIndex == -1) {
        list.push({ language: lang, count: 1 });
      }
      if (listIndex >= 0) {
        list[listIndex].count++;
      }
    }
  });
  return list.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 10);
}
// console.log(mostSpokenLanguages());

/* header */

const subtitle = document.querySelector(".subtitle");
subtitle.innerHTML = `Currently, we have ${countries.length} countries`;

const graphTitle = document.querySelector(".graph-title");

/* buttons */

const populationBtn = document.querySelector(".population");
console.log(populationBtn);
populationBtn.onclick = () => {
  graphTitle.innerHTML = "10 most populated <em>countries</em> in the world";
};

const languageBtn = document.querySelector(".languages");
languageBtn.onclick = () => {
  graphTitle.innerHTML = "10 most popular <em>languages</em> in the world";
};
