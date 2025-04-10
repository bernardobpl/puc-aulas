// criar um novo array contendo as idades maior ou igual a 20 e mostrar no console(terminal)
// resolver usando "while", "for" e "filter"
const ages = [10, 27, 20, 16, 18, 60, 15]

// while
// function filterGreaterThan20(list){
//   let count = 0
//   let newList = []

//   while(count < list.length){

//     const item = list[count]

//     if(item >=20){
//       newList.push(item)
//     }

//     count++
//   }

//   return newList
// }

// for
// function filterGreaterThan20(list){
//   const newList = []

//   for(let i=0; i<list.length; i++){
//     const item = list[i]

//     if(item >= 20){
//       newList.push(item)
//     }
//   }

//   return newList
// }


// for ( item of list)
// function filterGreaterThan20(list){
//   const newList = []

//   for(const item of list){
//     if(item >= 20){
//       newList.push(item)
//     }
//   }

//   return newList
// }

// filter
const greaterThan20 = ages.filter((item) => item >= 20)
console.log(greaterThan20)