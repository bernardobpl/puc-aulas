// crie 3 objetos representando uma pessoa contendo nome, idade e profissão, sendo 1 professor, 1 estudante e 1 pessoa com outra profissão

// 1. se a profissão for professor, mostre uma mensagem dizendo: "Oi, meu nome é NOME, tenho IDADE e vou te ensinar algo!"
// 2. se a profissão for estudante, mostre uma mensagem dizendo: "Oi, meu nome é NOME, tenho IDADE e vou aprender tudo!"

const person1 = {
  name: "Bernaro",
  age: 27,
  job: "Teacher"
}
const person2 = {
  name: "Maria Clara",
  age: 20,
  job: "Student"
}
const person3 = {
  name: "Pedro",
  age: 20,
  job: "Chef"
}

if(person1.job === "Teacher"){
  console.log("Oi, meu nome é ",person1.name, "tenho ",person1.age, "e vou te ensinar algo!")
}
if(person2.job === "Teacher"){
  console.log("Oi, meu nome é ",person2.name, "tenho ",person2.age, "e vou te ensinar algo!")
}
if(person3.job === "Teacher"){
  console.log("Oi, meu nome é ",person3.name, "tenho ",person3.age, "e vou te ensinar algo!")
}



if(person1.job === "Student"){
  console.log("Oi, meu nome é ",person1.name, "tenho ",person1.age, "e vou te aprender tudo!")
}
if(person2.job === "Student"){
  console.log("Oi, meu nome é ",person2.name, "tenho ",person2.age, "e vou te aprender tudo!")
}
if(person3.job === "Student"){
  console.log("Oi, meu nome é ",person3.name, "tenho ",person3.age, "e vou te aprender tudo!")
}