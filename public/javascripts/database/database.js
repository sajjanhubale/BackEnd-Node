
const MongoClient = require('mongodb').MongoClient
var state = {
    db: null,
}

exports.connect = function (db_url, done) {
    if (state.db) {
        state.db = null;
        return done()
    }
    MongoClient.connect(db_url, function (err, db) {
        if (err) return done(err)
        state.db = db
        console.log("Connected to Database")
        done()
    })
}

exports.get = function () {
    if (state.db)
        return state.db
    else{
        MongoClient.connect(db_url, function (err, db) {
            if (err) return done(err)
            state.db = db
            console.log("Reconnected to Database")
           return state.db;
        })
    }
    
}

exports.close = function (done) {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null
            state.mode = null
        })
    }
}



