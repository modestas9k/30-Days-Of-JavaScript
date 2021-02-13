/* Visualize the ten most populated countries and the ten most spoken
 * languages in the world using DOM(HTML, CSS, JS).
 */

const mostPopulatedCountries = () => {
  let newArr = [];
  countries.forEach(({ name, population }) => {
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
  return newArr.slice(0, 11);
};

const mostSpokenLanguages = () => {
  let list = [];
  countries.forEach(({ languages }) => {
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
  return list.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 10);
};

/* header */

const subtitle = document.querySelector(".subtitle");
subtitle.innerHTML = `Currently, we have ${countries.length} countries`;

/* buttons */

const populationBtn = document.querySelector(".population");
populationBtn.onclick = () => {
  graphWrapper.innerHTML = "";
  graphTitle.innerHTML = "10 most populated <em>countries</em> in the world";
  displayGraph(mostPopulatedCountries());
};

const languageBtn = document.querySelector(".languages");
languageBtn.onclick = () => {
  graphWrapper.innerHTML = "";
  graphTitle.innerHTML = "10 most popular <em>languages</em> in the world";
  displayGraph(mostSpokenLanguages());
};

/* graph title */

const graphTitle = document.querySelector(".graph-title");

/* graph wrapper */

const graphWrapper = document.querySelector("#stat");

function displayGraph(arr) {
  const firstOne = arr[0].count;
  arr.forEach(({ name, count }) => {
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
    graphWrapper.append(newLine);
  });
}
