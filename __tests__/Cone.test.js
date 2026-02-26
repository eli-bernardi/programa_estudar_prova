const Cone = require('../models/Cone.js')

describe(`Testes da versão 1.0.0 - Sólido Geométricos`, () => {
    test(`Teste unitário da Área da Base`), () => {
        const cone = new Cone(2, 2)
        const resultado = 12.566
        expect(cone.calcularAreaBase()).toBeCloseTo(resultado, 3)
    }
    test(`Teste unitário da Geratriz`), () => {
        const cone = new Cone(2, 2)
        const resultado = 2.828
        expect(cone.calcularGeratriz()).toBeCloseTo(resultado, 3)
    }
    test(`Teste unitário da Area Lateral`), () => {
        const cone = new Cone(2, 2)
        const resultado = 17.772
        expect(cone.calcularAreaLateral()).toBeCloseTo(resultado, 3)
    }
    test(`Teste unitário da Area Total`), () => {
        const cone = new Cone(2, 2)
        const resultado = 30.338
        expect(cone.calcularAreaLateral()).toBeCloseTo(resultado, 3)
    }
    test(`Teste unitário do Volume`), () => {
        const cone = new Cone(2, 2)
        const resultado = 8.378
        expect(cone.calcularVolume()).toBeCloseTo(resultado, 3)
    }
})