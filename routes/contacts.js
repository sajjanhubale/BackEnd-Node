var express = require('express');
var router = express.Router();
const contacts = require('../public/javascripts/contacts_operations');
/* GET users listing. */
router.post('/addnewcontact', function(req, res, next) {
    try {
        let name = req.body.name;
        let mobileNumber = req.body.mobileNumber;
        contacts.addNewContact(name,mobileNumber)
        .then(()=>{
            res.json({flag:"success"})
        }).catch((err)=>{
            console.log(err)
            res.json({flag:"error"})
        })
    } catch (error) {
        res.json({flag:"error"})
    }
});
router.post('/deletecontact', function(req, res, next) {
    try {
        let contact_id = req.body.contact_id;
        contacts.deleteContact(contact_id)
        .then(()=>{
            res.json({flag:"success"})
        }).catch((err)=>{
            console.log(err)
            res.json({flag:"error"})
        })
    } catch (error) {
        res.json({flag:"error"})
    }
});
router.post('/getlistofcontacts', function(req, res, next) {
    try {
        contacts.listContacts()
        .then((data)=>{
            res.json({flag:"success",data:data})
        }).catch((err)=>{
            console.log(err)
            res.json({flag:"error"})
        })
    } catch (error) {
        res.json({flag:"error"})
    }
});
router.post('/editcontact', function(req, res, next) {
    try {
        console.log(req.body)
        let contact_id = req.body.contact_id;
        let name = req.body.name;
        let mobileNumber = req.body.mobileNumber;
        contacts.updateContact(contact_id,name,mobileNumber)
        .then(()=>{
            res.json({flag:"success"})
        }).catch((err)=>{
            console.log(err)
            res.json({flag:"error"})
        })
    } catch (error) {
        res.json({flag:"error"})
    }
});
module.exports = router;
