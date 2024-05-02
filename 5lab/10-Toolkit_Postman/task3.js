const axios = require('axios');

const url = 'https://json.geoiplookup.io/';

axios.get(url)
    .then(response => {
        console.log('ответ:', response.data);
    })
    .catch(error => {
        console.error('ошибка:', error);
    });
    
