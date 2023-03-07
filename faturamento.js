fetch('./dados.json').then(response => {
  return response.json()
}).then(body => {
  var body = body
  let higher = 0
  let smaller = 100000000
  let count = 0
  let days = 0
  for(let i = 0; i < body.length; i++) {
    if(body[i].valor > higher) {
      higher = body[i].valor
    }
    if(body[i].valor < smaller) {
      smaller = body[i].valor
    }

    if(body[i].valor > 0) {
      count += body[i].valor
      days ++
    }
  }

  let avg = count/days
  let sum = 0

  for(let c = 0; c < body.length; c++) {
    if(body[c].valor > avg) {
      sum ++
    }
  }
  

  document.getElementById('1').innerHTML = higher
  document.getElementById('2').innerHTML = smaller
  document.getElementById('3').innerHTML = sum
})



