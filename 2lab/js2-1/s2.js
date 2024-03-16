
function loadImage(url) {
    let promise = new Promise (
        function(resolve, reject) {
        let image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject (new Error("Can’t load image" + url))
        } )
    return promise
}

const textElement = document.querySelector('.image');

function addImage(image){
    textElement.appendChild(document.createElement('br'));
    textElement.appendChild(image);
}

function cantAddImage(){
    textElement.appendChild(document.createElement('br'));
    textElement.innerHTML += `<p> Can't load image</p>`
}

textElement.appendChild(document.createElement('br'));

// let url1 = prompt("url1:")
// let url2 = prompt("url2:")
// let url3 = prompt("url3:")
// let url4 = prompt("url4:")
// let url5 = prompt("url5:")

let url1 = 'https://avatars.mds.yandex.net/i?id=58f20dc4536a669e55e59fd2e7a1c576cb09f782-10754985-images-thumbs&n=13'
let url2 = 'https://avata rs.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url3 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url4 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'
let url5 = 'https://avatars.mds.yandex.net/i?id=0c62e0f81aa87b38f21153a74eea490373542651-10972138-images-thumbs&n=13'


let urls = [url1, url2, url3, url4, url5]

for (let i = 0; i <  urls.length; i++){
    loadImage(urls[i])
    .then(
        function (image){
            addImage(image)
        },
    ) 
    .catch(
        function (errror) {
            cantAddImage()
        }
    )
} 


loadImage(urls[0])
.then(
    function(image){
        addImage(image)
        return loadImage(urls[1])
    },
)
.then(
    function(image){
        addImage(image)
        return loadImage(urls[2])
    },
)
.catch
async function f(){
    try{
        let p1 = await loadImage(urls[0])
        let p2 = await loadImage(urls[1])
        return [p1,p2]
    }
    catch (error){
        cantAddImage()
    }
}

f() 


//.map 
//.for
// async function f(){
//     let pict1 = await loadImage(urls[])
//     let pict1 = await loadImage(urls[])

// }




