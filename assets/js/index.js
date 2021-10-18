var time = 30;

var highScore = 0;

// Starts Game
$("#start-btn").click(function startGame() {
  // Test start
  console.log("Start Game");

  // hide start menu
  $("#start-page").hide();

  // Timer Function
  var timeInterval = setInterval(startTimer, 1000);

  function startTimer() {
    console.log(time);
    if (time > 1) {
      $("#timer").text(time + " seconds remaining");
      time--;
    } else if (time === 1) {
      $("#timer").text(time + " second remaining");
      time--;
    } else {
      $("#timer").text("");
      clearInterval(timeInterval);
      $("#question-1").hide();
      $("#Game-Over").removeClass("d-none");
    }
  }

  //shows first question
  $("#question-1").removeClass("d-none");

  $(".btn").click(function nextQuestion() {});
});

// Answer Function
$(".correct").click(function correctAnswer() {
  console.log("correct");
  localStorage.setItem("highScore", +1);
});

$(".wrong").click(function wrongAnswer() {
  console.log("wrong");
  time = time - 5;
});

$("#highscore").click(function () {
  $("#High-Score").removeClass("d-none");
});
