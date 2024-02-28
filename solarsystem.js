
const userNameEl = document.querySelector('.player-name');
userNameEl.textContent = this.getPlayerName();
    

function getPlayerName() {
    return localStorage.getItem('username') ?? 'Unkown';
}

let a = ("the Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune");

setInterval(() => {
    const index = Math.floor(Math.random() * a.length);
    let planet;
    if(index === 0){
        planet = "the Sun";
    }
    if(index === 1){
        planet = "Mercury";
    }
    if(index === 2){
        planet = "Venus";
    }
    if(index === 3){
        planet = "Earth";
    }
    if(index === 4){
        planet = "Mars";
    }
    if(index === 5){
        planet = "Jupiter";
    }
    if(index === 6){
        planet = "Saturn";
    }
    if(index === 7){
        planet = "Uranus";
    }
    if(index === 8){
        planet = "Neptune";
    }
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML = `<div class="simulate"><span class="players">John</span> visited ${planet}! </div></br>` + chatText.innerHTML;
}, 5000);

/*
setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
    `<section class="simulate"><span class="player-messages">John</span> visited ${score} </section>` + chatText.innerHTML;
  }, 5000);
*/