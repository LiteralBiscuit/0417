
class Table{
    /**
     * @type {QuestionManager}
     */
    #manager;

    /**
     * 
     * @param {string} id 
     * @param {QuestionManager} manager 
     * @param {string[]} headerString 
     */
    constructor(id, manager, headerString){
        this.#manager = manager;
    }
}