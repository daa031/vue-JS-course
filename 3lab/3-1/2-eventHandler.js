let body = document.body

function selectHandler(e){
    e.preventDefault()
}

function rightClickHandler(e){
    e.preventDefault()
}

body.addEventListener("selectstart", selectHandler)

//хз поч не работает
//body.addEventListener("contextmenu", rightClickHandler)



// function copyHandler(e){
//     e.preventDefault()
//     e.clipboardData.setData("text/plain", "копировать нельзя!!!");
// }
//body.addEventListener("copy", copyHandler)




//задание 3,4
//localStorage.clear()

let count = localStorage.getItem('loadCount') || 0
let clicker = document.querySelector(".clicker")
let cleanCounter = document.querySelector(".cleanCounter")
let counter = document.querySelector(".counter")
let averageValue = document.querySelector(".averageValue")

counter.textContent = count
let t1 = new Date()

function clickHandler(){
    console.log("click")
    count++
    if (count == 1){
        t1 = new Date()
    }
    localStorage.setItem('loadCount', count)   
    counter.textContent = count

}
function cleanCounterHandler(){
    console.log("click cleanCounterHandler")
    count = 0
    localStorage.setItem('loadCount', 0)   
    counter.textContent = count
}
clicker.addEventListener("click", clickHandler)
cleanCounter.addEventListener("click", cleanCounterHandler)

function updateAverageValue(){
    let t2 = new Date()
    let avg =  count / ((t2.getTime() - t1.getTime()) /1000)
    averageValue.textContent = avg.toFixed(2)
}



setInterval(updateAverageValue, 1000);




//calculator
let resBar = document.querySelector(".resBar")


let nine = document.querySelector(".nine")

function nineClickHandler(){
    resBar.textContent += '9'
    console.log("nine")
}

nine.addEventListener("click",nineClickHandler)

let plus = document.querySelector(".plus")

function plusClickHandler(){
    resBar.textContent += '+'
    console.log("plus")
}
plus.addEventListener("click",plusClickHandler)




