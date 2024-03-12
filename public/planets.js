window.onload = async function(data){
    if(window.location.pathname === '/sun.html'){
        fetch('https://en.wikipedia.org/wiki/Sun')
            .then((response) => response.json())
            .then((data) => {
                const container = document.querySelector('#sun');
                const info = document.createElement('s');
                info.classList.add('sun')
                info.textContent = data.content;
                container.append(info);
            })
    }
}

const userNameEl = document.querySelector('.player-name');
userNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('username') ?? 'Unkown';
};


