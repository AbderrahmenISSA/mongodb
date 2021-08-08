var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var database = "mydb2";
var collection = "customers"

MongoClient.connect(url, function(err, db) {   //here db is the client obj
    if (err) throw err;
    var dbase = db.db(database); //here
    dbase.createCollection(collection, function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();   //close method has also been moved to client obj
    });
});