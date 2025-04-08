class Calculadora {
  a // undefined
  b //' undefined

  constructor(num1, num2){
    this.a = num1
    this.b = num2
  }

  soma(){
    return this.a + this.b
  }
  sub(){
    return this.a-this.b
  }
  multiplicacao(){
    return this.a*this.b
  }
  divisao(){
    return this.a/this.b
  }
}

const calculadora1 = new Calculadora(1,1)

calculadora1.a = 5

console.log(calculadora1.soma())
console.log(calculadora1)