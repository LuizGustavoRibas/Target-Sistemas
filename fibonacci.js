let input = 14
let array = [] 
let n1 = 0
let n2 = 1
let n3 = 0

while (n3 <= input) {
  array.push(n3)
  n3 = n1 + n2
  n1 = n2
  n2 = n3
}

if(array[array.length - 1] == input) {
  console.log('Número pertencente a sequência de Fibonacci')
} else (
  console.log('Número NÃO pertencente a sequência de Fibonacci')
)
