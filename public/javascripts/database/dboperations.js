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
 const findOperation = (query,collection) =>{
    return new Promise((resolve, reject) => {
        database.get().collection(collection).find(query).toArray((err,result)=>{
            if(err){
                reject(err);
            }else {
                resolve(result)
            }
        })
    })
 }
 const deleteOperation = (query,collection) =>{
    return new Promise((resolve, reject) => {
        database.get().collection(collection).remove(query,(err,result)=>{
            if(err){
                reject(err);
            }else {
                resolve(result)
            }
        })
    })
 }
 module.exports = {
    insertOperation:insertOperation,
    findOperation:findOperation,
    deleteOperation:deleteOperation
 }