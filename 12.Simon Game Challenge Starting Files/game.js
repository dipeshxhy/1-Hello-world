let buttonColors = ["red", "blue", "green", "yellow"];

const game = {
  level: 0,
  gamePattern: [],
  userClickedPattern: [],
  started: false,
};

$(document).keypress(function () {
  if (!game.started) {
    game.started = true;
    changeLabelMessage("Level " + game.level);
    nextSequence();
  }
});

$(".btn").click(function () {
  const userChosenColor = $(this).attr("id");
  game.userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(game.userClickedPattern.length - 1);
});
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
function checkAnswer(currentLevel) {
  if (
    game.gamePattern[currentLevel] === game.userClickedPattern[currentLevel]
  ) {
    if (game.userClickedPattern.length === game.gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    changeLabelMessage("Game Over, Press Any Key to Restart");
    startOver();
  }
}
function startOver() {
  game.level = 0;
  game.gamePattern = [];
  game.userClickedPattern = [];
  game.started = false;
}

function nextSequence() {
  game.userClickedPattern = [];

  game.level++;
  changeLabelMessage("Level " + game.level);

  const randomNumberIndex = randomNumber();
  const randomChosenColor = buttonColors[randomNumberIndex];
  game.gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//label change
function changeLabelMessage(labelMsg) {
  $("#level-title").text(labelMsg);
}

//generate random number
function randomNumber() {
  return Math.floor(Math.random() * 4);
}
