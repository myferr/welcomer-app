function registeraccount() {
    localStorage.setItem('username', document.getElementById('username').value);
    localStorage.setItem('accountCreated', 1);
    location = ('../app/')
}