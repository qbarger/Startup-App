const userNameEl = document.querySelector('.player-name');
userNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('username') ?? 'Unkown';
};


