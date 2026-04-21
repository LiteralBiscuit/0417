class NavBar{
    /**
     * @type {ViewElement[]}
     */
    #viewElementList;
    /**
     * @type {HTMLDivElement}
     */
    #buttonBar;
    /**
     * @type {HTMLDivElement}
     */
    #viewContainer;

    /**
     * 
     * @param {string} id 
     */
    constructor (id){
        this.#buttonBar = document.createElement("div");
        this.#viewContainer = document.createElement("div");
        this.#buttonBar.id = id;
    }

    /**
     * 
     * @param {string} label 
     * @param {ViewElement} view 
     * @returns {void}
     */
    addViewElement(label, view){
        this.#viewElementList.push(view);
        view.appendTo(this.#viewContainer);
    }

    /**
     * 
     * @param {string} id 
     * @returns {void}
     */
    navigate(id){
        for (const element of this.#viewElementList) {
            if(element.id == id){
                element.navigate();
            }
        }
    }
}

export {NavBar}