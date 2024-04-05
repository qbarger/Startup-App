const userNameEl = document.querySelector('.player-name');
userNameEl.textContent = this.getPlayerName();

const travelEvent = 'travel';
    

function getPlayerName() {
    return localStorage.getItem('username') ?? 'Unkown';
}

/*
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
    chatText.innerHTML = `<span class="simulate"><span class="players">John</span> visited ${planet}! </span></br>` + chatText.innerHTML;
}, 5000);
*/


async function setTravelLog(planetNumber) {
    let travelLog = [];
    
    try {
        const response = await fetch('/api/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({planetNumber})
        });
        const responseData = await response.json();
        const travelLogText = responseData.travelLog;
        travelLog = JSON.parse(travelLogText);
        sessionStorage.setItem('travelLog', JSON.stringify(travelLog));
    } catch (error) {
        console.error('Error:', error);
        const travelLogText = sessionStorage.getItem('travelLog');
    if(travelLogText){
        travelLog = JSON.parse(travelLogText);
    }
    else {
        travelLog = [];
    }

    let found = false;
    for(let i = 0; i < travelLog.length; i++){
        if (travelLog[i] === planetNumber) {
            found = true;
        }
    }
    if (!found) {
        travelLog.push(planetNumber);
    }
    
    sessionStorage.setItem('travelLog', JSON.stringify(travelLog));
    }
}

async function getTravelLog() {
    let travelLog = [];
    
    const travelLogText = sessionStorage.getItem('travelLog');
    travelLog = JSON.parse(travelLogText);
    for (let i = 0; i < travelLog.length; i++) {
        console.log(travelLog[i]);
        const elementId = getElementId(travelLog[i]);
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.className = "btn btn-outline-primary";
            }
        }
    }
    this.configureWebSocket();
}

function getElementId(planetNumber) {
    switch (planetNumber) {
        case 1:
            return 'sun';
        case 2:
            return 'mercury';
        case 3:
            return 'venus';
        case 4:
            return 'earth';
        case 5:
            return 'mars';
        case 6:
            return 'jupiter';
        case 7:
            return 'saturn';
        case 8:
            return 'uranus';
        case 9:
            return 'neptune';
        default:
            return null;
    }
}

function logout(){
    localStorage.removeItem(`userName`);
    sessionStorage.removeItem('travelLog');
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
        //this.displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
        this.displayMsg('players', 'You', 'traveled to ');
    };
    this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        this.displayMsg('player', msg.from, `traveled to ${msg.value.planet}`);
    };
}

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML = `<span class="simulate"><span class="${cls}">${from}</span> ${msg}</span></br>` + chatText.innerHTML;
}

function broadcastEvent(from, type, value){
    const event = {
        from: from,
        type: type,
        value: value,
    };
    this.socket.send(JSON.stringify(event));
}

getTravelLog();

