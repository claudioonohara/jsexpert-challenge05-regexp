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
        this.autores = this.autorsList(autor)
        this.url = link
        this.indexadores = indexadoresnorma.replace(evaluateRegex(/(?<=,)\s/g), "").split(/\,/)
    }

    autorsList(autor) {
        const autorList = []
        if (autor.includes(',')) {
            const autores = autor.split(evaluateRegex(/,\s/))
            for (const a in autores) {
                autorList.push(this.autorFirstLastName(autores[a]))        
            }
        } else {
            autorList.push(this.autorFirstLastName(autor))        
        }
        return autorList
    }
    
    autorFirstLastName(autorName) {
        const splitedName = autorName.split(evaluateRegex(/\s/))
        const firstName = splitedName.shift() 
        const lastName = splitedName.pop()
       return { nome: `${firstName} ${lastName}` }
    }
}


module.exports = Project