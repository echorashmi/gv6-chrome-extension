/*
Task:
DONE 1. Connect to MongoDB
DONE 2. Store a hardcoded value in MongoDB
DONE 3. Retrieve the value in MongoDB
4. Create a REST Endpoint - Post and Get for both the services above i.e. 2 and 3. 

*/

//Create a Basic App:
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//Create a Mongo Connection:
const {MongoClient} = require('mongodb');
async function main(){
    const uri = "mongodb://localhost:27017/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    
    client.connect(function(err, db){
        if (err) throw err;
        var dbo = db.db("gvn");
        var collection = dbo.collection("gvn6");

        //Read from Collection:
        collection.findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });

        //Write to Collection:
        var doc1 = {'hello': 'doc1'};
        collection.insertOne(doc1);
    });

}

main().catch(console.error);