// crie uma solução passo a passo para resolver uma equação de segundo grau

// x2 - 6x + 5 = 0     (x=1 e x=5)
// 4x2 - 16 = 0     (x=-2 e x=2)
// 5x - 25 = 0      (x=5)

// Ax2 + Bx + C = 0

const A = 1

const B = -6

const C = 5

if(A === 0) {
  const x = -C/B
  console.log(x)
} else {
  const delta = B**2 - 4*A*C

  const x1 = (-B + Math.sqrt(delta))/(2*A)
  
  const x2 = (-B - Math.sqrt(delta))/(2*A)
  
  console.log("x1: ",x1)
  console.log("x2: ",x2)
}
