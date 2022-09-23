const MongoClient = require('mongodb').MongoClient;
// var ObjectID = require('mongodb').ObjectId;
const PORT = 3000;
const express = require('express');
const app = express();

const http = require('http').Server(app);
const server = require('./listen.js');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
// const client = new MongoClient(url);
// const colName = 'products'

MongoClient.connect(url, {useNewUrlParser:true}, function(err,client) {
    console.log("connect to server");
    const db = client.db(dbName);
    // const collection = db.collection(colName);
    require('./add.js')(db,app);
    require('./getList')(db,app);
    client.close();
});

server.listen(http,PORT);