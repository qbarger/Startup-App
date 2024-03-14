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
    chatText.innerHTML = `<span class="simulate"><span class="players">John</span> visited ${planet}! </span></br>` + chatText.innerHTML;
}, 5000);


async function setTravelLog(planetName){
    let travelLog = [];
    
    try {
        const response = await fetch('/api/update', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(planetName),
        });
        travelLog = await response.json();
        localStorage.setItem('travelLog', JSON.stringify(travelLog));
    } catch {
        const lastLog = localStorage.getItem('travelLog');
        if(lastLog){
            travelLog = JSON.parse(lastLog);
        }

        let found = false;
        travelLog.forEach(names => {
            if(names === planetName){
                found = true;
            }
        });

        if(!found){
            travelLog.push(planetName);
        }
        localStorage.setItem('travelLog', JSON.stringify(travelLog));
    }
}

async function getTravelLog(){
    let travelLog = [];
    try {
        const response = await fetch('/api/log');
        travelLog = await response.json();
        localStorage.setItem('travelLog', JSON.stringify(travelLog));

        travelLog.forEach(names => {
            if(names === 'sun'){
                document.getElementById('#Sun').className = 'btn btn-outline-primary';
            }
        });
    } catch {
        const lastLog = localStorage.getItem('travelLog');
        if(lastLog != null){
            setTravelLog(lastLog);
        }
    }
}

getTravelLog();

