/* class */
class Player {
  constructor(firstName, lastName, country, score, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.score = score;
    this.date = date;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
  addScore() {
    this.score += 5;
  }
  removeScore() {
    this.score -= 5;
  }
}

let playersFolder = [];
playersFolder.push(
  new Player("Yohanes", "Martha", "finland", 85, "2021 m. vasario 18 d. 08:05")
);

/* form */

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let date = new Date();
  let newPlayer = new Player(
    e.target.firstName.value,
    e.target.lastName.value,
    e.target.country.value,
    Number(e.target.score.value),
    date.toLocaleString("lt-LT", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    })
  );
  playersFolder = [...playersFolder, newPlayer];
  loopPlayers(playersFolder);
});

/* view players */

const playersWrapper = document.querySelector(".players-wrapper");

function loopPlayers(players) {
  playersWrapper.innerHTML = "";
  players.forEach((player, index) => {
    let div = document.createElement("div");
    div.className = "player-line";

    let nameBlock = document.createElement("div");
    nameBlock.className = "name-block";
    let fullName = document.createElement("span");
    fullName.innerHTML = player.fullName().toUpperCase();
    let dateSpan = document.createElement("span");
    dateSpan.innerHTML = player.date;

    nameBlock.append(fullName, dateSpan);

    let countrySpan = document.createElement("span");
    countrySpan.innerHTML = player.country.toUpperCase();
    let scoreSpan = document.createElement("span");
    scoreSpan.innerHTML = player.score;

    let btnDelete = document.createElement("button");
    btnDelete.innerText = "X";
    btnDelete.onclick = () => deletePlayer(index);

    let btnAdd = document.createElement("button");
    btnAdd.innerText = "+5";
    btnAdd.onclick = () => {
      player.addScore();
      loopPlayers(playersFolder);
    };

    let btnRemove = document.createElement("button");
    btnRemove.innerText = "-5";
    btnRemove.onclick = () => {
      player.removeScore();
      loopPlayers(playersFolder);
    };

    let controls = document.createElement("div");
    controls.append(btnDelete, btnRemove, btnAdd);

    let checkForBetterScore = players.filter((p) => p.score > player.score);

    div.append(nameBlock, countrySpan, scoreSpan, controls);

    if (checkForBetterScore != "") {
      playersWrapper.append(div);
    } else {
      playersWrapper.prepend(div);
    }
  });
}
loopPlayers(playersFolder);

function deletePlayer(playerIndex) {
  playersFolder = playersFolder.filter((player, index) => {
    return index != playerIndex;
  });
  loopPlayers(playersFolder);
}
