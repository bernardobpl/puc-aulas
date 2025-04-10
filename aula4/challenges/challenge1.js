// crie uma nova lista para cada tipo de "role" sendo que existe apenas: "guest", "admin", "user"

const people = [
  { id: 1, name: 'Person 1', role: 'guest' },
  { id: 2, name: 'Person 2', role: 'admin' },
  { id: 4, name: 'Person 4', role: 'guest' },
  { id: 5, name: 'Person 5', role: 'admin' },
  { id: 3, name: 'Person 3', role: 'user' },
  { id: 6, name: 'Person 6', role: 'user' },
  { id: 7, name: 'Person 7', role: 'guest' },
  { id: 8, name: 'Person 8', role: 'admin' },
  { id: 10, name: 'Person 10', role: 'guest' },
  { id: 11, name: 'Person 11', role: 'admin' },
  { id: 12, name: 'Person 12', role: 'user' },
  { id: 13, name: 'Person 13', role: 'guest' },
  { id: 9, name: 'Person 9', role: 'user' },
  { id: 14, name: 'Person 14', role: 'admin' },
  { id: 19, name: 'Person 19', role: 'guest' },
  { id: 16, name: 'Person 16', role: 'guest' },
  { id: 18, name: 'Person 18', role: 'user' },
  { id: 17, name: 'Person 17', role: 'admin' },
  { id: 15, name: 'Person 15', role: 'user' },
  { id: 20, name: 'Person 20', role: 'admin' }
]

// SOLUÇÃO MAIS SIMPLES, UM FILTER PARA CADA VALOR

// const admins = people.filter(p => p.role === "admin")
// const users = people.filter(p => p.role === "user")
// const guests = people.filter(p => p.role === "guest")

// console.log(admins)
// console.log(users)
// console.log(guests)

//------------------------------------//-----------------------------//


// SOLUÇÃO MAIS PERFORMÁTICA FAZENDO FAZENDO APENAS 1 LOOP

function filterRoles(){
  const admins = []
  const users = []
  const guests = []

  for(const person of people){
    if(person.role === 'admin'){
      admins.push(person)
      continue
    }
    if(person.role === 'user'){
      users.push(person)
      continue
    }
    if(person.role === 'guest'){
      guests.push(person)
    }
  }

  return {admins, users, guests}
}

const result = filterRoles()

console.log(result.admins)
console.log(result.users)
console.log(result.guests)

