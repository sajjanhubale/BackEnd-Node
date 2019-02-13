const database = require('./database');

const insertOperation = (query,collection) =>{
    return new Promise((resolve, reject) => {
        database.get().collection(collection).insert(query,(err,result)=>{
            if(err){
                reject(err);
            }else {
                resolve(result)
            }
        })
    })
 }
 module.exports = {
    insertOperation:insertOperation
 }