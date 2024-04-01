const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbconfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');

(async function testConnection() {
    await client.connect();
    await db.command({ping: 1});
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(username) {
    return userCollection.findOne({ name: username });
}

function getUserByToken(token) {
    return userCollection.findOne({ token : token });
}

async function createUser(username, password){
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        name: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    return user;
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
};