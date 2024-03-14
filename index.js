const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/log', (_req, res) => {
    res.send(travelLog);
});

apiRouter.post('/update', (req, res) => {
    travelLog = updateLog(req.body, travelLog);
    res.send(travelLog);
});

app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let travelLog = [];
function updateLog(planet, travelLog){
    let found = false;
    travelLog.array.forEach(element => {
        if(element === planet){
            found = true;
        }
    });
    if(!found){
        travelLog.push(planet);
    }
    return travelLog;
}