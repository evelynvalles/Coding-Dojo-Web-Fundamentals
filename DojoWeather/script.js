var cookieDiv = document.querySelector('.cookie-box');

function loading() {
    alert("Loading weather report....");
}

function removeCookie() {
    cookieDiv.remove();
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32); 
}

function convert(element) {
    for (var i = 1; i < 9; i++) {
        var tempSpan = document.querySelector('#temp' + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°F") {
            tempSpan.innerText = c2f(tempVal);
        } else {
            tempSpan.innerText = f2c(tempVal);
        }
    }
}