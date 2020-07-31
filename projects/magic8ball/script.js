$(document).ready(function() {

$("#answer").hide();
//magic8Ball object
	var magic8Ball = {};

	magic8Ball.listOfAnswers = ["Absolutely!!", "Are you crazy??", "No way, Jose!", "Ask again later", "Odds are not in your favor", "Without a doubt!", "Sure you want to know?", "Yes", "No" ];
	//define the method
	magic8Ball.askQuestion = function(question) {
		$("#answer").fadeIn(4000);
		var randomNumber = Math.random();
		//multiply the random number by the number of items in answer list – this makes the random number between 0 and the number of items in answer list
		var randomNumberForAnswers = randomNumber * 			this.listOfAnswers.length;
		//round the random number down so it doesn't exceed the number of answers available
		var randomIndex = Math.floor(randomNumberForAnswers);
		//this gets the random index number of the answer list
		var randomAnswer = this.listOfAnswers[randomIndex];

		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#8ball").effect("shake");
		$("#answer").text(randomAnswer);
		//$("#answer").fadeIn(4000); //why not here??
		console.log(question);
		console.log(randomAnswer);
};

var onClick = function() {
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	$("#answer").hide();

	setTimeout (function(){
		var question = prompt("Ask me any yes/no question, and click 'OK'.");
		magic8Ball.askQuestion(question);
	},500);
};

$("#questionButton").click(onClick);
});
