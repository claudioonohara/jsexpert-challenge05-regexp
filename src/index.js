'use strict';
const { readFile } = require('fs/promises')
const { join } = require('path')

const TextProcessorFacade = require('./textProcessorFacade')
;(async () => {
    const dataBuffer = await readFile(join(__dirname, './../docs/projeto-de-lei.csv'))
    const instance = new TextProcessorFacade(dataBuffer.toString())
    const projects = instance.getProjectsFromCSV()
    console.log('projects', projects)
})()
