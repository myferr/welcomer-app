const accountCreated = localStorage.getItem('accountCreated');

function getwelcomer() {
    if (accountCreated == 1) {
        location = ('app/index.html');
    } else {
        location = ('account/welcome.html');
    }
}