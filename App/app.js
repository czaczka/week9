const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err, client) {
    if (err) {return console.log(err)}

    const dbName = 'mydb';
    const db = client.db(dbName);
});