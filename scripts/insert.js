var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var database = "mydb2";
var collection = "customers"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    var myobj = { name: "Move2Cloud", address: "Sceaux 92330" };
    
    dbo.collection(collection).insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  })