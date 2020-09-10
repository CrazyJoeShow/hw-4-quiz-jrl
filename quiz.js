// testing testing
console.log('Have you ever seen the rain?');

// Form population
var containerDiv = document.querySelector('.m-auto');
// timer in the upper right
var countDownNumbDisp = document.querySelector('#timer');
var quizContainer = document.querySelector('#disappearDiv');

//starts timer and quiz
var timerButton = document.querySelector('#timerStart');
var subHeadDisp = document.querySelector('#subHeadingMain');
var mainHeadDisp = document.querySelector('#headingMain');
//answers IDdivs

var possAnswer1 = document.querySelector('#answer1');
var possAnswer2 = document.querySelector('#answer2');
var possAnswer3 = document.querySelector('#answer3');
var possAnswer4 = document.querySelector('#answer4');

var currentPage = 0;
var trackedScore = 0;

// Targeting Scores
var scoreForm = document.querySelector('#scoreForm');
var scoreInput = document.querySelector('#scoreText');
var scoreList = document.querySelector('#scoreList');
var scoreSpan = document.querySelector('#scoreSpan');
var clearScoreButton = document.querySelector('#clearScoreButton');

//Local storage
var scoreStorageArray = [];

// object literal for the questions

var gameArray = [
	{
		page: 1,
		question: 'Answer me this,  2 + 2 ?',
		answer1: 'what is 7 Alex.',
		answer2: 'what is 4 Alex',
		answer3: 'what is 5% Alex',
		rightAnswer: 'TOASTERS.',
	},
	{
		page: 2,
		question: 'Answer me this,  3 + 4 ?',
		answer1: 'what is 7 Alex.',
		answer2: 'what is 4 Alex',
		answer3: 'what is 99 Alex',
		rightAnswer: 'BEEFWELLINGTON',
	},
	{
		page: 3,
		question: 'Answer me this, Am I right, or am I right!?',
		answer1: 'what is 7 Alex.',
		answer2: "Don't pick this one. Seriously.",
		answer3: 'May be Alex not sure.',
		rightAnswer: 'DEFINITELY NOT RIGHT.',
	},
	{
		page: 4,
		question: 'Not a question.',
		answer1: 'Sure.',
		answer2: 'Could be.',
		answer3: 'You tell me.',
		rightAnswer: 'Definitely this one then.',
	},
];

//TIMER
var secondsLeft = 90;
var wrongAnswerLoss = -10;
timerButton.addEventListener('click', function () {
	pageChange1();
});
function setTimer() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		countDownNumbDisp.textContent = secondsLeft;
		if (secondsLeft <= 0) {
			clearInterval(timerInterval);
			countDownNumbDisp.textcontent = 0;
			answerDisp.textContent = "You've ran out of time";
		}
	}, 1000);
}

function pageChange1() {
	timerButton.classList.add('hideMe');
	subHeadDisp.classList.add('hideMe');
	posiAnswer1.classList.remove('hideMe');
	posiAnswer2.classList.remove('hideMe');
	posiAnswer3.classList.remove('hideMe');
	posiAnswer4.classList.remove('hideMe');
	lineDisp.classList.remove('hideMe');
	answerDisp.classList.remove('hideMe');
	mainHeadDisp.textContent = gameArray[0]['question'];
	posiAnswer1.textContent = gameArray[0]['answer1'];
	posiAnswer2.textContent = gameArray[0]['answer2'];
	posiAnswer3.textContent = gameArray[0]['answer3'];
	posiAnswer4.textContent = gameArray[0]['rightAnswer1'];
}
function pageChange2() {
	mainHeadDisp.textContent = gameArray[1]['question'];
	posiAnswer1.textContent = gameArray[1]['answer1'];
	posiAnswer2.textContent = gameArray[1]['answer2'];
	posiAnswer3.textContent = gameArray[1]['rightAnswer2'];
	posiAnswer4.textContent = gameArray[1]['answer3'];
}
function pageChange3() {
	mainHeadDisp.textContent = gameArray[2]['question'];
	posiAnswer1.textContent = gameArray[2]['answer1'];
	posiAnswer2.textContent = gameArray[2]['rightAnswer3'];
	posiAnswer3.textContent = gameArray[2]['answer3'];
	posiAnswer4.textContent = gameArray[2]['answer2'];
}
function pageChange4() {
	mainHeadDisp.textContent = gameArray[3]['question'];
	posiAnswer1.textContent = gameArray[3]['answer1'];
	posiAnswer2.textContent = gameArray[3]['rightAnswer4'];
	posiAnswer3.textContent = gameArray[3]['answer3'];
	posiAnswer4.textContent = gameArray[3]['answer2'];
}
//******************************************************************
//FINAL PAGE
function pageChange5() {
	answerDisp.textContent = 'QUIZ COMPLETE!';
	document.getElementById('disappearDiv').remove();
	document.getElementById('lineId').remove();
	mainHeadDisp.classList.remove('text-center');
	mainHeadDisp.textContent = 'All done!';
	subHeadDisp.classList.remove('text-center');
	subHeadDisp.textContent = 'YOUR SCORE: ' + trackedScore;
	subHeadDisp.classList.remove('hideMe');
	answerDisp.classList.add('hideMe');
	formSubz.classList.remove('hideMe');

	// submitScore();
}
