function login (element) {
    if (element.innerText == 'Login') {
        element.innerText = 'Logout';
    } else {
        element.innerText = 'Login';
    }
}

function removeDef(element) {
    element.remove();
}

function likeButton(element) {
    alert('Ninja was liked');
}