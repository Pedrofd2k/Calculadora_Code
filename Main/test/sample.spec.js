import assert from 'assert'
import chai from 'chai'
import Calculadora from "../src/Calculadora.js"
const expect = chai.expect

decribe('First',() =>{
    it('Verificar variável "a"',() =>{
        let a = 2
       // assert.strictEqual(a, 2)
       expect(a).to.be.equals(2).and.to.be.a("number")
       //expect(a).to.be.a("number")
    })
    it('Verificar desigualdade',() =>{
        let a = 'carro'
       // assert.notstrictEqual(a, 3)
       expect(a).to.be.equals('carro').and.not.equals("charrete")

    })
})

decribe('Second',() =>{
    it('Verificar desigualdade',() =>{
        let a = 2
      //  assert.strictEqual(a, '2')
    })
    it('Verificar desigualdade',() =>{
        let a = 'carro'
       // assert.notstrictEqual(a, 'charrete')
    })
})