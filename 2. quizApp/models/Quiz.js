// @ts-check
import { Question } from "./Question.js"

export class Quiz {
    questionIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions) {
        this.questions = questions
    }

    /**
     * 
     * @returns {Question} the question found
     */
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    isEnded() {
        return this.questions.length === this.questionIndex
    }

    /**
     * 
     * @param {string} answer the answer to confirm if is true
     */
    guess(answer) {
        if(this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }

}