const travelEvent = 'travel';


class SolarSystem {
    socket;

    constructor(){
        const userNameEl = document.querySelector('.player-name');
        userNameEl.textContent = this.getPlayerName();
        this.configureWebSocket();
    } 

    getPlayerName() {
        return localStorage.getItem('username') ?? 'Unkown';
    }


    async setTravelLog(planetNumber) {
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
            this.broadcastEvent(this.getPlayerName(), travelEvent, this.getElementById(planetNumber));
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

    async getTravelLog() {
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

    getElementId(planetNumber) {
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

    logout(){
        localStorage.removeItem(`userName`);
        sessionStorage.removeItem('travelLog');
        fetch(`/api/auth/logout`, {
            method: 'delete',
        }).then(() => (window.location.href = '/'));
    }

    configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        this.socket.onopen = (event) => {
            this.displayMsg('players', 'You', 'logged in...');
            console.log("on open");
        };
        this.socket.onclose = async (event) => {
            console.log("on close");
            this.displayMsg('players', 'You', `logged out...`);
        };
        this.socket.onmessage = async (event) => {
            console.log("on message");
            const text = await event.data.text();
            const msg = JSON.parse(text);
            this.displayMsg('player', msg.from, `traveled to ${msg.value.planet}`);
        };
    }

    displayMsg(cls, from, msg) {
        const chatText = document.querySelector('#player-messages');
        chatText.innerHTML = `<span class="simulate"><span class="${cls}">${from}</span> ${msg}</span></br>` + chatText.innerHTML;
    }

    broadcastEvent(from, type, value){
        const event = {
            from: from,
            type: type,
            value: value,
        };
        this.socket.send(JSON.stringify(event));
    }
}

const solar = new SolarSystem();
solar.getTravelLog();

