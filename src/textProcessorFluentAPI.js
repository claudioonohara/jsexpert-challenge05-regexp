const { evaluateRegex } = require('./util')
const Project = require('./project')


class TextProcessorFluentAPI {

    #content
    constructor(content) {
        this.#content = content
    }

    extractProjectData() {
        const matchProject = evaluateRegex(/(^Projeto[^;]*);([^;]*);([^;]*);([^;]*);([^;]*);([^;|\n]*)/gmi)
        const onlyProject = this.#content.match(matchProject)
        this.#content = onlyProject
        return this       
    }

    divideTextInColumns() {
        const splitRegex = evaluateRegex(/;/)
        this.#content = this.#content.map(line => line.split(splitRegex))

        return this
    }

    mapProject() {
        this.#content = this.#content.map(line => new Project(line))
        return this
    }

    build() {
        return this.#content
    }
}

module.exports = TextProcessorFluentAPI