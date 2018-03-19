var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongodb.connect(url,function(err,client){  
    if (err) throw err;
    var db = client.db('testdb');

    db.collection('tbl1').find({}).toArray(function(err,results){ 
        console.log(results.title); 
        res.render('articles', {  
            title:'Articles',  
            menu:navMenu,  
            articles:results  
        });  
    });  
});