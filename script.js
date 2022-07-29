var likes = [9,12,9];

var posts = [
    document.querySelector('#likes1'),
    document.querySelector('#likes2'),
    document.querySelector('#likes3')
]


function likesCount(id) {
    likes[id]++;
    posts[id].innerText = likes[id];
}