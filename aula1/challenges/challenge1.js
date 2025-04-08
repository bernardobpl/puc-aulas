// crie um cenário em que você tem uma variável para o valor de uma pizza
// e outra variável para o número de pessoas dividindo a pizza
// decidimos que vamos dividir a pizza por igualmente para esse número de pessoas

// 1. mostre no terminal quanto cada pessoa deve pagar
// 2. se o número de pessoas for 3 ou mais e o valor que cada pessoa deve pagar for mais de 20 reais por pessoa, mostre uma mensagem dizendo que tá caro
// 3. se o valor for 5 ou menos reais por pessoa, mostre uma mensagem dizendo que é golpe

const pizza = 25
const people = 5

const valuePerPerson = pizza/people

console.log('valor por pessoa: ', valuePerPerson)

if(people >= 3 && valuePerPerson > 20){
  console.log("It's expensive")
}

if(valuePerPerson <= 5){
  console.log("It's a scam")
}