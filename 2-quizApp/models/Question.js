export class Question {

    /**
     * 
     * @param {string} question this is a question of the quiz 
     * @param {string[]} choice  this are the choices of the question
     * @param {string} answer this is the answer of the question
     */
    constructor(question, choice, answer) {
        this.question = question
        this.choice = choice
        this.answer = answer
    }

    /**
     * 
     * @param {string} choice this is a text to compare the user choice to correct answer
     * @returns true if the answer is correct
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }
}