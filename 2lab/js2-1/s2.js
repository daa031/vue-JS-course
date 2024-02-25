function loadImage(url) {
    let promise = new Promise (
        function(resolve, reject) {
        let image = new Image
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject (new Error("Can’t load image" + url))
        } )
    return promise
}



//let url1 = prompt("url1:")
//let url2 = prompt("url2:")
//let url3 = prompt("url3:")
//let url4 = prompt("url4:")
//let url5 = prompt("url5:")

//let url1 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url1 = 'https://avatars.mds.yandex.net/i?id=58f20dc4536a669e55e59fd2e7a1c576cb09f782-10754985-images-thumbs&n=13'
let url2 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url3 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url4 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url5 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'

// let promise = loadImage(url)
// promise.then(
//     function (image) {alert("загружена " + image.src)},
//     function (errror) {alert("не получилось")}
// )



const textElement  = document.querySelector('.image');
//const textElementContent = textElement.innerHTML;
//textElement.innerHTML = 'qqqqqqqqqqq'; 
// textElement.innerHTML = `${textElementContent} <p> Can't load image</p>`

function addImage(image){
    //const textElementContent = textElement.innerHTML;
    //textElement.innerHTML = `${textElementContent} <p> 1   </p>`
    textElement.appendChild(image);
}

function cantAddImage(){
    textElement.innerHTML = `<p> Can't load imssssage</p>`
}
//document.querySelector('.pictures').innerHTML = '12112ssssssssss';

//по очереди загружаю картинки
loadImage(url1)
.then(
    function (image){
        console.log(image.src + "loaded")
        addImage(image)
        return loadImage(url2)
    },
    function(errror) {
        cantAddImage()
        //alert("ошибка=" + errror.message)
    }
)
.then(
    function (image){
        console.log(image.src + "       loaded")
        addImage(image)
        return loadImage(url3)
    },
    function(errror) {cantAddImage()}
)
.then(
    function (image){
        console.log(image.src + "       loaded")
        addImage(image)
        return loadImage(url4)
    },
    function(errror) {cantAddImage()}
)
.then(
    function (image){
        console.log(image.src + "       loaded")
        addImage(image)
        return loadImage(url5)
    },
    function(errror) {cantAddImage()}
)
.then(
    function (image){
        console.log(image.src + "loaded")
        addImage(image)
        //alert("все 5 картинок загружены")
    },
    function(errror) {cantAddImage()}
)

