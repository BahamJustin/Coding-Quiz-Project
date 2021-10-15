var time = 30;

// Starts Game
$("#start-btn").click(function startGame() {
  // Test start
  console.log("Start Game");

  // hide start menu
  $("#start-page").hide();

  // Starts 30 sec timer
  setInterval(startTimer, 1000);

  function startTimer() {
    time--;
    console.log(time);
    if (time === 0) {
      return;
    }
  }

  //shows first question
  $("#questions").removeClass("d-none");
});
