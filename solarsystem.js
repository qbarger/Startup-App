const travelEvent = 'travel';


const userNameEl = document.querySelector('.player-name');
userNameEl.textContent = getPlayerName();

function getPlayerName() {
    return localStorage.getItem('username') ?? 'Unkown';
}


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
}

function getElementId(planetNumber) {
    switch (planetNumber) {
        case 1:
            return 'the sun';
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
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
        console.log("on open");
        displayMsg('players', 'You', 'logged in...');
    };
    this.socket.onclose = async (event) => {
        console.log("on close");
        displayMsg('players', 'You', `logged out...`);
    };
    this.socket.onmessage = async (event) => {
        console.log("on message");
        const text = await event.data.text();
        const msg = JSON.parse(text);
        displayMsg('players', msg.from, `traveled to ${msg.value}...`);
    };
}

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML = `<div class="simulate"><span class="${cls}">${from}</span> ${msg}</div></br>` + chatText.innerHTML;
}

function broadcastEvent(from, type, value){
    setTravelLog(value);
    const newValue = getElementId(value);

    const event = {
        from: from,
        type: type,
        value: newValue,
    };
    socket.send(JSON.stringify(event));
}
configureWebSocket();
getTravelLog();

