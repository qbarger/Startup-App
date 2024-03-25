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


async function setTravelLog(planetNumber) {
    let travelLog = [];
    /*
    try {
        const response = await fetch('/api/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, // Corrected header name
            body: JSON.stringify({num}) // Stringify the JSON object
        });
        const responseData = await response.json(); // Parse the JSON response
        travelLog = responseData.travelLog; // Assuming the server returns travelLog
        sessionStorage.setItem('travelLog', JSON.stringify(travelLog)); // Stringify the object before storing
    } catch (error) {
        console.error('Error:', error);
        const lastLogString = sessionStorage.getItem('travelLog');
        if (lastLogString) {
            travelLog = JSON.parse(lastLogString); // Parse the stored string
        }

        let found = false;
        travelLog.forEach(name => {
            if (name === planetName) {
                found = true;
            }
        });

        if (!found) {
            travelLog.push(planetName);
        }
        sessionStorage.setItem('travelLog', JSON.stringify(travelLog)); // Stringify the object before storing
    }
    */
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

async function getTravelLog() {
    let travelLog = [];
    const travelLogText = sessionStorage.getItem('travelLog');
    if (travelLogText) {
        travelLog = JSON.parse(travelLogText);
    }
    /*
    try {
        const response = await fetch('/api/log');
        if (!response.ok) {
            throw new Error('Failed to fetch travel log');
        }
        const responseData = await response.json();
        travelLog = responseData.travelLog;
        sessionStorage.setItem('travelLog', JSON.stringify(travelLog));

        for (let element of travelLog) {
            console.log(element);
            const elementId = getElementId(element);
            if (elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                    element.className = "btn btn-outline-primary";
                }
            }
        }
    } catch (error) {
        console.error('Error:', error);
        const lastLog = sessionStorage.getItem('travelLog');
        if (lastLog) {
            travelLog = JSON.parse(lastLog);
            getTravelLog(lastLog);
        }
    }
    */
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

/*
async function setTravelLog(planetNumber){
    let travelLog = [];
    const num = planetNumber;
    try {
        const response = await fetch('/api/update', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: num
        });
        travelLog = await response.json();
        sessionStorage.setItem('travelLog', travelLog);
    } catch {
        const lastLog = sessionStorage.getItem('travelLog');
        if(lastLog){
            travelLog = lastLog;
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
        sessionStorage.setItem('travelLog', travelLog);
    }
}
*/

/*
async function getTravelLog(){
    
    const travelLogText = sessionStorage.getItem('travelLog'); 
    const travelLog = travelLogText;
    
    try {
        const response = await fetch('/api/log');
        travelLog = await response.json();
        sessionStorage.setItem('travelLog', travelLog);

        for(var element of travelLog){
            console.log(element);
            if(element === 1){
                const element = document.getElementById('sun');
                element.className = "btn btn-outline-primary";
            } else if(element === 2){
                const element = document.getElementById('mercury');
                element.className = "btn btn-outline-primary";
            } else if(element === 3){
                const element = document.getElementById('venus');
                element.className = "btn btn-outline-primary";
            } else if(element === 4){
                const element = document.getElementById('earth');
                element.className = "btn btn-outline-primary";
            } else if(element === 5){
                const element = document.getElementById('mars');
                element.className = "btn btn-outline-primary";
            } else if(element === 6){
                const element = document.getElementById('jupiter');
                element.className = "btn btn-outline-primary";
            } else if(element === 7){
                const element = document.getElementById('saturn');
                element.className = "btn btn-outline-primary";
            } else if(element === 8){
                const element = document.getElementById('uranus');
                element.className = "btn btn-outline-primary";
            } else if(element === 9){
                const element = document.getElementById('neptune');
                element.className = "btn btn-outline-primary";
            }
        }
    } catch {
        const lastLog = sessionStorage.getItem('travelLog');
        if(lastLog != null){
            getTravelLog(lastLog);
        }
    }
}
*/

getTravelLog();

