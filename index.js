const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.set('trust proxy', true);

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
    if(await DB.getUser(req.body.name)){
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await DB.createUser(req.body.name, req.body.password);

        setAuthCookie(res, user.token);
        res.send({
            id: user._id,
        });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.name);
    if(user){
        if(await bcrypt.compare(req.body.password, user.password)){
            setAuthCookie(res, user.token);
            res.send({ id: user._id});
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized'});
})

apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

//need logout api
//need a getUser api

var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
    authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if(user){
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
});

apiRouter.post('/update', (req, res) => {
    travelLog = updateLog(req.body, travelLog);
    res.send(travelLog);
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

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.use((_req, res) => {
    res.sendFile('solarsystem.html', {root: 'public'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});