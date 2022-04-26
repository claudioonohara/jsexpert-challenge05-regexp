const { evaluateRegex } = require('./util')

class Project {
    constructor([
        titulo,
        link,
        autor,
        etapa,
        ementa,
        indexadoresnorma        
    ]) {
        this.id = link.match(evaluateRegex(/(?<=\=).*$/)).join()
        this.numero = titulo.match(evaluateRegex(/(?<=lei\s)\d+/)).join()
        this.ano = titulo.match(evaluateRegex(/(?<=\/)\d+/)).join()
        const splitedName = autor.split(evaluateRegex(/\s/))
        const firstName = splitedName.shift() 
        const lastName = splitedName.pop()
        const autorName = { nome: `${firstName} ${lastName}` }
        this.autores = []
        this.autores.push(autorName)
        this.url = link
        this.indexadores = indexadoresnorma.replace(evaluateRegex(/(?<=,)\s/g), "").split(/\,/)
    }


}


module.exports = Project