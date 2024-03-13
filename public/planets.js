window.onload = async function(data){
    if(window.location.pathname === "/sun.html"){
        localStorage.setItem('')
    }
}

const userNameEl = document.querySelector('.player-name');
userNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('username') ?? 'Unkown';
};


