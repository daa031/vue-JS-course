let list = prompt("Введите список слов:")

//let list2 = list.split('')
for (let i = 0; i < list.length; i++){
    if (list[i] === ',' ){ list[i] = '.'}
}

//list = list2.join('')

alert(list)




