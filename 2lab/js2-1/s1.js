// let count = localStorage.getItem('loadCount') || 0;
let count;
if (localStorage.getItem('loadCount')){
    count = localStorage.getItem('loadCount');
} else {
    count = 0;
}

count++;

localStorage.setItem('loadCount', count);

// Выводим информацию пользователю
alert('Вы загрузили/обновили страницу ' + count + ' раз.');

//localStorage.clear();