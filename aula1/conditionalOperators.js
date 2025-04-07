const name1 = "Bernardo";
const name2 = "Bernardo Lopes";

const year = 2015;
const yearString = "2015";
const currentYear = 2025;

const esse = "esse";
const aquele = "aquele";
const value = "esse";

"1" == 1 // true
"1" === 1 //false

// equality - igualdade
console.log(name1 == name2); // false
console.log(name1 === name2); // false

console.log(year == currentYear); // false
console.log(year === currentYear); // false

console.log(year == yearString); // true
console.log(year === yearString); // false

// inequality - desigualdade
console.log(name1 != name2); // true
console.log(name1 !== name2); // true

// or - ou
console.log(value === esse || value === aquele); // true

// and - e
console.log(value === esse && value === aquele); // false

// greater than - maior que
console.log(year > currentYear); // false

// less than - menor que
console.log(year < currentYear); // true

// greater than or equal to - maior ou igual que
console.log(year >= currentYear); // true

// less than or equal to - menor ou igual que
console.log(year <= currentYear); // false