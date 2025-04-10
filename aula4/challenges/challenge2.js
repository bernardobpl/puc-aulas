// como achar o primeiro item em que a "role" seja igual a "user"

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

// SOLUÇÃO USANDO "FOR"

// function findFirstUser(){
//   let user

//   for(const person of people){
//     if(person.role === 'user'){
//       user = person
//       break
//     }
//   }

//   return user
// }

// console.log(findFirstUser())



//-----------------------------------------//-------------------------------//


// SOLUÇÃO USANDO "FIND"
const user = people.find(p => p.role === "user")
console.log(user)