const answers = document.querySelectorAll('.answers')
const questionArea = document.getElementById('question')
const aArea = document.getElementById('A')
const bArea = document.getElementById('B')
const cArea = document.getElementById('C')
const dArea = document.getElementById('D')
const button = document.querySelector('button')

//let array of options
const options = [
    {
        question: 'What is is the capital of Australia?',
        A: 'Canberra',
        B: 'Melbourne',
        C: 'Sydney',
        D: 'Adelaide',
        correctAnswer: 'A'
    },
    {
        question: 'How old is Fleeflee?',
        A: 'very old',
        B: '9 yo',
        C: '12 yo',
        D: '13 yo',
        correctAnswer: 'D'
    },
    {
        question: 'When did WWI start?',
        A: '1898',
        B: '1939',
        C: '1914',
        D: '1952',
        correctAnswer: 'C'
    },
    {
        question: 'Which football team won the most Champions League',
        A: 'Milan',
        B: 'Real Madrid',
        C: 'Liverpool',
        D: 'Benfica',
        correctAnswer: 'B'
    },
    {
        question: 'What is Brasil official language',
        A: 'Brasilian',
        B: 'English',
        C: 'Portuguese',
        D: 'Spanish',
        correctAnswer: 'C'
    },
    {
        question: 'Who was the first president of the United States',
        A: 'Thomas Jefferson',
        B: 'Abraham Lincoln',
        C: 'Wayne Rooney',
        D: 'George Washington',
        correctAnswer: 'D'
    },
]

let random
let correct

function start() {
   //pick a random option from the array

  random = Math.floor(Math.random() * options.length)

  //place question and possible answers

  questionArea.textContent = options[random].question
  aArea.textContent = options[random].A
  bArea.textContent = options[random].B
  cArea.textContent = options[random].C
  dArea.textContent = options[random].D

  correct = options[random].correctAnswer
}
start()

answers.forEach(answer => answer.addEventListener('click', selectAnswer))


function selectAnswer() {
    if(this.id == correct) {
        this.classList.add('success')
        this.textContent = 'CORRECT!!!'
    }
    else {
        this.classList.add('fail')
        this.textContent = 'WRONG! Try again'
    }
}

button.addEventListener('click', play)

function play() {
//clear the board
    aArea.classList.remove('success')
    aArea.classList.remove('fail')
    aArea.textContent = 'null'

    bArea.classList.remove('success')
    bArea.classList.remove('fail')
    bArea.textContent = 'null'

    cArea.classList.remove('success')
    cArea.classList.remove('fail')
    cArea.textContent = 'null'

    dArea.classList.remove('success')
    dArea.classList.remove('fail')
    dArea.textContent = 'null'

    //pick a random option from the array

  random = Math.floor(Math.random() * options.length)

  //place question and possible answers

  questionArea.textContent = options[random].question
  aArea.textContent = options[random].A
  bArea.textContent = options[random].B
  cArea.textContent = options[random].C
  dArea.textContent = options[random].D

  correct = options[random].correctAnswer
}