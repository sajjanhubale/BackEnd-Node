const dboperations = require('./database/dboperations');

const addNewContact = async (name,mobileNumber) =>{
    try {
        const collection = "contacts";
        const contact_id = await dboperations.getNextSequenceValue("contact_id");
        const query = {
            contact_id:contact_id,
            name:name,
            mobile_number:mobileNumber
        }
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

  const deleteContact = async (contact_id) => {
    try {
        const query = {
            contact_id:contact_id
        }
        const collection = "contacts";
        await dboperations.deleteOperation(query,collection);
    } catch (error) {
        throw (error);
    }
  }

  const updateContact = async (contact_id,name,mobileNumber) => {
    const findQuery = {
        contact_id:contact_id
    };
    const updateQuery ={
        contact_id:contact_id,
        name:name,
        mobile_number:mobileNumber
    }
    const collection = "contacts";
    await dboperations.updateOperation(findQuery,updateQuery,collection);
  }

module.exports = {
    addNewContact:addNewContact ,
    listContacts:listContacts,
    deleteContact:deleteContact,
    updateContact:updateContact
}