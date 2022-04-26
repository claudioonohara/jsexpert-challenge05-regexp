const { describe, it } = require('mocha')
const { expect } = require('chai')
const Project = require('./../src/project')

describe('Project', () => {
    it('should generate a project instance from properties list', () => {
        const content = [
            'Projeto de lei 584/2016',
            'http://www.al.sp.gov.br/propositura?id=1322563',
            'Jorge Wilson Xerife do Consumidor',
            'PAUTA',
            'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
            'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO'
        ]
        const result = new Project(content)
        const expected = {
                id: '1322563',
                numero: '584',
                ano: '2016',
                autores: [
                  {
                    nome: 'Jorge Consumidor',
                  },
                ],
                url: 'http://www.al.sp.gov.br/propositura?id=1322563',
                indexadores: [
                  'CONTRATO',
                  'OBRIGATORIEDADE',
                  'CLÁUSULA',
                  'SERVIÇO',
                  'TELEFONIA MÓVEL',
                  'TELEFONIA FIXA',
                  'PRAZO',
                  'INCLUSÃO',
                  'RESCISÃO CONTRATUAL',
                  'LIBERAÇÃO',
                ],
              }

        expect(result).to.be.deep.equal(expected)
    })
})