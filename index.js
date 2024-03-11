const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.listen(3000);