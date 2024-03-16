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


let url1 = 'https://avatars.mds.yandex.net/i?id=58f20dc4536a669e55e59fd2e7a1c576cb09f782-10754985-images-thumbs&n=13'
let url2 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url3 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url4 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url5 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'


const textElement  = document.querySelector('.image');

function addImage(image){
    textElement.appendChild(image);
}

function cantAddImage(){
    textElement.innerHTML = `<p> Can't load image</p>`
}

Promise.all([
    loadImage(url1),
    loadImage(url2),
    loadImage(url3),
    loadImage(url4),
    loadImage(url5)
])
.then(
    function(result){
        addImage(result[0])
        addImage(result[1])
        addImage(result[2])
        addImage(result[3])
        addImage(result[4])
    },
    function(errror) {
        cantAddImage()
    }
)