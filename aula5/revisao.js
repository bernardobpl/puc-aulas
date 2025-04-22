// variaveis
const lastName = "lopes" //string
const age = 27 //number
const isAdmin = true //boolean
const person = { // objeto
  name: "Bernardo",
  age: 27,
  isTeacher: true,
}
const fruits = ["apple", "pineaple", "grape"] //array
const pontosNoGrafico = [
  [1,1],
  [3,2],
]

// const, let, var


//if / else
if(age > 27){
  console.log("its greater than 27")
} else { // else é opcional
  console.log("its 27 or lower")
}

if(age === 27){

}

if(age < 27){
  
}

// loops
let counter = 0
while(counter < 6){
  console.log("its lower than 6")
  counter++
}

for(let i=0; i < 10; i++){
  console.log("its lower than 10")
}

for(const item of fruits){
  console.log("This fruit is: ", item)
}


// funções

//declarando o que a função faz
function double(value){
  return value*2
}

//executando a função
double(3)

// arrow function - função anonima
// const triple = (value) => {
//   return value*3
// }

const triple = (value) => value*3
const resultTriple = triple(3) // resultTriple = 9


// array methods
const nums = [0,1,2,3,4,5]

const greaterthan2 = nums.filter((item) => item > 2)

const doubleNums = nums.map((value) => value*2)
console.log("🚀 ~ doubleNums:", doubleNums)

// forEach - não retorna nada
// map - retorna uma nova lista

const people = [
  { id: 1, name: 'Person 1', role: 'guest' },
  { id: 2, name: 'Person 2', role: 'admin' },
  { id: 4, name: 'Person 4', role: 'guest' },
]

const admins = people.filter((person) => person.role === "admin")
console.log("🚀 ~ admins:", admins)
