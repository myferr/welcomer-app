const username = localStorage.getItem('username');

document.getElementById('user').innerText = localStorage.getItem('username');
document.title = (`Welcome back, ${username}! — Welcomer`)

function search() {
    let query = document.getElementById('search-bar').value;
    location = ("https://www.google.com/search?q=" + query);
}