const h1Element = document.querySelector("h1");
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

// const randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
// const randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
}

function randomDiceImage(number) {
  return "dice" + number + ".png"; // Returns the image file name based on the random number
}
const randomNumber1 = generateRandomNumber();
const randomNumber2 = generateRandomNumber();

// set image sources
function changeImageOnReload() {
  const randomImageSource1 = "./images/" + randomDiceImage(randomNumber1);
  const randomImageSource2 = "./images/" + randomDiceImage(randomNumber2);

  image1.setAttribute("src", randomImageSource1);
  image2.setAttribute("src", randomImageSource2);
}
changeImageOnReload();

function winner() {
  let result = "";
  if (randomNumber1 > randomNumber2) {
    result = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    result = "Player 2 Wins! 🚩";
  } else {
    result = "Draw!";
  }
  return result;
}

h1Element.innerHTML = winner();
// h1Element.classList.add("winner");
