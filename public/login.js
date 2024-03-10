function nameLogin() {
    const nameEL = document.querySelector('#name');
    localStorage.setItem('username', nameEL.value);
    window.location.href = "solarsystem.html";
}

function passLogin() {
    const passEL = document.querySelector('password');
    localStorage.setItem('password', passEL.value);
}