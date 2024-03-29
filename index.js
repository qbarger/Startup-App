const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.set('trust proxy', true);

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/update', (req, res) => {
    travelLog = updateLog(req.body, travelLog);
    res.send(travelLog);
});

app.use((_req, res) => {
    res.sendFile('solarsystem.html', {root: 'public'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let travelLog = [];
function updateLog(planet, travelLog){
    let found = false;
    for(var i = 0; i < travelLog.length; i++){
        if(travelLog[i] === planet){
            found = true;
        }
    }
    if(!found){
        travelLog.push(planet);
    }
    return travelLog;
}