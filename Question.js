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

class Question{
    /**
     * @type {number}
     */
    #id;
    /**
     * @type {string}
     */
    #question;
    /**
     * @type {string[]}
     */
    #answers;
    /**
     * @type {string}
     */
    #rightanswer;

    set id(value){
        this.#id = value;
    }
    get id(){
        return this.#id;
    }
    
    set question(value){
        return this.#question;
    }
    get question(){
        return this.#question;
    }

    set answer(value){
        this.#answers = value;
    }
    get answer(){
        return this.#answers;
    }

    set rightAnswer(value){
        this.#rightanswer = value;
    }
    get rightAnswer(){
        return this.#rightanswer;
    }
}

export {Question}