// temos uma lista de pessoas (apenas os nomes)
// também temos o nome do administrador

// 1. se o nome da pessoa for igual ao do administrador, mostre uma mensagem dizendo que ela é o administrador se não, mostre uma mensagem dizendo que ela é uma pessoa comum

const people = ["bernardo", "maria clara", "pedro"]
const admin = "maria clara"

if(people[0] === admin){
  console.log(people[0], "É admin")
} else {
  console.log(people[0], "É uma pessoa comum")
}

if(people[1] === admin){
  console.log(people[1], "É admin")
} else {
  console.log(people[1], "É uma pessoa comum")
}

if(people[2] === admin){
  console.log(people[2], "É admin")
} else {
  console.log(people[2], "É uma pessoa comum")
}