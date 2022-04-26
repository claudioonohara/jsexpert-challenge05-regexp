const { describe, it } = require('mocha')
const { expect } = require('chai')
const TextProcessorFluentAPI = require('./../src/textProcessorFluentAPI')
const mock = require('./mock/valid')

describe('TextProcessorAPI', () => {
    it('#build', () => {
        const result = new TextProcessorFluentAPI(mock).build()
        expect(result).to.be.deep.equal(mock)
    })

    it('#extractProjectData', () => {
        const result = new TextProcessorFluentAPI(mock)
            .extractProjectData()
            .build()

        const expected = [
            'Projeto de lei 584/2016;http://www.al.sp.gov.br/propositura?id=1322563;Jorge Wilson Xerife do Consumidor;PAUTA;Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.;CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO',
            'Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Marcia Lia;PAUTA;Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA',
            'Projeto de lei 545/2016;http://www.al.sp.gov.br/propositura?id=1322832;Roberto Morais, Itamar Borges;PAUTA;Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.;'
          ]

        expect(result).to.be.deep.equal(expected)

    })

    it('#divideTextInColumns', () => {
        const content = [
            'Projeto de lei 584/2016;http://www.al.sp.gov.br/propositura?id=1322563;Jorge Wilson Xerife do Consumidor;PAUTA;Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.;CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO'
        ]

        const result = new TextProcessorFluentAPI(content)
            .divideTextInColumns()
            .build()

        const expected = [
            [
                'Projeto de lei 584/2016',
                'http://www.al.sp.gov.br/propositura?id=1322563',
                'Jorge Wilson Xerife do Consumidor',
                'PAUTA',
                'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
                'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO'
            ]
        ]

        expect(result).to.be.deep.equal(expected)

    })
    it('#mapProject', () => {
        const content = [
            [
                'Projeto de lei 584/2016',
                'http://www.al.sp.gov.br/propositura?id=1322563',
                'Jorge Wilson Xerife do Consumidor',
                'PAUTA',
                'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
                'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO'
            ]
        ]

        const result = new TextProcessorFluentAPI(content)
                                .mapProject()
                                .build()

        const expected = [
            {
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
        ]
        expect(result).to.be.deep.equal(expected)
    })

})