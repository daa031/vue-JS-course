let count
if (localStorage.getItem('loadCount')){
    count = localStorage.getItem('loadCount')
} else {
    count = 0
}

// let count = localStorage.getItem('loadCount') || 0


count++

localStorage.setItem('loadCount', count)

alert("обновили страницу " + count + " раз.")

//localStorage.clear()


