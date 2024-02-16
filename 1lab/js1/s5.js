

let list = prompt("Введите список слов:")

//list = list.replace(/,/g, ".");

let list2 = list.split('')
for (let i = 0; i < list2.length; i++){
    if (list2[i] === ',' ){ list2[i] = '.'}
}

list = list2.join('');

alert("="+list)




