const quizData = [
	{
		question: 'Which one of these characters is not friends with Harry Potter?',
		a: 'Ron Weasley',
		b: 'Neville Longbottom',
		c: 'Draco Malfoy',
		d: 'Hermione Granger',
		correct: 'c',
	},
	{
		question: 'What spell did Harry use to kill Lord Voldemort?',
		a: 'Expelliarmus',
		b: 'Expecto Patronum',
		c: 'Avada Kedavra',
		d: 'Accio',
		correct: 'c',
	},
	{
		question: `Who is Harry's god father`,
		a: 'James Potter',
		b: 'Sirius Black',
		c: 'Severus Snape',
		d: 'Arthur Weasley',
		correct: 'b',
	},
	{
		question: 'Which Patronus belongs to Luna Lovegood?',
		a: 'Doe',
		b: 'Rabbit',
		c: 'Dog',
		d: 'Horse',
		correct: 'b',
	},
	{
		question: 'What position does Harry play on his Quidditch team?',
		a: 'Chaser',
		b: 'Keeper',
		c: 'Bludger',
		d: 'Seeker',
		correct: 'd'
	},
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitEl = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	

	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer =  answerEl.id;
		}
	});
	return answer;
}

function deselectAnswers() {
	answerEls.forEach(answerEl => {
		answerEl.checked = false;
	});
}

submitEl.addEventListener('click', () => {

	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;
			if (currentQuiz < quizData.length) {
				loadQuiz();
			} else {
				quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
				<button onclick="location.reload()">Reload</button>`
			}
	}
	



})