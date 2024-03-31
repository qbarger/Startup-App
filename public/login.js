/*
function nameLogin() {
    const nameEL = document.querySelector('#name');
    localStorage.setItem('username', nameEL.value);
    window.location.href = "solarsystem.html";
}

function passLogin() {
    const passEL = document.querySelector('password');
    localStorage.setItem('password', passEL.value);
}
*/

(async () => {
    const userName = localStorage.getItem('username');
    if (userName) {
        document.querySelector('#player-name').textContent = userName;
    }
})();

async function loginUser() {
    signInOrUp(`/api/auth/login`);
}

async function createUser() {
    signInOrUp(`/api/auth/create`);
}

async function signInOrUp(endpoint){
    const userName = document.querySelector('#name');
    const password = document.querySelector('#password');
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if(response.ok){
        localStorage.setItem('username', userName);
        window.location.href = 'solarsystem.html';
    } else {
        const body = await response.json();
        const modalEL = document.querySelector('#msgModal');
        modalEL.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEL, {});
        msgModal.show();
    }
}

function logout(){
    localStorage.removeItem(`userName`);
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}

/*
async function getUser(email){
    const response = await fetch(`/api/user/${email}`);
    if(response.status === 200){
        return response.json();
    }
    return null;
}
*/