const fruits = ["apple", "orange", "pineapple", "grape"]

const ages = [10, 27, 20, 16, 18, 60, 15]

// EXEMPLO DE UMA FUNÇÃO CRIADA DO LADO DE FORA DO FOREACH
// function add1(item, idx){
//   fruits[idx] = item +1
// }
// fruits.forEach(add1)

// EXEMPLO DE UMA FUNÇÃO ANONIMA (ARROW FUNCTION) CRIADA APENAS DENTRO DO FOREACH
// fruits.forEach(
//   (item, idx) => {
//     fruits[idx] = item + 1
//   }
// )
// fruits.forEach((item, idx) => fruits[idx] = item+1)
// console.log(fruits)



// const fruitsAfterMap = fruits.map((item) => item.toUpperCase())
// console.log(fruits)
// console.log(fruitsAfterMap)


// const ageGreaterThan15 = ages.filter((a) => a >= 20)
// console.log(ages)
// console.log(ageGreaterThan15)

// const asd = fruits.find((i) => i === "grape")
// console.log(asd)
