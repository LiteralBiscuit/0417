/**
 * @typedef {{question: string, answer1: string, answer2: string, answer3: string, answer4: string, rightAnswer: string}} QuestionType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 * @typedef {{question: string, answer: string}} TrueFalseQuestionType
 * @callback ActivateCallback
 * @returns {void}
 * @callback RenderCallback
 * @param {Question[]} list
 * @returns {void}
 */

class QuestionManager{
    /**
     * @type {Question[]}
     */
    #questionList;
    /**
     * @type {RenderCallback}
     */
    #renderCallback;

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions){
        this.#questionList = questions;
    }

    getAllElement(){

    }

    set renderCallback(value){
        this.#renderCallback = value;
    }

    /**
     * 
     * @param {QuestionType} question 
     * @returns {Question}
     */
    #createQuestion(question){

    }


}

export {QuestionManager}