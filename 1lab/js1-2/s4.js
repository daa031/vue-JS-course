function f4(str) {
    const stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push("(")
        } else if (str[i] === ")") {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0
}

let str = prompt()

if (f4(str)) {
    alert("Правильная")
} else {
    alert("Неправильная")
}
