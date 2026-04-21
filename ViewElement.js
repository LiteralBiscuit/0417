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
class ViewElement{
    /**
     * @type {string}
     */
    #id;
    /**
     * @type {HTMLDivElement}
     */
    #div;
    /**
     * @type {ActivateCallback}
    */
    #activateCallback;

    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.#id = id;
        this.#div = document.createElement("div");
    }
    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#div);
    }
    navigate(){
        if (this.#activateCallback){
            this.#activateCallback();
        }
    }
    get id(){
        return this.#id;
    }
    get div(){
        return this.#div;
    }
    set activateCallback(value){
        this.#activateCallback = value;
    }
}