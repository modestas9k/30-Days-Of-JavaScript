/* Exercise 3 */

/* Header */

const challengeYear = document.createElement("span");
challengeYear.innerText = asabenehChallenges2020.challengeYear;
challengeYear.style.display = "inline-block";
challengeYear.style.fontSize = "48px";
challengeYear.style.marginLeft = "5px";
challengeYear.style.fontWeight = "500";

const challengeTitle = document.createElement("h1");
challengeTitle.innerText = asabenehChallenges2020.challengeTitle;
challengeTitle.style.fontSize = "24px";

const challengeSubtitle = document.createElement("h2");
challengeSubtitle.innerText = asabenehChallenges2020.challengeSubtitle;
challengeSubtitle.style.fontSize = "18px";
challengeSubtitle.style.fontWeight = "300";
challengeSubtitle.style.textDecoration = "underline";
challengeSubtitle.style.marginBottom = "0";

const counter = document.createElement("div");
counter.innerHTML = "February 10, 2021";
counter.style.padding = "10px";
counter.style.margin = "20px";
counter.style.background = "green";
counter.style.display = "inline-block";

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function minTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}

const colorChanger = setInterval(() => {
  counter.style.background = randomHexColor();
  challengeYear.style.color = randomHexColor();
}, 1000);

const time = setInterval(() => {
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const day = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  counter.innerText =
    month +
    " " +
    minTwoDigits(day) +
    ", " +
    year +
    " " +
    minTwoDigits(hour) +
    ":" +
    minTwoDigits(minutes) +
    ":" +
    minTwoDigits(seconds);
}, 1000);

const wrapper = document.querySelector(".wrapper");
wrapper.style.textAlign = "center";
wrapper.style.margin = "3em auto";
wrapper.style.maxWidth = "760px";
wrapper.style.fontFamily = "Helvetica";

wrapper.appendChild(challengeTitle);
challengeTitle.appendChild(challengeYear);
wrapper.append(challengeSubtitle, counter);

/* Table of Challenges */

asabenehChallenges2020.challenges.forEach((obj) => {
  let challengeBox = document.createElement("div");
  challengeBox.style.background = "#eee";
  challengeBox.style.padding = "15px";
  challengeBox.style.marginBottom = "3px";
  challengeBox.style.display = "flex";
  challengeBox.style.justifyContent = "space-between";

  let name = document.createElement("span");
  name.innerText = obj.name;

  let details = document.createElement("details");
  let summary = document.createElement("summary");
  let nameSplit = obj.name.split("Of");
  summary.innerText = nameSplit[1];
  details.append(summary);

  obj.topics.forEach((item) => {
    let h5 = document.createElement("h5");
    h5.innerText = item;
    h5.style.textAlign = "left";
    details.append(h5);
  });

  let status = document.createElement("span");
  status.innerText = obj.status;

  if (status.innerText === "Done") {
    challengeBox.style.background = "#07ba3a";
  }
  if (status.innerText === "Ongoing") {
    challengeBox.style.background = "#deca33";
  }
  if (status.innerText === "Coming") {
    challengeBox.style.background = "#f75959";
  }

  challengeBox.append(name, details, status);
  wrapper.appendChild(challengeBox);
});

/* About Author */

const authorFullName = document.createElement("h2");
authorFullName.innerText =
  asabenehChallenges2020.author.firstName +
  " " +
  asabenehChallenges2020.author.lastName;

const linksBox = document.createElement("div");
asabenehChallenges2020.author.socialLinks.forEach((obj) => {
  let link = document.createElement("a");
  link.innerText = obj.social;
  link.href = obj.url;
  link.target = "blank_";
  link.style.margin = "0 10px";
  linksBox.append(link);
});

const authorBio = document.createElement("p");
authorBio.innerText = asabenehChallenges2020.author.bio;
authorBio.style.fontSize = "14px";

/* Titles - Skills - Qualifications */

const skillsWrapper = document.createElement("div");
skillsWrapper.style.display = "flex";
skillsWrapper.style.textAlign = "left";
skillsWrapper.style.justifyContent = "space-between";
skillsWrapper.style.margin = "2em auto";

/* Titles */
const titlesBox = document.createElement("div");

const titleHead = document.createElement("h4");
titleHead.innerText = "Titles";
titleHead.style.margin = "5px";
titlesBox.append(titleHead);

asabenehChallenges2020.author.titles.forEach(([img, title]) => {
  let name = document.createElement("h5");
  name.style.margin = "5px";
  name.style.fontWeight = "400";
  name.innerText = img + " " + title;
  titlesBox.append(name);
});
skillsWrapper.append(titlesBox);

/* Skills */
const skillsBox = document.createElement("div");

const skillsHead = document.createElement("h4");
skillsHead.innerText = "Skills";
skillsHead.style.margin = "5px";
skillsBox.append(skillsHead);

asabenehChallenges2020.author.skills.forEach((item) => {
  const name = document.createElement("h5");
  name.style.fontWeight = "400";
  name.style.margin = "5px";
  name.innerText = item;
  skillsBox.append(name);
});
skillsWrapper.append(skillsBox);

/* Qualifications */
const qualBox = document.createElement("div");

const qualHead = document.createElement("h4");
qualHead.innerText = "Titles";
qualHead.style.margin = "5px";
qualBox.append(qualHead);

asabenehChallenges2020.author.qualifications.forEach((title) => {
  let name = document.createElement("h5");
  name.style.margin = "5px";
  name.style.fontWeight = "400";
  name.innerText = title;
  qualBox.append(name);
});
skillsWrapper.append(qualBox);

/* keywords */

const keyBox = document.createElement("div");
keyBox.style.display = "flex";
keyBox.style.flexWrap = "wrap";

const keyHead = document.createElement("h4");
keyHead.innerText = "Keywords";
keyHead.style.display = "inline-block";
keyHead.style.margin = "5px";
keyBox.append(keyHead);

asabenehChallenges2020.keywords.forEach((key) => {
  const span = document.createElement("span");
  span.innerText = `# ${key}`;
  span.style.fontSize = "14px";
  span.style.background = randomHexColor();
  span.style.borderRadius = "15px";
  span.style.padding = "5px";
  span.style.margin = "5px";

  keyBox.append(span);
});

wrapper.append(authorFullName, linksBox, authorBio, skillsWrapper, keyBox);
