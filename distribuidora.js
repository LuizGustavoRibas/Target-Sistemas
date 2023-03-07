let array = [ 
  {
    valor: 67836.43,
    estado: 'SP'
  }, 
  {
    valor:36678.66,
    estado: 'RJ'
  },
  {
    valor: 29229.88,
    estado: 'MG'
  },
  {
    valor: 27165.48,
    estado: 'ES'
  },
  {
    valor: 19849.53,
    estado: 'Outros'
  }
]
let sum = 0
for(let i = 0; i < array.length; i++) {
  sum += array[i].valor 
}

let data = [
  {
    percentage: 0,
    estado: 'SP'
  }, 
  {
    percentage: 0,
    estado: 'RJ'
  },
  {
    percentage: 0,
    estado: 'MG'
  },
  {
    percentage: 0,
    estado: 'ES'
  },
  {
    percentage: 0,
    estado: 'Outros'
  }
]

for(let c = 0; c < array.length; c++) {
  data[c].percentage = Math.floor(array[c].valor * 100 / sum) + '%'
}

console.log(data)