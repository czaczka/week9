const MongoClient = require('mongodb').MongoClient;
// var ObjectID = require('mongodb').ObjectId;

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
// const client = new MongoClient(url);
// const colName = 'products'

MongoClient.connect(url, {useNewUrlParser:true}, function(err,client) {
    console.log("connect to server");
    const db = client.db(dbName);
    // const collection = db.collection(colName);
    client.close();
});