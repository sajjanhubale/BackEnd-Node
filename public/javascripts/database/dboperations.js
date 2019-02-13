const database = require('./database');

const insertOperation = (query, collection) => {
    return new Promise((resolve, reject) => {
        database.get().collection(collection).insert(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        })
    })
}
const findOperation = (query, collection) => {
    return new Promise((resolve, reject) => {
        database.get().collection(collection).find(query).toArray((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        })
    })
}
const deleteOperation = (query, collection) => {
    return new Promise((resolve, reject) => {
        database.get().collection(collection).remove(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        })
    })
}
const updateOperation = (findQuery, updateQuery, collection) => {
    return new Promise((resolve, reject) => {
        database.get().collection(collection).update(findQuery, updateQuery, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        })
    })
}
const getNextSequenceValue = function (sequenceName) {
    return new Promise(function (resolve, reject) {
        database.get().collection("counter_collection").findAndModify({ _id: sequenceName }, null, { $inc: { sequence_value: 1 } }, function (err, result) {
            if (err) {
                reject(err);
            }
            else if (result) {
                if (result.value) {
                    resolve(result.value.sequence_value);
                } else {
                    reject("No sequencer found");
                }
            }
            else {
                reject("No sequencer found");
            }
        });
    })
}

module.exports = {
    insertOperation: insertOperation,
    findOperation: findOperation,
    deleteOperation: deleteOperation,
    getNextSequenceValue: getNextSequenceValue,
    updateOperation: updateOperation
}