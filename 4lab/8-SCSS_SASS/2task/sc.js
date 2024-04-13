let body = document.body

for(let i = 0; i < 100; i++){
    let div = document.createElement("div")
    div.className = "n" + (i + 1)
    div.textContent = String(i + 1)
    body.appendChild(div)
}
//<div class="ni">i</div>