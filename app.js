const cardArray = [
  {
    name: "burger",
    img: "images/burger.jpg",
  },
  {
    name: "chicken",
    img: "images/chicken.jpg",
  },
  {
    name: "pieCake",
    img: "images/pieCake.jpg",
  },
  {
    name: "sandvich",
    img: "images/sandvich.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "steak",
    img: "images/steak.jpg",
  },
  {
    name: "burger",
    img: "images/burger.jpg",
  },
  {
    name: "chicken",
    img: "images/chicken.jpg",
  },
  {
    name: "pieCake",
    img: "images/pieCake.jpg",
  },
  {
    name: "sandvich",
    img: "images/sandvich.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "steak",
    img: "images/steak.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#score");
console.log(resultDisplay);

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function cardBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/pig.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

cardBoard();

function checkMath() {
  const cards = document.querySelectorAll("img");
  console.log(cards);

  if (cardsChosen[0] === cardsChosen[1]) {
    alert("already mathc");
    cards[cardsChosenIds[0]].setAttribute("src", "images/win.jpg");
    cards[cardsChosenIds[1]].setAttribute("src", "images/win.jpg");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
    resultDisplay.textContent = cardsWon.length;
  } else {
    cards[cardsChosenIds[0]].setAttribute("src", "images/pig.jpg");
    cards[cardsChosenIds[1]].setAttribute("src", "images/pig.jpg");
    alert("sorry try again");
  }
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "congratualations you find them all!";
  }
}

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length == 2) {
    setTimeout(checkMath, 500);
  }
}
