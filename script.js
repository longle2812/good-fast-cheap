let good = document.getElementById("button1");
let fast = document.getElementById("button2");
let cheap = document.getElementById("button3");
good.addEventListener("click", checkgood);
fast.addEventListener("click", checkfast);
cheap.addEventListener("click", checkcheap);

function checkgood() {
    let goodcheck = good.checked;
    let fastcheck = fast.checked;
    let cheapcheck = cheap.checked;
    if (goodcheck) {
        if ((fastcheck) && (cheapcheck)) {
            fast.checked = false;
        }
    }
}
function checkfast () {
    let goodcheck = good.checked;
    let fastcheck = fast.checked;
    let cheapcheck = cheap.checked;
    if (fastcheck) {
        if ((goodcheck) && (cheapcheck)) {
            cheap.checked = false;
        }
    }
}
function checkcheap () {
    let goodcheck = good.checked;
    let fastcheck = fast.checked;
    let cheapcheck = cheap.checked;
    if (cheapcheck) {
        if ((goodcheck) && (fastcheck)) {
            good.checked = false;
        }
    }
}