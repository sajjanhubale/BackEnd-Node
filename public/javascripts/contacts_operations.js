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
        throw (error)
    }
  }

  const listContacts = async () => {
    try {
        const collection = "contacts";
        let query = {}
        let data = await dboperations.findOperation(query,collection);
        return data;
    } catch (error) {
        throw (error)
    }
  }

  const deleteContact = async (name) => {
    try {
        const query = {
            name:name
        }
        const collection = "contacts";
        await dboperations.deleteOperation(query,collection);
    } catch (error) {
        
    }
  }
module.exports = {
    addNewContact:addNewContact ,
    listContacts:listContacts,
    deleteContact:deleteContact
}