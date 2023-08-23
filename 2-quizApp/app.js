import { questions } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/Ui.js'

/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui the ui object
 */
function renderPage(quiz, ui) {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score)
        quiz.questionIndex = 0
        quiz.score = 0
        ui.resetModal( () => {
            renderPage(quiz, ui)
        })
    } else {
        ui.showQuestion(quiz.getQuestionIndex().question)
        ui.showChoices(quiz.getQuestionIndex().choice, (currentChoice) => {
            quiz.guess(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }
}

function main() {
    const quiz = new Quiz(questions)
    const ui = new UI()
    renderPage(quiz, ui)
}

main()