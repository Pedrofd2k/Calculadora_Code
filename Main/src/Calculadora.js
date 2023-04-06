export default class Calculadora{

    static soma(a,b){
       return a + b
    }
    static sub(a,b){
        return a - b
     }
    static mult(a,b){
        return a * b
    }
    static soma(a,b){
        return a / b
     }
    static soma(a,b){
        let x = 1
        for(let i=0;i<b;i++){
            x = x*a
        }
        return x
    }     
}
