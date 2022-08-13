export class UI {
    constructor() { }

    /**
     * 
     * @param {string} title question title to render
     */
    showQuestion(title) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = title
    }

    /**
     * 
     * @param {string[]} choices the choices of the question 
     */
    showChoices(choices, callback) {
        const containerChoices = document.getElementById('choices')
        containerChoices.innerHTML = ''

        for (const elementIndex in choices) {
            const buttons = document.createElement('button')
            buttons.innerText = choices[elementIndex]
            buttons.className = 'buttons'
            containerChoices.append(buttons)

            buttons.addEventListener('click', () => callback(choices[elementIndex]))
        }
    }

    modalElement = document.getElementById('modal')
    /**
     * 
     * @param {number} score the total score
     */
    showScores(score) {
        this.modalElement.className = 'modal show-modal'

        const scoreElement = document.querySelector('.window-container')
        scoreElement.innerHTML =
            `<h1>S C O R E</h1>
        <h2>Your score: ${score}</h2>
        <button id="reset-modal">Reset</button>`
    }

    resetModal(callbackReset) {
        const resetButton = document.getElementById('reset-modal')
        resetButton.addEventListener('click', () => {
            callbackReset(0, 0)
            this.modalElement.className = 'modal';
        })
    }

    /**
     * 
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total the total questions of the quiz
     */
    showProgress(currentIndex, total) {
        const progressElement = document.getElementById('progress')
        progressElement.innerHTML = `${currentIndex} of ${total}`
    }
}