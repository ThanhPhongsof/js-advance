const cardsArray = [
  {
    name: "fire",
    img: "img/fire.png",
  },
  {
    name: "youtube",
    img: "img/youtube.png",
  },
  {
    name: "flash",
    img: "img/flash.png",
  },
  {
    name: "gift",
    img: "img/gift.png",
  },
  {
    name: "tron",
    img: "img/tron.png",
  },
  {
    name: "ufo",
    img: "img/ufo.png",
  },
  {
    name: "plant",
    img: "img/plant.png",
  },
  {
    name: "burger",
    img: "img/burger.png",
  },
];
let count = 0;
let previousClick;
let firstGuess = "";
let secondGuess = "";
const delay = 2000;
const grid = document.querySelector(".grid");

function handleGenerateCard() {
  grid.innerHTML = "";
  const cardsArrayMerge = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());

  cardsArrayMerge.forEach((item) => {
    const card = document.createElement("div");

    const front = document.createElement("div");
    front.classList.add("front");
    const back = document.createElement("div");
    back.classList.add("back");

    card.classList.add("card");
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);
  });
}

handleGenerateCard();
function handlMatchingCard() {
  const selects = document.querySelectorAll(".selected");
  [...selects].forEach((item) => item.classList.add("matched"));
}

function handleResetGuess() {
  count = 0;
  firstGuess = "";
  secondGuess = "";
  previousClick = null;
  const selects = document.querySelectorAll(".selected");
  const matchedAll = document.querySelectorAll(".matched");
  const cardLength = document.querySelectorAll(".card").length;
  [...selects].forEach((item) => item.classList.remove("selected"));
  if (matchedAll.length == cardLength) {
    setTimeout(
      matchedAll.forEach((item) => item.classList.remove("matched")),
      delay
    );
    setTimeout(handleGenerateCard, delay);
  }
}

grid.addEventListener("click", function (e) {
  const clicked = e.target;
  if (
    clicked.nodeName === "SECTION" ||
    previousClick === clicked ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("matched")
  )
    return;

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(handlMatchingCard, delay);
      }
      setTimeout(handleResetGuess, delay);
    }
    previousClick = clicked;
  }
});
