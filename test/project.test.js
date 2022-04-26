const { describe, it } = require('mocha')
const { expect } = require('chai')
const Project = require('./../src/project')

describe('Project', () => {

    it('should generate a project instance from properties list with many authors', () => {
      const content = [
        'Projeto de lei 447/2016',
        'http://www.al.sp.gov.br/propositura?id=1315248',
        'José Zico Prado, Alencar Santana Braga, Ana do Carmo, Marcia Lia, Beth Sahão, Carlos Neder, Enio Tatto, Geraldo Cruz, João Paulo Rillo, Marcos Martins, Professor Auriel, Teonilio Barba, Luiz Fernando, Luiz Turco',
        'COMISSÃO',
        'Assegura a participação das Sociedades Cooperativas em licitações e contratações públicas no âmbito do Estado em igualdade de condições com todos os demais concorrentes.',
        'COOPERATIVA, CONTRATAÇÃO, PARTICIPAÇÃO, LICITAÇÃO, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA ESTADUAL'
    ]
    const result = new Project(content)
    const expected = {
            id: '1315248',
            numero: '447',
            ano: '2016',
            autores: [
              {
                nome: 'José Prado',
              },
              {
                nome: 'Alencar Braga',
              },
              {
                nome: 'Ana Carmo',
              },
              {
                nome: 'Marcia Lia',
              },
              {
                nome: 'Beth Sahão',
              },
              {
                nome: 'Carlos Neder',
              },
              {
                nome: 'Enio Tatto',
              },
              {
                nome: 'Geraldo Cruz',
              },
              {
                nome: 'João Rillo',
              },
              {
                nome: 'Marcos Martins',
              },
              {
                nome: 'Professor Auriel',
              },
              {
                nome: 'Teonilio Barba',
              },
              {
                nome: 'Luiz Fernando',
              },
              {
                nome: 'Luiz Turco',
              },
            ],
            url: 'http://www.al.sp.gov.br/propositura?id=1315248',
            indexadores: [
              'COOPERATIVA',
              'CONTRATAÇÃO',
              'PARTICIPAÇÃO',
              'LICITAÇÃO',
              'ESTADO DE SÃO PAULO',
              'ADMINISTRAÇÃO PÚBLICA ESTADUAL',
            ],
          }

    expect(result).to.be.deep.equal(expected)
    })

    it('should generate a project instance from properties list with one author', () => {
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