const dboperations = require('./database/dboperations');

const addNewContact = async (name,mobileNumber) =>{
    try {
        const query = {
            name:name,
            mobile_number:mobileNumber
        }
        const collection = "contacts";
        await dboperations.insertOperation(query,collection);
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = {
    addNewContact:addNewContact 
}