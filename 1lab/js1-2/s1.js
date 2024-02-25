let list = prompt("введите список чисел через запятую")

let numbers = list.split(',').map(Number)

let sortnumbers = numbers.sort((a,b)=>a-b)

alert(sortnumbers)

