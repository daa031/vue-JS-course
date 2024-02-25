function isPalindrome(str) {
    let str2 = str.split('').reverse().join('')
    return str2 === str
}

let str = prompt("введите строку:")

if (isPalindrome(str)) {
    alert("Да")
} else {
    alert("Нет")
}
