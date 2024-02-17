function calc(numbers) {
    let num = numbers.map(function(number) {
        return number % 5
    })
    return num
}

let list = prompt("введите список чисел через запятую")
let arr = list.split(',').map(Number)

let result = calc(arr)

alert("result: "+result)