// crie uma solução passo a passo para resolver uma equação de segundo grau

// x2 - 6x + 5 = 0     (x=1 e x=5)
// 4x2 - 16 = 0     (x=-2 e x=2)
// 5x - 25 = 0      (x=5)

// Ax2 + Bx + C = 0

function solveEquation(A, B, C) {
  if(A === 0) {
    const x = -C/B
    return x
  }

  const delta = B**2 - 4*A*C

  const x1 = (-B + Math.sqrt(delta))/(2*A)
  
  const x2 = (-B - Math.sqrt(delta))/(2*A)
  
  return [x1, x2]
}

const values = solveEquation(1,-6,5)

console.log(values)