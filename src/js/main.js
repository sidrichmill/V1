// import "./../scss/main.scss";

//------------------------------------------------------------------------
const dispatch = e => document.dispatchEvent(new Event(e));
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const listen = (obj, event, callback) => {
  obj = typeof obj === "string" ? select(obj) : obj;
  obj.addEventListener(event, callback);
};

const listenAll = (objs, event, callback) => {
  objs = typeof objs === "string" ? selectAll(objs) : objs;
  for (const obj of objs) {
    listen(obj, event, callback);
  }
};
//------------------------------------------------------------------------
var animationDelay = 2500;
var introList = document.querySelectorAll(".intro b");
var intro = Array.from(introList);
animateText(intro);

function animateText() {
  setTimeout(function () {
    hideWord(document.querySelector(".is-visible"));
  }, animationDelay);
}

function hideWord(word) {
  var nextWord = takeNext(word);
  switchWord(word, nextWord);
  setTimeout(function () {
    hideWord(nextWord);
  }, animationDelay);
}

function takeNext(word) {
  if (word === word.parentNode.lastElementChild) {
    return intro[0];
  } else {
    var wordIndex = intro.indexOf(word);
    return intro[wordIndex + 1];
  }
}

function switchWord(oldWord, newWord) {
  oldWord.classList.remove("is-visible");
  oldWord.classList.add("is-hidden");
  newWord.classList.remove("is-hidden");
  newWord.classList.add("is-visible");
}

//----------------------------------------------------------------------------

var drawer = document.querySelectorAll(".drawer");
var asides = Array.from(drawer);
var grid = document.querySelectorAll(".cell");
var cells = Array.from(grid);

cells.forEach(toggleAside);

function toggleAside(el, i) {
  var aside = asides[i];
  //   el.addEventListener("click", function () {
  //     var aside = asides[i];
  //     aside.classList.toggle("drawer--closed");
  listen(el, "click", () => {
    var aside = asides[i];
    aside.classList.toggle("drawer--closed");
  });
  listen(aside, "click", (e) => {
    aside.classList.add("drawer--closed");
    console.log(e.target);
  });
}
