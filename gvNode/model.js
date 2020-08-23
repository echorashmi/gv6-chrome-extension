var mongoUtil = require('./mongoUtil');

mongoUtil.connectToServer(function(err, client) {
    if (err) console.log(err);
});

function accessConfig(type, data){
    var db = mongoUtil.getDb();
    
    //Read from Collection:
    if(type == 'get'){
        db.collection('gvn6').findOne({}, function(err, result) {
            console.log(result);
        });
    }
    else if(type == 'post'){
        db.collection('gvn6').deleteMany({});
        db.collection('gvn6').insertOne(data);
    }
}

function saveConfig(data){
    //Write to Collection:
    client.connect(function(err, db){
        if (err) throw err;
        var dbo = db.db("gvn6");
        var collection = dbo.collection("gvn6");
        collection.deleteMany({});
        collection.insertOne(data);
    });
}

const Config = function() {};

Config.prototype.accessConfig = accessConfig;
Config.prototype.saveConfig = saveConfig;

module.exports = new Config();