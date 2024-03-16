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

//-----без учета порядка следования URL--------
async function loadAll(){
    try{
        let i1 = await loadImage(url1)
        let i2 = await loadImage(url2)
        let i3 = await loadImage(url3)
        let i4 = await loadImage(url4)
        let i5 = await loadImage(url5) 
        return [i1, i2, i3, i4, i5]
    } catch(error){ 
        console.log('Error:', error)
        cantAddImage()
        return null
    }
}

let promise = loadAll()

promise.all

//
// loadAll()
// .then(
//     function(result){
//         addImage(result[0])
//         addImage(result[1])
//         addImage(result[2])
//         addImage(result[3])
//         addImage(result[4])
//     },
//     function(errror) {
//         cantAddImage()
//     }
// )
//---------------------------------------------


// // -----картинки на страницу подряд как---------------
// async function loadSequentially() {
//     const urls = [url1, url2, url3, url4, url5]
//     const images = []

//     for (let i = 0; i < urls.length; i++) {
//         try {
//             const image = await loadImage(urls[i])
//             images.push(image)
//         } catch (error) {
//             cantAddImage()
//             return
//         }
//     }

//     return images;
// }

// loadSequentially()
//     .then(
//         function(result) {
//             addImage(result[0])
//             addImage(result[1])
//             addImage(result[2])
//             addImage(result[3])
//             addImage(result[4])
//         },
//         function(error) {
//             cantAddImage()
//         }
//     );










// Promise.all([
//     loadImage(url1),
//     loadImage(url2),
//     loadImage(url3),
//     loadImage(url4),
//     loadImage(url5)
// ])
// .then(
//     function(result){
//         addImage(result[0])
//         addImage(result[1])
//         addImage(result[2])
//         addImage(result[3])
//         addImage(result[4])
//     },
//     function(errror) {
//         cantAddImage()
//     }
// )