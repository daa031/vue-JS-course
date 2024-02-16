function isSimple(num){
    if (num <= 1) {
        return false
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function generateList(n) {
    const simple = []
    let num = 2

    while (simple.length < n) {
        if (isSimple(num)) {
            simple.push(num)
        }
        num++
    }

    return simple
}


let n = prompt("введите n")

const simple = generateList(n)

alert(simple.join(' '));

alert(simple) 

