const TextProcessorFluentAPI = require('./textProcessorFluentAPI')

class TextProcessorFacade{
    #textProcessorFluentAPI
    constructor(text) {
        this.#textProcessorFluentAPI = new TextProcessorFluentAPI(text)
    }

    getProjectsFromCSV() {
        return this.#textProcessorFluentAPI
                .extractProjectData()
                .divideTextInColumns()
                .mapProject()
                .build()
    }        
}

module.exports = TextProcessorFacade