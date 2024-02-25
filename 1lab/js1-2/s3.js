function median(...arr) {
    let sorted = arr.sort((a,b)=>a-b)
    let middle = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2
    } else {
        return sorted[middle]
    }
}

let num = [1,3,4,5,2,3,4,5]
//let num2 = [...num, 2,2,3]
alert(median(1,3,4,5,2,3,4,5) +" and "+ median(...num))

