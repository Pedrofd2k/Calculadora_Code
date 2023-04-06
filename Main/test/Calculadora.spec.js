import assert from 'assert'
import chai from 'chai'
import Calculadora from "../src/Calculadora.js"
const expect = chai.expect

describe("Testes de soma", () =>{
    it("Deve somar 4 e 5",() =>{
       let r =  Calculadora.soma(4,5)
       expect(r).to.be.eq(9)
    })
    it("Somar -4 3 5",()=>{
        let r = Calculadora.soma(-4,5)
        expect(resultado).to.be.eq(1)
    })
})
describe("Testes de Subtração", () =>{
    it("Deve subtrair  4 e 5",() =>{
       let r =  Calculadora.sub(4,5)
       expect(r).to.be.eq(-1)
    })
})
describe("Testes de Multiplicação", () =>{
    it("Deve multiplicar 4 e 5",() =>{
       let r =  Calculadora.mult(4,5)
       expect(r).to.be.eq(20)
    })
})
describe("Testes de Divisão", () =>{
    it("Deve somar 9 e 3",() =>{
       let r =  Calculadora.div(4,5)
       expect(r).to.be.eq(3)
    })
})
describe("Testes de Potência", () =>{
    it("Deve potencializar 4 a 3",() =>{
       let r =  Calculadora.sub(4,3)
       expect(r).to.be.eq(64)
    })
})