const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer){
    const wss = new WebSocketServer({ noServer: true });

    httpServer.on('upgrade', (request,socket,head) => {
        wss.handleUpgrade(request,socket,head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });

    let connections = [];

    wss.on('connection', (ws) => {
        const connection = { id: uuid.v4(), alive: true, ws: ws };
        connections.push(connection);

        ws.on('message', function message(data) {
            connections.forEach((element) => {
                if(element.id !== connection.id){
                    element.ws.send(data);
                }
            });
        });

        ws.on('close', () => {
            const pos = connections.findIndex((o, i) => o.id === connection.id);

            if(pos >= 0) {
                connections.splice(pos, 1);
            }
        })

        ws.on('pong', () => {
            connection.alive = true;
        });
    });

    setInterval(() => {
        connections.forEach((element) => {
            if(!element.alive){
                element.ws.terminate();
            } else {
                element.alive = false;
                element.ws.ping();
            }
        });
    }, 10000);
}

module.exports = { peerProxy };