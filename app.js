const express = require('express'); 
const app = express();
var MongoClient = require('mongodb').MongoClient; 
var url = 'mongodb://trivita:159951@localhost:27017/ecom';

MongoClient.connect(url, function(err, db) { 
    console.log("Terhubung ke MongoDB!"); 
});



app.listen(3210, ()=>{ 
    console.log('Server aktif di port 3210') 
});

app.get('/bedroom', (req, res)=>{ 
    MongoClient.connect(url, (err, db)=>{ 
        var collection = db.collection('bedRoom'); 
        collection.find({}).toArray((err, docs)=>{ 
            console.log(docs); 
            res.send(docs); 
        });
    });
})
app.get('/livingroom', (req, res)=>{ 
    MongoClient.connect(url, (err, db)=>{ 
        var collection = db.collection('livingRoom'); 
        collection.find({}).toArray((err, docs)=>{ 
            console.log(docs); 
            res.send(docs); 
        });
    });
})
app.get('/bathroom', (req, res)=>{ 
    MongoClient.connect(url, (err, db)=>{ 
        var collection = db.collection('bathRoom'); 
        collection.find({}).toArray((err, docs)=>{ 
            console.log(docs); 
            res.send(docs); 
        });
    });
})

app.get('/diningroom', (req, res)=>{ 
    MongoClient.connect(url, (err, db)=>{ 
        var collection = db.collection('diningRoom'); 
        collection.find({}).toArray((err, docs)=>{ 
            console.log(docs); 
            res.send(docs); 
        });
    });
})


app.post('/bedroom', (req,res)=>{ 
    MongoClient.connect(url, (err, db)=>{ 
        var data = {namaproduk:'Tempur Sensation Elite - Matrass', deskripsi:'Tempur - Sensation Elite with Cool Touch Matrass Only', 
        harga:'IDR 30,400,000'}

        var collection = db.collection('livingRoom'); 
        collection.insert(data, (err, result)=>{ 
            console.log(result); 
            res.send(result); 
        });
    });
})
