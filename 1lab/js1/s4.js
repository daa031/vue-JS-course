let Counter = {
    count: 5,
    add: function(value){
        this.count += Number(value)
    },
    sub: function(value){
        this.count -= Number(value)
    }
}

let value = prompt("введите value")

let mode = prompt("введите операцию")
let tmp = Counter.count
alert("было  " + tmp)

if (mode === "+"){
    Counter.add(value)
}else if(mode === "-"){
    Counter.sub(value)
}else{
    alert("неизвестная операция")
}

alert("стало   " + Counter.count)
