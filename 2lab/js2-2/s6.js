


Array.prototype.reverse = function() {
    return this.concat([...this])
}

let array = [1, 2, 3, 4, 5]

console.log(array)
console.log(array.reverse())