// 1
function reload() {
    let reload = +sessionStorage.getItem("reload"); // null --> 0
    ++reload;
    sessionStorage.setItem("reload", reload);

    document.getElementById("reload").innerText = reload;
    alert(`The page reloaded ${reload} times!`);
}

function loadImg(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        img.height = 100;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Can't load image: "${url}"`));
    });
}


function getImgsUrls(count = 0) {
    const urls = [];
    if (count > 0) for (let i = 0; i < count; ++i) urls.push(prompt("Enter URL of image"));
    else {
        urls.push("https://breaked.net/img.jpg");
        urls.push("https://bigfoto.name/uploads/posts/2022-03/1647521419_1-bigfoto-name-p-loading-1.png");
        urls.push("https://breaked.net/img2.jpg");
        urls.push("https://breaked.net/img3.jpg");
        urls.push("https://cms3.ru/wp-content/uploads/2019/02/loading-645268_1280.jpg");
    }
    return urls;
}

//2
function imgsCP() {
    const sectionEl = document.getElementById("imgs-consecutive_promises");
    const urls = getImgsUrls();
    let flag = true;

    loadImg(urls[0]).then(
        (img) => {
            sectionEl.insertAdjacentElement("beforeend", img);
            return loadImg(urls[1]);
        },
        (error) => {
            flag = false;
            sectionEl.insertAdjacentHTML("beforeend", `<p> ${error.message} </p>`);
            return loadImg(urls[1]);
        }
    ).then(
        (img) => {
            sectionEl.insertAdjacentElement("beforeend", img);
            return loadImg(urls[2]);
        },
        (error) => {
            flag = false;
            sectionEl.insertAdjacentHTML("beforeend", `<p> ${error.message} </p>`);
            return loadImg(urls[2]);
        }
    ).then(
        (img) => {
            sectionEl.insertAdjacentElement("beforeend", img);
            return loadImg(urls[3]);
        },
        (error) => {
            flag = false;
            sectionEl.insertAdjacentHTML("beforeend", `<p> ${error.message} </p>`);
            return loadImg(urls[3]);
        }
    ).then(
        (img) => {
            sectionEl.insertAdjacentElement("beforeend", img);
            return loadImg(urls[4]);
        },
        (error) => {
            flag = false;
            sectionEl.insertAdjacentHTML("beforeend", `<p> ${error.message} </p>`);
            return loadImg(urls[4]);
        }
    ).then(
        (img) => sectionEl.insertAdjacentElement("beforeend", img),
        (error) => {
            flag = false;
            sectionEl.insertAdjacentHTML("beforeend", `<p> ${error.message} </p>`);
        }
    ).finally(() => console.log("Done!"));
}

//3
function imgsAP() {
    const sectionEl = document.getElementById("imgs-async_promises");
    const urls = getImgsUrls();
    let flag = true;

    Promise.allSettled([
        loadImg(urls[0]),
        loadImg(urls[1]),
        loadImg(urls[2]),
        loadImg(urls[3]),
        loadImg(urls[4]),
    ]).then((res) => {
        for (let i = 0; i < res.length; ++i) {
            if (res[i].status == "fulfilled") sectionEl.insertAdjacentElement("beforeend", res[i].value);
            else {
                flag = false;
                sectionEl.insertAdjacentHTML("beforeend", `<p> ${res[i].reason} </p>`);
            }
        }
    }).finally(() => console.log("Done!"));
}

async function awaitLoadImgs(urls) {
    const imgs = [];
    for (let i = 0; i < urls.length; ++i) {
        try { imgs.push(await loadImg(urls[i])) } 
        catch (e) { imgs.push(e.message) }
    }
    return imgs;
}

async function asyncLoadImgs(urls) {
    const imgs = [];
    for (let i = 0; i < urls.length; ++i) imgs.push(loadImg(urls[i]));
    return imgs;
}

//4
function imgsAA() {
    const sectionEl = document.getElementById("imgs-async_await");
    const urls = getImgsUrls();
    let flag = true;

    awaitLoadImgs(urls).then((imgs) => {
        for (let i = 0; i < imgs.length; ++i) {
            if (typeof(imgs[i]) == "string") {
                flag = false;
                sectionEl.insertAdjacentHTML("beforeend", `<p> ${imgs[i]} </p>`);
            } else sectionEl.insertAdjacentElement("beforeend", imgs[i]);
            if (i == imgs.length - 1) sectionEl.insertAdjacentHTML("beforeend", `<hr>`);
        }
    }).finally(() => console.log("Done!"));

    flag = true;
    asyncLoadImgs(urls).then((imgs) => {
        for (let i = 0; i < imgs.length; ++i) {
            imgs[i].then((img) => {
                sectionEl.insertAdjacentElement("beforeend", img);
            }).catch((e) => {
                flag = false;
                sectionEl.insertAdjacentHTML("beforeend", `<p> ${e.message} </p>`);
            });
            if (i == imgs.length - 1) sectionEl.insertAdjacentHTML("beforeend", `<hr>`);
        }
    }).finally(() => console.log("Done!"));       
}

function isLikeIP(strIP) {
    const arr = strIP.split(".");
    const layout = /^(\d|([1-9]\d{1,2}))$/;
    if (arr.length != 4) return false;
    for (let i = 0; i < 4; ++i) if (!layout.test(arr[i]) || +arr[i] > 255) return false;
    return true;
}


function getIp() {
    let inputStr = prompt("Enter IP address");
    if (+inputStr == 0) return null;
    while (inputStr.length == 0 || !isLikeIP(inputStr)) {
        inputStr = prompt("Invalid format! Enter IP address");
        if (+inputStr == 0) return null;
    }
    return inputStr;
}


function getIps(count = -1) {
    const urls = [];
    if (count > 0) for (let i = 0; i < count; ++i) {
        let item = getIp();
        if (+item == 0) return [];
        urls.push(item);
    }
    else {
        urls.push("142.251.32.36");     
        urls.push("5.255.255.242");     
        urls.push("93.125.23.55");      
        urls.push("14.103.24.148");     
    }
    return urls;
}

//5
function ipChecker() {
    const IPs = getIps(5);
    if (IPs.length == 0) {
        alert("Canceled...");
        return;
    }
    console.dir(IPs);
    
    const elem = document.getElementById("ip_checker");
    const API = "https://json.geoiplookup.io/";
    const restricted = [ "RU", "BY", "AF", "CN", "VE", "IR" ];

    let flag = 0;
    for (let i = 0; i < IPs.length; ++i) {
        fetch(`${API}/${IPs[i]}`).then((response) => response.json()).then((data) => {
            if (restricted.includes(data.country_code, 0)) {
                const txt = `Our services are not available in your country (${data.country_name})`;
                if (flag == 0) elem.innerText = txt;
                else elem.innerText += `\n${txt}`;
                ++flag;
            }
            // else {...}
            console.dir(data);
        });
        if (flag > 0) break;
    }
}

// reload();
// imgsCP();
// imgsAP();
//imgsAA();
// ipChecker();