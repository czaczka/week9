const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;
const PORT = 3000;
const express = require('express');
const app = express();

const http = require('http').Server(app);
const server = require('./listen.js');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { ObjectId } = require('mongodb');
app.use(bodyParser.json());

app.use(cors());

const url = 'mongodb://localhost:27017';
const dbName = 'mydb1';
// const client = new MongoClient(url);
// const colName = 'products'

MongoClient.connect(url, {useNewUrlParser:true}, function(err,client) {
    console.log("connect to server");
    const db = client.db(dbName);
    // const collection = db.collection(colName);
    require('./add.js')(db,app);
    require('./getList')(db,app);
    require('./delete')(db,app,ObjectID);
    require('./prodcount')(db,app);
    require('./validid')(db,app);
    require('./update.js')(db,app,ObjectID);
    
    // client.close();
});

server.listen(http,PORT);