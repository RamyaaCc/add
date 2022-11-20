$(document).ready(function () {
  Magic8Ball = {};
  Magic8Ball = [
    "No",
    "yes",
    "I dont think so...",
    "Ofcourse",
    "unDoubtidly",
    "In your Dreams",
  ];
  $("#answer").hide();
  Magic8Ball.askQuestion = function (question) {
    // $("#8ball").effect("shake");
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
    );

    var randomNumber = Math.random();
    var randomindex = Math.floor(randomNumber * this.randomNumber.length);
    var answer = this.randomNumber[randomindex];
    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
  };

  $("#questionButton").click(function () {
    $("#answer").hide();
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
    );

    setTimeout(function () {
      var question = prompt("Ask a YES or NO Question!!");
      Magic8Ball.askQuestion(question);
    }, 600);
  });
});
