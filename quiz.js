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
			countDownNumbDisp.textContent = 0;
			answerDisp.textContent = "You've ran out of time.";
		}
	}, 1000);
}

// Highest score
function scoreKeeper() {
	scoreTab = 100 + secondsLeft * 10;
	trackedScore = trackedScore + scoreTab;
	userScore.textContent = trackedScore;
}

// Page start
function pageChange1() {
	timerButton.classList.add('hideMe');
	subHeadDisp.classList.add('hideMe');
	possAnswer1.classList.remove('hideMe');
	possAnswer2.classList.remove('hideMe');
	possAnswer3.classList.remove('hideMe');
	possAnswer4.classList.remove('hideMe');
	lineDisp.classList.remove('hideMe');
	answerDisp.classList.remove('hideMe');
	mainHeadDisp.textContent = gameArray[0]['question'];
	possAnswer1.textContent = gameArray[0]['answer1'];
	possAnswer2.textContent = gameArray[0]['answer2'];
	possAnswer3.textContent = gameArray[0]['answer3'];
	possAnswer4.textContent = gameArray[0]['rightAnswer1'];
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
// Final page
function pageChange5() {
	answerDisp.textContent = 'Quiz is Finished.';
	document.getElementById('disappearDiv').remove();
	document.getElementById('lineId').remove();
	mainHeadDisp.classList.remove('text-center');
	mainHeadDisp.textContent = 'END';
	subHeadDisp.classList.remove('text-center');
	subHeadDisp.textContent = 'Your Score' + trackedScore;
	subHeadDisp.classList.remove('hideMe');
	answerDisp.classList.add('hideMe');
	formSubz.classList.remove('hideMe');

	submitScore();
}

// if, else statements for the possible answers

possAnswer1.addEventListener('click', function () {
	if (possAnswer1 !== gameArray[0]['rightAnswer1']) {
		secondsLeft = secondsLeft - 10;
	}
});
possAnswer2.addEventListener('click', function () {
	if (
		mainHeadDisp.textContent == gameArray[2]['question'] &&
		posiAnswer2.textContent == gameArray[2]['rightAnswer3']
	) {
		answerDisp.textContent = 'Great Job!';
		console.log('page3');
		scoreTabulator();
		pageChange4();
	} else if (
		mainHeadDisp.textContent == gameArray[3]['question'] &&
		possAnswer2.textContent == gameArray[3]['rightAnswer4']
	) {
		scoreTabulator();
		secondsLeft = 0;
		pageChange5();
	} else {
		secondsLeft = secondsLeft - 10;
	}
});

posiAnswer3.addEventListener('click', function () {
	if (
		mainHeadDisp.textContent == gameArray[1]['question'] &&
		posiAnswer3.textContent == gameArray[1]['rightAnswer2']
	) {
		answerDisp.textContent = 'GOOD JOB CODER!!';
		console.log('correct page 2 log');
		scoreTabulator();
		pageChange3();
	} else {
		secondsLeft = secondsLeft - 10;
	}
});

posiAnswer4.addEventListener('click', function () {
	if (
		mainHeadDisp.textContent == gameArray[0]['question'] &&
		posiAnswer4.textContent == gameArray[0]['rightAnswer1']
	) {
		answerDisp.textContent = 'GOOD CODER!!!';
		{
			console.log('correct page 1 log');
		}
		scoreTabulator();
		pageChange2();
	} else {
		secondsLeft = secondsLeft - 10;
	}
});

//Submission
subButty.addEventListener('click', function (event) {
	var scoreStorageArray = JSON.parse(localStorage.getItem('infinityKey'));
	if (scoreStorageArray === null) {
		scoreStorageArray = [];
	}

	scoreForm.classList.remove('hideMe');
	formSubz.classList.add('hideMe');
	subHeadDisp.classList.add('hideMe');
	mainHeadDisp.classList.add('hideMe');
	userScore.classList.add('hideMe');
	arrayScore = trackedScore;
	initials = initialText.value;
	console.log(arrayScore);
	console.log(initials);

	// array where I am storing values for user entry initials and high scores
	scoreStorageArray.push({ userEntry: initials, highScore: trackedScore });

	console.log(scoreStorageArray);
	for (var i = 0; i < scoreStorageArray.length; i++) {
		var scoreLi = document.createElement('div');
		scoreLi.textContent =
			'  INITIALS   ' +
			scoreStorageArray[i].userEntry +
			'   SCORE      ' +
			scoreStorageArray[i].highScore;
		scoreLi.setAttribute('data-index', i);
		scoreLi.classList.add('coolScores');
		scoreList.appendChild(scoreLi);
		scoreSpan.textContent = scoreStorageArray.length;
	}

	localStorage.setItem('infinityKey', JSON.stringify(scoreStorageArray));
});
